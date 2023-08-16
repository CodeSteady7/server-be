const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");
const { Users } = require("../models");
const bcrypt = require("bcrypt");
let db = require("../models");

const v = new Validator();
const userCtrl = {
  datetimesTbl: async (req, res) => {
    try {
      const datetimeget = await db.sequelize.query(
        "SELECT datetime.datetime, datetime.id, field.valueVField, field.valueAField, field.name_table, gentrafo.liquid_level, gentrafo.liquid_temp, gentrafo.wind_temp, gentrafo.name_table, kw_hours.value_tblkw_hours, kw_hours.name_table, loadmw.valueMeter_loadmw, loadmw.valueRecord_loadmw, loadmw.name_table, loadamp.value1Loadamp, loadamp.value2Loadamp, loadamp.value3Loadamp, loadamp.name_table FROM datetime LEFT JOIN loadamp ON datetime.datetime = loadamp.createdAt LEFT JOIN field ON datetime.datetime = field.createdAt LEFT JOIN loadmw ON datetime.datetime = loadmw.createdAt LEFT JOIN gentrafo ON datetime.datetime = gentrafo.createdAt LEFT JOIN kw_hours ON datetime.datetime = kw_hours.createdAt",
        { type: QueryTypes.SELECT }
      );
      // const datetimeget = await db.sequelize.query(
      // 	"SELECT datetime.* FROM ( ( datetime LEFT JOIN field ON ( ( ( datetime.name_pg = field.name_table ) AND ( datetime.datetime = field.createdAt ) ) ) ) LEFT JOIN loadamp ON ( ( ( datetime.datetime = loadamp.createdAt ) AND ( datetime.name_pg = loadamp.name_table ) ) ) )",
      // 	{ type: QueryTypes.SELECT }
      // )

      res.status(200).json({ datetimeget, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  newAkun: async (req, res) => {
    try {
      const schema = {
        username: "string",
        password: "string|min:6",
        role: "string|max:1",
      };

      const { username, password, role } = req.body;

      // const passwordHash = await bcrypt.hash(password, 10)
      // console.log(
      // 	"🚀 ~ file: userCtrl.js ~ line 38 ~ newAkun: ~ passwordHash",
      // 	passwordHash
      // )
      // const obj = {flags: regex.flags, source: regex.source};
      // const string = JSON.stringify(obj);

      const newUser = {
        username,
        password,
        role,
      };
      // console.log("🚀 ~ file: userCtrl.js ~ line 40 ~ newAkun: ~ newUser", newUser)

      const validate = v.validate(newUser, schema);
      if (validate.length) {
        return res.status(400).json(validate);
      }

      const user = await Users.create(newUser);
      res.status(200).json({ user, msg: "User berhasil ditambahkan" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      let selector = {
        where: { id: req.params.id },
      };
      let body = req.body;
      console.log("nilai body", body);
      let values = {
        username: username,
        password: password,
      };

      const data = await Users.update(values, selector);
      const user = await Users.findOne({ where: { id: req.params.id } });

      console.log("🚀  selector, user, data", selector, user, data);
      res.status(200).json({ selector, user, data, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findOne({ where: { username: username } });
      if (!user)
        return res.status(400).json({
          msg: "Maaf, username yang Anda masukkan salah. Silakan periksa kembali dan coba lagi.",
        });

      console.log("user => ", user);
      // const passwordsHash = await bcrypt.compare(password, Users.password)
      const passwordsHash = await Users.findOne({
        where: { password: password },
      });
      if (!passwordsHash)
        return res.status(402).json({
          msg: "Maaf, password yang Anda masukkan salah. Silakan periksa kembali dan coba lagi.",
        });

      const accesstoken = createAcceessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/users/refresh_token",
        // path: "http://localhost:4000/users/refresh_token",
        maxAge: 7 * 24 * 60 * 1000,
      });

      res.json({
        user,
        accesstoken,
        refreshtoken,
        msg: "login success",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      // const user = await Users.findById(req.user.id).select('-password');

      const user = await Users.findOne(req.user.id);
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      // console.log("refresh token => ", rf_token);
      if (!rf_token)
        return res.status(400).json({ msg: "Please login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please login verify" });

        const accesstoken = createAcceessToken({ id: user.id });

        res.json({ user, accesstoken, rf_token });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", {
        // path: "http://localhost:4000/users/refresh_token",
        path: "/users/refresh_token",
      });
      let datas = res.cookie;
      return res.json({ datas, msg: "Logged Out_" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

const createAcceessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    // expiresIn: '11m',
  });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    // expiresIn: '7d',
  });
};

module.exports = userCtrl;
