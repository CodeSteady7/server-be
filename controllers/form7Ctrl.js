const Validator = require("fastest-validator");
const db = require("../models");
const { QueryTypes } = require("sequelize");
const {
  tbl_fuelgas_press,
  tbl_compdisch_airpress,
  tbl_diffpress,
  tbl_cooling_water,
  tbl_form07,
  tbl_historyDate,
  tbl_signatureform,
} = require("../models");

const v = new Validator();
const form7Ctrl = {
  form7Add: async (req, res) => {
    try {
      const {
        value_hpgas_before,
        value_beforestop_value,
        value_aftergas_stopvalue,
        value_aftergas_controlvalue,
        value_inlethouse_filter,
        value_lubeoil_filter,
        value_controloil_filter,
        value_hydoil_filter,
        value_afterporous_filter,
        value_for96cd,
        value_temperature,
        nameForm,
        kode_jam,
        user_id,
        akses_masuk,
      } = req.body;

      const date = new Date();
      let vDate = date.toJSON();
      let createdAt = vDate.split("T");
      let setcreatedAt = createdAt[0];
      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: setcreatedAt },
      });

      // check id terakhir, apabila tidak sama, maka tidak dapat di input
      let checkLastRow = [
        await tbl_fuelgas_press.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await tbl_compdisch_airpress.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await tbl_diffpress.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await tbl_cooling_water.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
      ];

      let lastRowtbl_form = await tbl_form07.findOne({
        attributes: ["id_form"],
        order: [["id_form", "DESC"]],
      });

      let data = checkLastRow.map((item) => {
        return item.id == lastRowtbl_form.id_form;
      });

      let checkInclude = data.includes(false);

      // ----- end

      const t = await db.sequelize.transaction();

      if (checkInclude == false) {
        try {
          let check =
            checkDate == null || ""
              ? (await tbl_historyDate.create(
                  {
                    setcreatedAt,
                    setcreatedAt,
                    user_id: user_id,
                  },
                  { transaction: t }
                )) &&
                (await tbl_signatureform.create(
                  {
                    createdAt: setcreatedAt,
                  },
                  { transaction: t }
                ))
              : "";

          const gettbl_fuelgas_press = await tbl_fuelgas_press.create(
            {
              value_hpgas_before: value_hpgas_before,
              value_beforestop_value: value_beforestop_value,
              value_aftergas_stopvalue: value_aftergas_stopvalue,
              value_aftergas_controlvalue: value_aftergas_controlvalue,
              kode_jam: kode_jam,
              name_table: "FUEL GAS TEMPERATURE",
            },
            { transaction: t }
          );

          const gettbl_compdisch_airpress = await tbl_compdisch_airpress.create(
            {
              value_afterporous_filter: value_afterporous_filter,
              value_for96cd: value_for96cd,
              kode_jam: kode_jam,
              name_table: "COMPDISCH AIR PRESS",
            },
            { transaction: t }
          );

          const gettbl_diff_press = await tbl_diffpress.create(
            {
              value_inlethouse_filter: value_inlethouse_filter,
              value_lubeoil_filter: value_lubeoil_filter,
              value_controloil_filter: value_controloil_filter,
              value_hydoil_filter: value_hydoil_filter,
              kode_jam: kode_jam,
              name_table: "DIFF PRESS",
            },
            { transaction: t }
          );

          const gettbl_cooling_water = await tbl_cooling_water.create(
            {
              value_temperature: value_temperature,
              kode_jam: kode_jam,
              name_table: "COOLING WATER",
            },
            { transaction: t }
          );

          const postFormID = await tbl_form07.create(
            {
              nameForm: nameForm,
              kode_jam: kode_jam,
              akses_masuk: akses_masuk,
            },
            { transaction: t }
          );

          await t.commit();

          res.status(200).json({
            check,
            gettbl_fuelgas_press,
            gettbl_compdisch_airpress,
            gettbl_diff_press,
            gettbl_cooling_water,
            postFormID,
            msg: "success",
          });
        } catch (err) {
          console.log(err);
          await t.rollback();
        }
      } else {
        return res.status(500).json({
          msg: "Terdapat data yang sama, untuk memperbaikinya segera hubungi team ICT ",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // postFormId07: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam } = req.body
  // 		let body = req.body
  // 		const postFormID = await tbl_form07.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		})

  // 		res.status(200).json({ postFormID, msg: "success" })
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message })
  // 	}
  // },

  getForm07params: async (req, res) => {
    try {
      const tbl_fuelgas_presss = await tbl_fuelgas_press.findAll({
        where: { id: req.params.id },
      });
      const tbl_compdisch_airpresss = await tbl_compdisch_airpress.findAll({
        where: { id: req.params.id },
      });
      const tbl_diffpresss = await tbl_diffpress.findAll({
        where: { id: req.params.id },
      });
      const tbl_cooling_waters = await tbl_cooling_water.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        tbl_fuelgas_presss,
        tbl_compdisch_airpresss,
        tbl_diffpresss,
        tbl_cooling_waters,

        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm07: async (req, res) => {
    try {
      const tbl_fuelgas_press = await db.sequelize.query(
        "SELECT tbl_fuelgas_press.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_fuelgas_press LEFT JOIN tbl_jam ON tbl_fuelgas_press.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_compdisch_airpress = await db.sequelize.query(
        "SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_diffpress = await db.sequelize.query(
        "SELECT tbl_diffpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_diffpress LEFT JOIN tbl_jam ON tbl_diffpress.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_cooling_water = await db.sequelize.query(
        "SELECT tbl_cooling_water.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_cooling_water LEFT JOIN tbl_jam ON tbl_cooling_water.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_fuelgas_press,
        tbl_compdisch_airpress,
        tbl_diffpress,
        tbl_cooling_water,

        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId07: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form07.* FROM tbl_form07 INNER JOIN tbl_fuelgas_press ON tbl_form07.kode_jam = tbl_fuelgas_press.kode_jam AND tbl_form07.createdAt = tbl_fuelgas_press.createdAt AND tbl_form07.id_form = tbl_fuelgas_press.id INNER JOIN tbl_compdisch_airpress ON tbl_form07.kode_jam = tbl_compdisch_airpress.kode_jam AND tbl_form07.createdAt = tbl_compdisch_airpress.createdAt AND tbl_form07.id_form = tbl_compdisch_airpress.id INNER JOIN tbl_diffpress ON tbl_form07.kode_jam = tbl_diffpress.kode_jam AND tbl_form07.createdAt = tbl_diffpress.createdAt AND tbl_form07.id_form = tbl_diffpress.id INNER JOIN tbl_cooling_water ON tbl_form07.kode_jam = tbl_cooling_water.kode_jam AND tbl_form07.createdAt = tbl_cooling_water.createdAt AND tbl_form07.id_form = tbl_cooling_water.id",
        { type: QueryTypes.SELECT }
      );
      // const getID = await db.sequelize.query(
      //   "SELECT tbl_form07.id_form, tbl_form07.nameForm, tbl_form07.kode_jam, tbl_form07.createdAt, tbl_form07.updatedAt FROM tbl_form07 INNER JOIN tbl_fuelgas_press ON tbl_form07.id_form = tbl_fuelgas_press.id INNER JOIN tbl_compdisch_airpress ON tbl_form07.id_form = tbl_compdisch_airpress.id INNER JOIN tbl_diffpress ON tbl_form07.id_form = tbl_diffpress.id INNER JOIN tbl_cooling_water ON tbl_form07.id_form = tbl_cooling_water.id",
      //   { type: QueryTypes.SELECT }
      // );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm07: async (req, res) => {
    const { date, clock } = req.query;
    console.log("req.query", req.query, "||", date, clock);
    try {
      let selector = {
        where: { id: req.params.id },
      };

      let selectorTwo = {
        where: { kode_jam: clock, createdAt: date },
      };

      const {
        value_hpgas_before,
        value_beforestop_value,
        value_aftergas_stopvalue,
        value_aftergas_controlvalue,
        value_inlethouse_filter,
        value_lubeoil_filter,
        value_controloil_filter,
        value_hydoil_filter,
        value_afterporous_filter,
        value_for96cd,
        value_temperature,
        kode_jam,
      } = req.body;

      const gettbl_fuelgas_press = await tbl_fuelgas_press.update(
        {
          value_hpgas_before: value_hpgas_before,
          value_beforestop_value: value_beforestop_value,
          value_aftergas_stopvalue: value_aftergas_stopvalue,
          value_aftergas_controlvalue: value_aftergas_controlvalue,
          kode_jam: kode_jam,
          name_table: "FUEL GAS TEMPERATURE",
        },
        selectorTwo
      );

      const gettbl_compdisch_airpress = await tbl_compdisch_airpress.update(
        {
          value_afterporous_filter: value_afterporous_filter,
          value_for96cd: value_for96cd,
          kode_jam: kode_jam,
          name_table: "COMPDISCH AIR PRESS",
        },
        selectorTwo
      );

      const gettbl_diff_press = await tbl_diffpress.update(
        {
          value_inlethouse_filter: value_inlethouse_filter,
          value_lubeoil_filter: value_lubeoil_filter,
          value_controloil_filter: value_controloil_filter,
          value_hydoil_filter: value_hydoil_filter,
          kode_jam: kode_jam,
          name_table: "DIFF PRESS",
        },
        selectorTwo
      );

      const gettbl_cooling_water = await tbl_cooling_water.update(
        {
          value_temperature: value_temperature,
          kode_jam: kode_jam,
          name_table: "COOLING WATER",
        },
        selectorTwo
      );

      res.status(200).json({
        gettbl_fuelgas_press,
        gettbl_compdisch_airpress,
        gettbl_diff_press,
        gettbl_cooling_water,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = form7Ctrl;

// gettbl_fuelgas_press: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_fuelgas_press.value_hpgas_before, tbl_fuelgas_press.value_beforestop_value, tbl_fuelgas_press.value_aftergas_stopvalue, tbl_fuelgas_press.value_aftergas_controlvalue, tbl_fuelgas_press.kode_jam, tbl_fuelgas_press.createdAt, tbl_fuelgas_press.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam, tbl_fuelgas_press.id FROM tbl_fuelgas_press LEFT JOIN tbl_jam ON tbl_fuelgas_press.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)

// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_compdisch_airpress: async (req, res) => {
// 	try {
// 		// let query = ('SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam', { type: QueryTypes.SELECT })
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_compdisch_airpress.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_compdisch_airpress LEFT JOIN tbl_jam ON tbl_compdisch_airpress.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)

// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_diff_press: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_diffpress.id, tbl_diffpress.value_inlethouse_filter, tbl_diffpress.value_lubeoil_filter, tbl_diffpress.value_controloil_filter, tbl_diffpress.value_hydoil_filter, tbl_diffpress.kode_jam, tbl_diffpress.createdAt, tbl_diffpress.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_diffpress LEFT JOIN tbl_jam ON tbl_diffpress.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },

// gettbl_cooling_water: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_cooling_water.id, tbl_cooling_water.value_temperature, tbl_cooling_water.kode_jam, tbl_cooling_water.createdAt, tbl_cooling_water.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_cooling_water LEFT JOIN tbl_jam ON tbl_cooling_water.kode_jam = tbl_jam.nilai_jam",
// 			{ type: QueryTypes.SELECT }
// 		)
// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
