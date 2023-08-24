const { tbl_users_admin } = require("../../models");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;

module.exports = {
 index: async (req, res) => {
  try {
   console.log("req", req.session.user);

   if (!(req.session.user == null || undefined)) {
    res.redirect("/dashboard");
   }

   res.render("auth/login");
  } catch (err) {
   console.log(err);
  }
 },

 loginAuth: async (req, res) => {
  try {
   const { email, password } = req.body;

   let body = req.body;
   console.log("req", body);

   const db = await tbl_users_admin.findOne({ where: { email: email } });
   console.log("req", db);
   const checkPassword = await bcrypt.compare(password, db.password);

   if (db) {
    if (checkPassword) {
     req.session.user = {
      id: db.id,
      username: db.username,
      email: db.email,
      role: db.role,
      username: db.username,
     };
     console.log("req", body);
     // res.status(200).json({ data: { db } });
     res.redirect("/dashboard");
    } else {
     res.redirect("/");
    }
   } else {
    res.redirect("/");
   }
  } catch (err) {
   console.log("err", err);
   res.redirect("/");
  }
 },

 registerAuth: async (req, res) => {
  try {
   const { username, email, password, role } = req.body;

   let passwordHash = bcrypt.hashSync(password, HASH_ROUND);

   let data = await tbl_users_admin.create({
    username,
    email,
    password: passwordHash,
    role,
   });

   res.status(200).json({ data: { data } });
  } catch (err) {
   console.log("err", err);
  }
 },

 logout: async (req, res) => {
  try {
   req.session.destroy(() => {
     res.redirect("/");
   });
  } catch (err) {
   console.error("error destroying session", err);
   res.status(500).json("error destroying session", err);
  }
 },
};
