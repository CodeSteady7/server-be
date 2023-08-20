const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");
let db = require("../models");
const {
 tbl_dsp,
 tbl_gasflow,
 tbl_lube_oil_temp,
 tbl_turbinspeed,
 tbl_vce,
 tbl_jam,
 tbl_historyDate,
 tbl_form03,
 tbl_signatureform,
} = require("../models");

const v = new Validator();
const form3Ctrl = {
 form3Add: async (req, res) => {
  try {
   const {
    value_vce,
    value_rpm,
    value_dsp,
    value_M37H,
    value_oilcooler_inlet,
    value_oilcooler_outlet,
    value_journaland_thrustdrain,
    value_no2_bearingdrain,
    value_gearpinion_no1,
    value_gearwheel_no2,
    value_gearwheel_no3,
    value_gearwheel_no4,
    value_gearwheel_no5,
    value_generator_drain,
    nameForm,
    kode_jam,
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

    const gettbl_dsp = await tbl_dsp.create(
     {
      value_dsp: value_dsp,
      kode_jam: kode_jam,
      name_table: "DSP",
     },
     { transaction: t }
    );

    const gettbl_gasflow = await tbl_gasflow.create(
     {
      value_M37H: value_M37H,
      kode_jam: kode_jam,
      name_table: "GASFLOW",
     },
     { transaction: t }
    );

    const gettbl_lube_oil_temp = await tbl_lube_oil_temp.create(
     {
      value_oilcooler_inlet: value_oilcooler_inlet,
      value_oilcooler_outlet: value_oilcooler_outlet,
      value_journaland_thrustdrain: value_journaland_thrustdrain,
      value_no2_bearingdrain: value_no2_bearingdrain,
      value_gearpinion_no1: value_gearpinion_no1,
      value_gearwheel_no2: value_gearwheel_no2,
      value_gearwheel_no3: value_gearwheel_no3,
      value_gearwheel_no4: value_gearwheel_no4,
      value_gearwheel_no5: value_gearwheel_no5,
      value_generator_drain: value_generator_drain,
      kode_jam: kode_jam,
      name_table: "Lube Oil Temperature",
     },
     { transaction: t }
    );

    const gettbl_turbinespeed = await tbl_turbinspeed.create(
     {
      value_rpm: value_rpm,
      kode_jam: kode_jam,
      name_table: "Turbine Speed",
     },
     { transaction: t }
    );

    const gettbl_vce = await tbl_vce.create(
     {
      value_vce: value_vce,
      kode_jam: kode_jam,
      name_table: "VCE",
     },
     { transaction: t }
    );

    const postFormID = await tbl_form03.create(
     {
      nameForm: nameForm,
      kode_jam: kode_jam,
      akses_masuk: akses_masuk,
     },
     { transaction: t }
    );

    await t.commit();

    res.status(200).json({
     gettbl_dsp,
     gettbl_gasflow,
     gettbl_lube_oil_temp,
     gettbl_turbinespeed,
     gettbl_vce,
     postFormID,
     msg: "success",
    });
   } catch (err) {
    res.status(500).json({ msg: err.message });
    await t.rollback();
   }
  } catch (error) {
   console.log("err", error);

   return res.status(500).json({ msg: error.message });
  }
 },

 updateForm03: async (req, res, next) => {
  try {
   const {
    value_vce,
    value_rpm,
    value_dsp,
    value_M37H,
    value_oilcooler_inlet,
    value_oilcooler_outlet,
    value_journaland_thrustdrain,
    value_no2_bearingdrain,
    value_gearpinion_no1,
    value_gearwheel_no2,
    value_gearwheel_no3,
    value_gearwheel_no4,
    value_gearwheel_no5,
    value_generator_drain,
    kode_jam,
   } = req.body;

   let { date, clock } = req.query;
   let reqQuery = req.query;

   let selector = {
    where: { createdAt: date, kode_jam: clock },
   };
   const gettbl_dsp = await tbl_dsp.update(
    {
     value_dsp: value_dsp,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_gasflow = await tbl_gasflow.update(
    {
     value_M37H: value_M37H,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_lube_oil_temp = await tbl_lube_oil_temp.update(
    {
     value_oilcooler_inlet: value_oilcooler_inlet,
     value_oilcooler_outlet: value_oilcooler_outlet,
     value_journaland_thrustdrain: value_journaland_thrustdrain,
     value_no2_bearingdrain: value_no2_bearingdrain,
     value_gearpinion_no1: value_gearpinion_no1,
     value_gearwheel_no2: value_gearwheel_no2,
     value_gearwheel_no3: value_gearwheel_no3,
     value_gearwheel_no4: value_gearwheel_no4,
     value_gearwheel_no5: value_gearwheel_no5,
     value_generator_drain: value_generator_drain,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_turbinespeed = await tbl_turbinspeed.update(
    {
     value_rpm: value_rpm,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_vce = await tbl_vce.update(
    {
     value_vce: value_vce,
     kode_jam: kode_jam,
    },
    selector
   );

   res.status(200).json({
    gettbl_dsp,
    gettbl_gasflow,
    gettbl_lube_oil_temp,
    gettbl_turbinespeed,
    gettbl_vce,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getForm03params: async (req, res) => {
  let { date, clock } = req.query;

  let selector = {
   where: { createdAt: date, kode_jam: clock },
  };

  try {
   const tbl_dsps = await tbl_dsp.findOne(selector);
   const tbl_gasflows = await tbl_gasflow.findOne(selector);
   const tbl_lube_oil_temps = await tbl_lube_oil_temp.findOne(selector);
   const tbl_turbinspeeds = await tbl_turbinspeed.findOne(selector);
   const tbl_vces = await tbl_vce.findOne(selector);

   res.status(200).json({
    tbl_dsps,
    tbl_gasflows,
    tbl_lube_oil_temps,
    tbl_turbinspeeds,
    tbl_vces,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getform03: async (req, res) => {
  try {
   const tbl_dsp = await db.sequelize.query(
    "SELECT tbl_dsp.id AS id, tbl_dsp.value_dsp AS value_dsp, tbl_dsp.kode_jam AS kode_jam, tbl_dsp.createdAt AS createdAt, tbl_dsp.updatedAt AS updatedAt, tbl_jam.urutan_jam AS urutan_jam, tbl_jam.nilai_jam AS nilai_jam FROM (tbl_dsp LEFT JOIN tbl_jam ON ( tbl_dsp.kode_jam = tbl_jam.nilai_jam ))",
    { type: QueryTypes.SELECT }
   );
   const tbl_gasflow = await db.sequelize.query(
    " SELECT tbl_gasflow.id,  tbl_gasflow.value_M37H, tbl_gasflow.kode_jam, tbl_gasflow.createdAt, tbl_gasflow.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_gasflow LEFT JOIN tbl_jam ON tbl_gasflow.kode_jam = tbl_jam.nilai_jam ",
    { type: QueryTypes.SELECT }
   );
   const tbl_lube_oil_temp = await db.sequelize.query(
    "SELECT tbl_lube_oil_temp.id, tbl_lube_oil_temp.value_oilcooler_inlet, tbl_lube_oil_temp.value_oilcooler_outlet, tbl_lube_oil_temp.value_journaland_thrustdrain, tbl_lube_oil_temp.value_no2_bearingdrain, tbl_lube_oil_temp.value_gearpinion_no1, tbl_lube_oil_temp.value_gearwheel_no2, tbl_lube_oil_temp.value_gearwheel_no3, tbl_lube_oil_temp.value_gearwheel_no4, tbl_lube_oil_temp.value_gearwheel_no5, tbl_lube_oil_temp.value_generator_drain, tbl_lube_oil_temp.kode_jam, tbl_lube_oil_temp.createdAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_lube_oil_temp LEFT JOIN tbl_jam ON tbl_lube_oil_temp.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const tbl_turbinspeed = await db.sequelize.query(
    "SELECT tbl_turbinspeed.id, tbl_turbinspeed.value_rpm, tbl_turbinspeed.kode_jam, tbl_turbinspeed.createdAt, tbl_turbinspeed.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_turbinspeed LEFT JOIN tbl_jam ON tbl_turbinspeed.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const tbl_vce = await db.sequelize.query(
    "SELECT tbl_vce.id, tbl_vce.value_vce, tbl_vce.kode_jam, tbl_vce.createdAt, tbl_vce.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_vce LEFT JOIN tbl_jam ON tbl_vce.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   res.status(200).json({
    tbl_dsp,
    tbl_gasflow,
    tbl_lube_oil_temp,
    tbl_turbinspeed,
    tbl_vce,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getFormId03: async (req, res) => {
  try {
   const getID = await db.sequelize.query(
    "SELECT tbl_form03.id_form, tbl_form03.nameForm, tbl_form03.kode_jam, tbl_form03.createdAt, tbl_form03.updatedAt FROM tbl_form03 INNER JOIN tbl_dsp ON tbl_form03.id_form = tbl_dsp.id INNER JOIN tbl_gasflow ON tbl_form03.id_form = tbl_gasflow.id INNER JOIN tbl_lube_oil_temp ON tbl_form03.id_form = tbl_lube_oil_temp.id INNER JOIN tbl_turbinspeed ON tbl_form03.id_form = tbl_turbinspeed.id INNER JOIN tbl_vce ON tbl_form03.id_form = tbl_vce.id",
    { type: QueryTypes.SELECT }
   );

   res.status(200).json({ getID, msg: "success" });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },
};

module.exports = form3Ctrl;
