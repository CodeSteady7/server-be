const Validator = require("fastest-validator");
let db = require("../models");
const { QueryTypes } = require("sequelize");

const {
  Field,
  loadAmp,
  loadMW,
  Mvar,
  powerFactor,
  voltAfterTrafo,
  voltBeforeTrafo,
  tbl_jam,
  tbl_img_qrcode,
  tbl_form01,
  tbl_historyDate,
  tbl_signatureform,
} = require("../models");

const v = new Validator();

const form1Ctrl = {
  qrCode: async (req, res) => {
    try {
      const data = await tbl_img_qrcode.findAll();
      res.status(200).json({ data, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  form1Add: async (req, res) => {
    try {
      const {
        valueVField,
        valueAField,
        kode_jam,
        valueV_BT,
        valueVolta1_2,
        valueVolta2_3,
        valueVolta3_1,
        value1Loadamp,
        value2Loadamp,
        value3Loadamp,
        valuePowerfactor,
        valueMeter_loadmw,
        valueRecord_loadmw,
        valueMeter_mvar,
        valueRecord_mvar,
        nameForm,
        user_id,
        akses_masuk,
      } = req.body;
      // console.log("req", req.body);

      const date = new Date();
      let vDate = date.toJSON();
      let createdAt = vDate.split("T");
      let setcreatedAt = createdAt[0];
      let checkDate = await tbl_historyDate.findOne({
        where: { createdAt: setcreatedAt },
      });

      //
      let checkLastRow = [
        await Field.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await voltBeforeTrafo.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await voltAfterTrafo.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await loadAmp.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await powerFactor.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await loadMW.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
        await Mvar.findOne({
          attributes: ["id"],
          order: [["id", "DESC"]],
        }),
      ];

      let lastRowtbl_form01 = await tbl_form01.findOne({
        attributes: ["id_form"],
        order: [["id_form", "DESC"]],
      });

      let data = checkLastRow.map((item) => {
        // console.log("item", item.id, lastRowtbl_form01.id_form);
        return item.id == lastRowtbl_form01.id_form;
      });

      let checkInclude = data.includes(false);

      const t = await db.sequelize.transaction();

      if (checkInclude == false) {
        try {
          let check =
            checkDate == null || ""
              ? (await tbl_historyDate.create(
                  {
                    setcreatedAt,
                    setcreatedAt,
                    user_id: 1,
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

          const field = await Field.create(
            {
              valueVField: valueVField,
              valueAField: valueAField,
              kode_jam: kode_jam,
              name_table: "FIELD",
            },

            { transaction: t }
          );
          const before = await voltBeforeTrafo.create(
            {
              valueV_BT: valueV_BT,
              kode_jam: kode_jam,
              name_table: "VOLTAGE BEFORE TRAFO",
            },
            { transaction: t }
          );
          const voltAfter = await voltAfterTrafo.create(
            {
              valueVolta1_2: valueVolta1_2,
              valueVolta2_3: valueVolta2_3,
              valueVolta3_1: valueVolta3_1,
              kode_jam: kode_jam,
              name_table: "VOLTAGE AFTER TRAFO",
            },
            { transaction: t }
          );

          const getloadAmp = await loadAmp.create(
            {
              value1Loadamp: value1Loadamp,
              value2Loadamp: value2Loadamp,
              value3Loadamp: value3Loadamp,
              kode_jam: kode_jam,
              name_table: "LOAD AMP",
            },
            { transaction: t }
          );

          const powerfactor = await powerFactor.create(
            {
              valuePowerfactor: valuePowerfactor,
              kode_jam: kode_jam,
              name_table: "POWER FACTOR",
            },
            { transaction: t }
          );

          const get_loadmw = await loadMW.create(
            {
              valueMeter_loadmw: valueMeter_loadmw,
              valueRecord_loadmw: valueRecord_loadmw,
              kode_jam: kode_jam,
              name_table: "LOAD MW",
            },
            { transaction: t }
          );

          const get_mvar = await Mvar.create(
            {
              valueMeter_mvar: valueMeter_mvar,
              valueRecord_mvar: valueRecord_mvar,
              kode_jam: kode_jam,
              name_table: "M VAR",
            },
            { transaction: t }
          );

          const postFormID = await tbl_form01.create(
            {
              nameForm: nameForm,
              kode_jam: kode_jam,
              akses_masuk: akses_masuk,
            },
            { transaction: t }
          );

          await t.commit();

          res.status(200).json({
            data,
            check,
            // checkDate,
            // data,
            field,
            before,
            voltAfter,
            loadAmp,
            getloadAmp,
            powerfactor,
            get_loadmw,
            get_mvar,
            postFormID,
            msg: "Success",
          });
        } catch (err) {
          console.log(err);
          await t.rollback();
        }
      } else {
        return res.status(500).json({ msg: "contact an IT engineer" });
      }

      // let data = req.body;
    } catch (error) {
      console.log("firstErr", error);
      return res.status(500).json({ msg: error.message });
    }
  },

  // postFormId: async (req, res) => {
  // 	try {
  // 		const { nameForm, kode_jam, id_form01 } = req.body;
  // 		let a = req.body;
  // 		const postFormID = await tbl_form01.create({
  // 			nameForm: nameForm,
  // 			kode_jam: kode_jam,
  // 		});

  // 		res.status(200).json({ postFormID, msg: 'success' });
  // 	} catch (error) {
  // 		return res.status(500).json({ msg: error.message });
  // 	}
  // },

  updateForm01: async (req, res) => {
    try {
      const {
        valueVField,
        valueAField,
        kode_jam,
        valueV_BT,
        valueVolta1_2,
        valueVolta2_3,
        valueVolta3_1,
        value1Loadamp,
        value2Loadamp,
        value3Loadamp,
        valuePowerfactor,
        valueMeter_loadmw,
        valueRecord_loadmw,
        valueMeter_mvar,
        valueRecord_mvar,
      } = req.body;

      console.log("params ", req.params.id);
      console.log("req body ", req.body);
      let selector = {
        where: { id: req.params.id },
      };

      const field = await Field.update(
        {
          valueVField: valueVField,
          valueAField: valueAField,
          kode_jam: kode_jam,
          name_table: "FIELD",
          // selector,
        },
        selector
      );
      const before = await voltBeforeTrafo.update(
        {
          valueV_BT: valueV_BT,
          kode_jam: kode_jam,
          name_table: "VOLTAGE BEFORE TRAFO",
        },
        selector
      );
      const voltAfter = await voltAfterTrafo.update(
        {
          valueVolta1_2: valueVolta1_2,
          valueVolta2_3: valueVolta2_3,
          valueVolta3_1: valueVolta3_1,
          kode_jam: kode_jam,
          name_table: "VOLTAGE AFTER TRAFO",
        },
        selector
      );

      const getloadAmp = await loadAmp.update(
        {
          value1Loadamp: value1Loadamp,
          value2Loadamp: value2Loadamp,
          value3Loadamp: value3Loadamp,
          kode_jam: kode_jam,
          name_table: "LOAD AMP",
        },
        selector
      );

      const powerfactor = await powerFactor.update(
        {
          valuePowerfactor: valuePowerfactor,
          kode_jam: kode_jam,
          name_table: "POWER FACTOR",
        },
        selector
      );

      const get_loadmw = await loadMW.update(
        {
          valueMeter_loadmw: valueMeter_loadmw,
          valueRecord_loadmw: valueRecord_loadmw,
          kode_jam: kode_jam,
          name_table: "LOAD MW",
        },
        selector
      );

      const get_mvar = await Mvar.update(
        {
          valueMeter_mvar: valueMeter_mvar,
          valueRecord_mvar: valueRecord_mvar,
          kode_jam: kode_jam,
          name_table: "M VAR",
        },
        selector
      );

      // const field = await Field.update(values, selector)

      res.status(200).json({
        field,
        before,
        voltAfter,
        loadAmp,
        getloadAmp,
        powerfactor,
        get_loadmw,
        get_mvar,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm01params: async (req, res) => {
    try {
      const fields = await Field.findAll({ where: { id: req.params.id } });
      const loadAmps = await loadAmp.findAll({ where: { id: req.params.id } });
      const loadMWs = await loadMW.findAll({ where: { id: req.params.id } });
      const Mvars = await Mvar.findAll({ where: { id: req.params.id } });
      const powerFactors = await powerFactor.findAll({
        where: { id: req.params.id },
      });
      const voltAfterTrafos = await voltAfterTrafo.findAll({
        where: { id: req.params.id },
      });
      const voltBeforeTrafos = await voltBeforeTrafo.findAll({
        where: { id: req.params.id },
      });

      res.status(200).json({
        fields,
        voltBeforeTrafos,
        voltAfterTrafos,
        loadAmps,
        powerFactors,
        loadMWs,
        Mvars,
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getForm01: async (req, res) => {
    try {
      const field = await db.sequelize.query(
        "SELECT field.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM field LEFT JOIN tbl_jam ON field.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const voltAF = await db.sequelize.query(
        "SELECT voltaftertrafo.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM voltaftertrafo LEFT JOIN tbl_jam ON voltaftertrafo.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const volfBF = await db.sequelize.query(
        "SELECT voltbeforetrafo.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM voltbeforetrafo LEFT JOIN tbl_jam ON voltbeforetrafo.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const loadAmp = await db.sequelize.query(
        "SELECT loadamp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM loadamp INNER JOIN tbl_jam ON loadamp.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const powerfactor = await db.sequelize.query(
        "SELECT powerfactor.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM powerfactor LEFT JOIN tbl_jam ON powerfactor.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      const loadmw = await db.sequelize.query(
        "SELECT loadmw.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM loadmw LEFT JOIN tbl_jam ON loadmw.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );
      const Mvar = await db.sequelize.query(
        "SELECT mvar.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM mvar LEFT JOIN tbl_jam ON mvar.kode_jam = tbl_jam.nilai_jam",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({
        data: { field, voltAF, volfBF, loadAmp, powerfactor, loadmw, Mvar },
        msg: "success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  view_jam: async (req, res) => {
    try {
      const data = await tbl_jam.findAll();

      res.status(200).json({ data, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // -------------------
  getFormId: async (req, res) => {
    try {
      const getID = await db.sequelize.query(
        "SELECT tbl_form01.nameForm AS nameForm, tbl_form01.kode_jam AS kode_jam, tbl_form01.id_form AS id_form, tbl_form01.createdAt, tbl_form01.updatedAt FROM ( tbl_form01 INNER JOIN voltaftertrafo ON tbl_form01.id_form = voltaftertrafo.id INNER JOIN voltbeforetrafo ON tbl_form01.id_form = voltbeforetrafo.id INNER JOIN loadmw ON tbl_form01.id_form = loadmw.id INNER JOIN mvar ON tbl_form01.id_form = mvar.id INNER JOIN powerfactor ON tbl_form01.id_form = powerfactor.id INNER JOIN loadamp ON tbl_form01.id_form = loadamp.id INNER JOIN field ON tbl_form01.id_form = field.id )",
        { type: QueryTypes.SELECT }
      );

      res.status(200).json({ getID, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = form1Ctrl;
