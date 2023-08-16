const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");
let db = require("../models");

const {
  tbl_exhaust_flue_gas_temperature,
  tbl_exhaust_temp,
  tbl_comp_temp,
  tbl_form06,
  tbl_historyDate,
  tbl_signatureform,
} = require("../models");

const v = new Validator();
const form6Ctrl = {
  form6add: async (req, res) => {
    try {
      const {
        value_1_exhaustTemp,
        value_2_exhaustTemp,
        value_3_exhaustTemp,
        value_4_exhaustTemp,
        value_5_exhaustFluegas,
        value_6_exhaustFluegas,
        value_7_exhaustFluegas,
        value_8_exhaustFluegas,
        value_9_exhaustFluegas,
        value_10_exhaustFluegas,
        value_11_exhaustFluegas,
        value_12_exhaustFluegas,
        value_AVETX_exhaustFluegas,
        value_T1_exhaustFluegas,
        value_T2_exhaustFluegas,
        value_T3_exhaustFluegas,
        value_T4_exhaustFluegas,
        value_T5_exhaustFluegas,
        value_T6_exhaustFluegas,
        // value_inletair,
        user_id,
        nameForm,
        kode_jam,
        akses_masuk,
      } = req.body;

      const date = new Date();
      let vDate = date.toJSON();
      let createdAt = vDate.split("T");
      let setcreatedAt = createdAt[0];
      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: setcreatedAt },
      });

      //
      let checkLastRow = [
        await tbl_exhaust_flue_gas_temperature.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await tbl_exhaust_temp.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        // await tbl_comp_temp.findOne({
        //   attributes: ["id"],
        //   order: [["id", "DESC"]],
        // }),
      ];

      let lastRowtbl_form = await tbl_form06.findOne({
        attributes: ["id_form"],
        order: [["id_form", "DESC"]],
      });

      let data = checkLastRow.map((item) => {
        // console.log("item", item.id, lastRowtbl_form.id_form);
        return item.id == lastRowtbl_form.id_form;
      });

      let checkInclude = data.includes(false);

      // -----
      // let checkDateNow = date.toISOString().split("T")[0];
      // let db_comp_temp = await tbl_comp_temp.findAll({
      //   attributes: ["id", "kode_jam", "createdAt", "value_inletair"],
      //   where: {
      //     createdAt: checkDateNow,
      //     kode_jam: req.body.kode_jam,
      //   },
      //   order: [["id", "DESC"]],
      //   limit: 1,
      // });

      // console.log("db_comp_temp", db_comp_temp);

      // let checkRowtbl_form = lastRowtbl_form.id_form;
      // let checkRowComp_temp = db_comp_temp[0]?.createdAt;
      //

      let checkClockNow = req.body.kode_jam;
      // let checkClockNowcreatedAt = setcreatedAt;
      // let db_comp = { checkDateNow, db_comp_temp, checkClockNow };

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

          const gettbl_exhaust_flue_gas_temperature =
            await tbl_exhaust_flue_gas_temperature.create(
              {
                value_5_exhaustFluegas: value_5_exhaustFluegas,
                value_6_exhaustFluegas: value_6_exhaustFluegas,
                value_7_exhaustFluegas: value_7_exhaustFluegas,
                value_8_exhaustFluegas: value_8_exhaustFluegas,
                value_9_exhaustFluegas: value_9_exhaustFluegas,
                value_10_exhaustFluegas: value_10_exhaustFluegas,
                value_11_exhaustFluegas: value_11_exhaustFluegas,
                value_12_exhaustFluegas: value_12_exhaustFluegas,
                value_AVETX_exhaustFluegas: value_AVETX_exhaustFluegas,
                value_T1_exhaustFluegas: value_T1_exhaustFluegas,
                value_T2_exhaustFluegas: value_T2_exhaustFluegas,
                value_T3_exhaustFluegas: value_T3_exhaustFluegas,
                value_T4_exhaustFluegas: value_T4_exhaustFluegas,
                value_T5_exhaustFluegas: value_T5_exhaustFluegas,
                value_T6_exhaustFluegas: value_T6_exhaustFluegas,
                kode_jam: kode_jam,
                name_table: "EXHAUST FLUE GAS",
              },
              { transaction: t }
            );

          const gettbl_exhaust_temp = await tbl_exhaust_temp.create(
            {
              value_1_exhaustTemp: value_1_exhaustTemp,
              value_2_exhaustTemp: value_2_exhaustTemp,
              value_3_exhaustTemp: value_3_exhaustTemp,
              value_4_exhaustTemp: value_4_exhaustTemp,
              kode_jam: kode_jam,
              name_table: "EXHAUST TEMP",
            },
            { transaction: t }
          );

          // let gettbl_comp_temp =
          //   (checkDateNow == db_comp_temp[0]?.createdAt &&
          //     checkClockNow == db_comp_temp[0]?.kode_jam &&
          //     db_comp_temp[0]?.value_inletair == null) ||
          //   ""
          //     ? await tbl_comp_temp.update(
          //         {
          //           value_inletair: value_inletair,
          //           kode_jam: kode_jam,
          //           name_table: "COMP TEMP",
          //         },
          //         { where: { id: db_comp_temp[0]?.id } },
          //         { transaction: t }
          //       )
          //     : await tbl_comp_temp.create(
          //         {
          //           value_inletair: value_inletair,
          //           kode_jam: kode_jam,
          //           name_table: "COMP TEMP",
          //         },
          //         { transaction: t }
          //       );

          const postFormID = await tbl_form06.create(
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
            gettbl_exhaust_flue_gas_temperature,
            gettbl_exhaust_temp,
            // gettbl_comp_temp,
            postFormID,
            msg: "success",
          });
        } catch (err) {
          console.log(err);
          await t.rollback();
        }
      } else {
        return res.status(500).json({
          // db_comp,
          msg: "contact an IT engineer",
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }
  },

  // postFormId06: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam } = req.body
  // 		let body = req.body
  // 		const postFormID = await tbl_form06.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		})

  // 		res.status(200).json({ postFormID, msg: "success" })
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message })
  // 	}
  // },

  getForm06params: async (req, res) => {
    try {
      const tbl_exhaust_flue_gas_temperatures =
        await tbl_exhaust_flue_gas_temperature.findAll({
          where: { id: req.params.id },
        });
      const tbl_exhaust_temps = await tbl_exhaust_temp.findAll({
        where: { id: req.params.id },
      });
      const tbl_comp_temps = await tbl_comp_temp.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        tbl_exhaust_flue_gas_temperatures,
        tbl_exhaust_temps,
        tbl_comp_temps,
        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm06: async (req, res) => {
    try {
      const tbl_exhaust_flue_gas_temperature = await db.sequelize.query(
        "SELECT tbl_exhaust_flue_gas_temperature.*, tbl_jam.nilai_jam, tbl_jam.urutan_jam FROM tbl_exhaust_flue_gas_temperature LEFT JOIN tbl_jam ON tbl_exhaust_flue_gas_temperature.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_exhaust_temp = await db.sequelize.query(
        "SELECT tbl_exhaust_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_temp LEFT JOIN tbl_jam ON tbl_exhaust_temp.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const tbl_comp_temp = await db.sequelize.query(
        "SELECT tbl_comp_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_comp_temp LEFT JOIN tbl_jam ON tbl_comp_temp.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_exhaust_flue_gas_temperature,
        tbl_exhaust_temp,
        tbl_comp_temp,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId06: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form06.id_form, tbl_form06.nameForm, tbl_form06.kode_jam, tbl_form06.createdAt, tbl_form06.updatedAt FROM tbl_form06 INNER JOIN tbl_exhaust_flue_gas_temperature ON tbl_form06.id_form = tbl_exhaust_flue_gas_temperature.id INNER JOIN tbl_exhaust_temp ON tbl_form06.id_form = tbl_exhaust_temp.id INNER JOIN tbl_comp_temp ON tbl_form06.id_form = tbl_comp_temp.id",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm06: async (req, res) => {
    try {
      let selector = {
        where: { id: req.params.id },
      };

      const {
        value_1_exhaustTemp,
        value_2_exhaustTemp,
        value_3_exhaustTemp,
        value_4_exhaustTemp,
        value_5_exhaustFluegas,
        value_6_exhaustFluegas,
        value_7_exhaustFluegas,
        value_8_exhaustFluegas,
        value_9_exhaustFluegas,
        value_10_exhaustFluegas,
        value_11_exhaustFluegas,
        value_12_exhaustFluegas,
        value_AVETX_exhaustFluegas,
        value_T1_exhaustFluegas,
        value_T2_exhaustFluegas,
        value_T3_exhaustFluegas,
        value_T4_exhaustFluegas,
        value_T5_exhaustFluegas,
        value_T6_exhaustFluegas,
        // value_inletair,
        kode_jam,
      } = req.body;

      const gettbl_exhaust_flue_gas_temperature =
        await tbl_exhaust_flue_gas_temperature.update(
          {
            value_5_exhaustFluegas: value_5_exhaustFluegas,
            value_6_exhaustFluegas: value_6_exhaustFluegas,
            value_7_exhaustFluegas: value_7_exhaustFluegas,
            value_8_exhaustFluegas: value_8_exhaustFluegas,
            value_9_exhaustFluegas: value_9_exhaustFluegas,
            value_10_exhaustFluegas: value_10_exhaustFluegas,
            value_11_exhaustFluegas: value_11_exhaustFluegas,
            value_12_exhaustFluegas: value_12_exhaustFluegas,
            value_AVETX_exhaustFluegas: value_AVETX_exhaustFluegas,
            value_T1_exhaustFluegas: value_T1_exhaustFluegas,
            value_T2_exhaustFluegas: value_T2_exhaustFluegas,
            value_T3_exhaustFluegas: value_T3_exhaustFluegas,
            value_T4_exhaustFluegas: value_T4_exhaustFluegas,
            value_T5_exhaustFluegas: value_T5_exhaustFluegas,
            value_T6_exhaustFluegas: value_T6_exhaustFluegas,
            kode_jam: kode_jam,
            name_table: "EXHAUST FLUE GAS",
          },
          selector
        );

      const gettbl_exhaust_temp = await tbl_exhaust_temp.update(
        {
          value_1_exhaustTemp: value_1_exhaustTemp,
          value_2_exhaustTemp: value_2_exhaustTemp,
          value_3_exhaustTemp: value_3_exhaustTemp,
          value_4_exhaustTemp: value_4_exhaustTemp,
          kode_jam: kode_jam,
          name_table: "EXHAUST TEMP",
        },
        selector
      );

      // const gettbl_comp_temp = await tbl_comp_temp.update(
      //   {
      //     // value_inletair: value_inletair,
      //     value_inletair: value_inletair,
      //     kode_jam: kode_jam,
      //     name_table: "COMP TEMPERATURE",
      //   },
      //   selector
      // );

      res.status(200).json({
        gettbl_exhaust_flue_gas_temperature,
        gettbl_exhaust_temp,
        // gettbl_comp_temp,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
      });
    }
  },
};

module.exports = form6Ctrl;

// gettbl_exhaust_flue_gas_temperature: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_exhaust_flue_gas_temperature.id, tbl_exhaust_flue_gas_temperature.value_5_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_6_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_7_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_8_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_9_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_10_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_11_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_12_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_AVETX_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T1_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T2_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T3_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T4_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T5_exhaustFluegas, tbl_exhaust_flue_gas_temperature.value_T6_exhaustFluegas, tbl_exhaust_flue_gas_temperature.kode_jam, tbl_exhaust_flue_gas_temperature.createdAt, tbl_exhaust_flue_gas_temperature.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_flue_gas_temperature LEFT JOIN tbl_jam ON tbl_exhaust_flue_gas_temperature.kode_jam = tbl_jam.nilai_jam"
// 		)
// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({
// 			msg: error.message,
// 		})
// 	}
// },

// gettbl_exhaust_temp: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_exhaust_temp.id, tbl_exhaust_temp.value_1_exhaustTemp, tbl_exhaust_temp.value_2_exhaustTemp, tbl_exhaust_temp.value_3_exhaustTemp, tbl_exhaust_temp.value_4_exhaustTemp, tbl_exhaust_temp.kode_jam, tbl_exhaust_temp.createdAt, tbl_exhaust_temp.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_exhaust_temp LEFT JOIN tbl_jam ON tbl_exhaust_temp.kode_jam = tbl_jam.nilai_jam"
// 		)

// 		res.status(200).json({
// 			data,
// 			msg: "success",
// 		})
// 	} catch (error) {
// 		return res.status(500).json({
// 			msg: error.message,
// 		})
// 	}
// },
