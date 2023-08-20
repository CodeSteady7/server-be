const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");

let db = require("../models");
const {
  tbl_bently_vibr_unfilter,
  tbl_seismic_vibration,
  tbl_form08,
  tbl_historyDate,
  tbl_signatureform,
} = require("../models");

const v = new Validator();
const form8Ctrl = {
  form8Add: async (req, res) => {
    try {
      const {
        thrustBrg_1_A,
        thrustBrg_1_B,
        No1Brg_rv101_V,
        No1Brg_rv101_H,
        No2Brg_rv102_V,
        No2Brg_rv102_H,
        GenBrg_rv103_V,
        GenBrg_rv103_H,
        GearturbineBrg_rv104_V,
        GearturbineBrg_rv104_H,
        GearpinionBrg_rv105_V,
        GearpinionBrg_rv105_H,
        GearwheelturbineBrg_rv106_V,
        GearwheelturbineBrg_rv106_H,
        GearwheelGen_Brg_rv107_V,
        GearwheelGen_Brg_rv107_H,
        IBRG_casing,
        comp_Casing,
        gen_BrgCasing,
        nameForm,
        kode_jam,
        user_id,
        akses_masuk,
      } = req.body;

      console.log("req", req.body);

      const date = new Date();
      let vDate = date.toJSON();
      let createdAt = vDate.split("T");
      let setcreatedAt = createdAt[0];
      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: setcreatedAt },
      });



      const t = await db.sequelize.transaction();

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

          const gettbl_bently_vibr_unfilter =
            await tbl_bently_vibr_unfilter.create(
              {
                thrustBrg_1_A: thrustBrg_1_A,
                thrustBrg_1_B: thrustBrg_1_B,
                No1Brg_rv101_V: No1Brg_rv101_V,
                No1Brg_rv101_H: No1Brg_rv101_H,
                No2Brg_rv102_V: No2Brg_rv102_V,
                No2Brg_rv102_H: No2Brg_rv102_H,
                GenBrg_rv103_V: GenBrg_rv103_V,
                GenBrg_rv103_H: GenBrg_rv103_H,
                GearturbineBrg_rv104_V: GearturbineBrg_rv104_V,
                GearturbineBrg_rv104_H: GearturbineBrg_rv104_H,
                GearpinionBrg_rv105_V: GearpinionBrg_rv105_V,
                GearpinionBrg_rv105_H: GearpinionBrg_rv105_H,
                GearwheelturbineBrg_rv106_V: GearwheelturbineBrg_rv106_V,
                GearwheelturbineBrg_rv106_H: GearwheelturbineBrg_rv106_H,
                GearwheelGen_Brg_rv107_V: GearwheelGen_Brg_rv107_V,
                GearwheelGen_Brg_rv107_H: GearwheelGen_Brg_rv107_H,
                kode_jam: kode_jam,
                name_table: "BENTLY VIBRATION UNFILTER",
              },
              { transaction: t }
            );

          const gettbl_seismic_vibration = await tbl_seismic_vibration.create(
            {
              IBRG_casing: IBRG_casing,
              comp_Casing: comp_Casing,
              gen_BrgCasing: gen_BrgCasing,
              kode_jam: kode_jam,
              name_table: "SEISMIC VIBRATION",
            },
            { transaction: t }
          );

          const postFormID = await tbl_form08.create(
            {
              nameForm: nameForm,
              kode_jam: kode_jam,
              akses_masuk: akses_masuk,
            },
            { transaction: t }
          );

          await t.commit();

          res.status(200).json({
            gettbl_bently_vibr_unfilter,
            gettbl_seismic_vibration,
            postFormID,
            msg: "success",
          });
        } catch (err) {
          console.log(err);
          await t.rollback();
        }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm08params: async (req, res) => {

    let { date, clock } = req.query;

    let selector = {
     where: { createdAt: date, kode_jam: clock },
    };

    try {
      const tbl_bently_vibr_unfilters = await tbl_bently_vibr_unfilter.findOne(selector);

      const tbl_seismic_vibrations = await tbl_seismic_vibration.findOne(selector);

      res.status(200).json({
        tbl_bently_vibr_unfilters,
        tbl_seismic_vibrations,
        msg: "Success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm08: async (req, res) => {
    try {
      const tbl_bently_vibr_unfilter = await db.sequelize.query(
        "SELECT tbl_bently_vibr_unfilter.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_bently_vibr_unfilter LEFT JOIN tbl_jam ON tbl_bently_vibr_unfilter.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      const tbl_seismic_vibration = await db.sequelize.query(
        "SELECT tbl_seismic_vibration.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_seismic_vibration LEFT JOIN tbl_jam ON tbl_seismic_vibration.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        tbl_bently_vibr_unfilter,
        tbl_seismic_vibration,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getFormId08: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form08.* FROM tbl_form08 INNER JOIN tbl_bently_vibr_unfilter ON tbl_form08.kode_jam = tbl_bently_vibr_unfilter.kode_jam AND tbl_form08.createdAt = tbl_bently_vibr_unfilter.createdAt INNER JOIN tbl_seismic_vibration ON tbl_form08.kode_jam = tbl_seismic_vibration.kode_jam AND tbl_form08.createdAt = tbl_seismic_vibration.createdAt",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateForm08: async (req, res) => {
    // console.log("clg", req.params);
    const { date, clock } = req.query;
    // console.log("req.query", req.query);
    // console.log("clg", date, clock);
    try {
      let selector = {
        where: { id: req.params.id },
      };

      let selectorTwo = {
        where: { kode_jam: clock, createdAt: date },
      };

      const {
        thrustBrg_1_A,
        thrustBrg_1_B,
        No1Brg_rv101_V,
        No1Brg_rv101_H,
        No2Brg_rv102_V,
        No2Brg_rv102_H,
        GenBrg_rv103_V,
        GenBrg_rv103_H,
        GearturbineBrg_rv104_V,
        GearturbineBrg_rv104_H,
        GearpinionBrg_rv105_V,
        GearpinionBrg_rv105_H,
        GearwheelturbineBrg_rv106_V,
        GearwheelturbineBrg_rv106_H,
        GearwheelGen_Brg_rv107_V,
        GearwheelGen_Brg_rv107_H,
        IBRG_casing,
        comp_Casing,
        gen_BrgCasing,
        kode_jam,
      } = req.body;

      const gettbl_bently_vibr_unfilter = await tbl_bently_vibr_unfilter.update(
        {
          thrustBrg_1_A: thrustBrg_1_A,
          thrustBrg_1_B: thrustBrg_1_B,
          No1Brg_rv101_V: No1Brg_rv101_V,
          No1Brg_rv101_H: No1Brg_rv101_H,
          No2Brg_rv102_V: No2Brg_rv102_V,
          No2Brg_rv102_H: No2Brg_rv102_H,
          GenBrg_rv103_V: GenBrg_rv103_V,
          GenBrg_rv103_H: GenBrg_rv103_H,
          GearturbineBrg_rv104_V: GearturbineBrg_rv104_V,
          GearturbineBrg_rv104_H: GearturbineBrg_rv104_H,
          GearpinionBrg_rv105_V: GearpinionBrg_rv105_V,
          GearpinionBrg_rv105_H: GearpinionBrg_rv105_H,
          GearwheelturbineBrg_rv106_V: GearwheelturbineBrg_rv106_V,
          GearwheelturbineBrg_rv106_H: GearwheelturbineBrg_rv106_H,
          GearwheelGen_Brg_rv107_V: GearwheelGen_Brg_rv107_V,
          GearwheelGen_Brg_rv107_H: GearwheelGen_Brg_rv107_H,
          kode_jam: kode_jam,
          name_table: "BENTLY VIBRATION UNFILTER",
        },
        selectorTwo
      );

      const gettbl_seismic_vibration = await tbl_seismic_vibration.update(
        {
          IBRG_casing: IBRG_casing,
          comp_Casing: comp_Casing,
          gen_BrgCasing: gen_BrgCasing,
          kode_jam: kode_jam,
          name_table: "SEISMIC VIBRATION",
        },
        selectorTwo
      );

      console.log(
        "res success",
        gettbl_bently_vibr_unfilter,
        gettbl_seismic_vibration
      );

      res.status(200).json({
        gettbl_bently_vibr_unfilter,
        gettbl_seismic_vibration,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = form8Ctrl;

// gettbl_bently_vibr_unfilter: async (req, res) => {
// 	try {
// 		const data = await db.sequelize.query(
// 			"SELECT tbl_bently_vibr_unfilter.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_bently_vibr_unfilter LEFT JOIN tbl_jam ON tbl_bently_vibr_unfilter.kode_jam = tbl_jam.nilai_jam"
// 		)

// 		res.status(200).json({ data, msg: "success" })
// 	} catch (error) {
// 		return res.status(500).json({ msg: error.message })
// 	}
// },
