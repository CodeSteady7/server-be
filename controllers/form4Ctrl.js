const Validator = require("fastest-validator");
const { QueryTypes } = require("sequelize");
let db = require("../models");
const {
 tbl_lubeoil_bearingtemperature,
 tbl_hvdoil_press,
 tbl_hvdtrip_circuitpress,
 tbl_lubeoil_press,
 tbl_lubeoil_tanktemp,
 tbl_historyDate,
 tbl_signatureform,
 tbl_form04,
} = require("../models");

const v = new Validator();
const form4Ctrl = {
 form4add: async (req, res) => {
  try {
   const {
    value_hvdoil_press,
    value_hvdtrip_circuitpress,
    value_lubeoil_bearingtemperature,
    value_main_oil_pump,
    value_fwdfilter,
    value_turbinebearing_header,
    value_gen_bearingheader,
    value_lubeoil_tanktemp,
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
   //

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

    const gettbl_lubeoil_bearingtemperature =
     await tbl_lubeoil_bearingtemperature.create(
      {
       value_lubeoil_bearingtemperature: value_lubeoil_bearingtemperature,
       kode_jam: kode_jam,
       name_table: "Lube Oil Bearing Temperature",
      },
      { transaction: t }
     );

    const gettbl_hvdoil_press = await tbl_hvdoil_press.create(
     {
      value_hvdoil_press: value_hvdoil_press,
      kode_jam: kode_jam,
      name_table: "HVD OIL PRESS",
     },
     { transaction: t }
    );

    const gettbl_hvdtrip = await tbl_hvdtrip_circuitpress.create(
     {
      value_hvdtrip_circuitpress: value_hvdtrip_circuitpress,
      kode_jam: kode_jam,
      name_table: "HVD TRIP CIRCUIT PRESS",
     },
     { transaction: t }
    );

    const gettbl_lubeoil_press = await tbl_lubeoil_press.create(
     {
      value_main_oil_pump: value_main_oil_pump,
      value_fwdfilter: value_fwdfilter,
      value_turbinebearing_header: value_turbinebearing_header,
      value_gen_bearingheader: value_gen_bearingheader,
      kode_jam: kode_jam,
      name_table: "LUBE OIL PRESS",
     },
     { transaction: t }
    );

    const gettbl_lubeoil_tanktemp = await tbl_lubeoil_tanktemp.create(
     {
      value_lubeoil_tanktemp: value_lubeoil_tanktemp,
      kode_jam: kode_jam,
      name_table: "LUBE OIL TANK TEMPERATURE",
     },
     { transaction: t }
    );

    const postFormID = await tbl_form04.create(
     {
      nameForm: nameForm,
      kode_jam: kode_jam,
      akses_masuk: akses_masuk,
     },
     { transaction: t }
    );

    await t.commit();

    res.status(200).json({
     gettbl_lubeoil_bearingtemperature,
     gettbl_hvdoil_press,
     gettbl_hvdtrip,
     gettbl_lubeoil_press,
     gettbl_lubeoil_tanktemp,
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

 updateForm04: async (req, res, next) => {
  try {
   const {
    value_hvdoil_press,
    value_hvdtrip_circuitpress,
    value_lubeoil_bearingtemperature,
    value_main_oil_pump,
    value_fwdfilter,
    value_turbinebearing_header,
    value_gen_bearingheader,
    value_lubeoil_tanktemp,
    kode_jam,
   } = req.body;

   let { date, clock } = req.query;
   let reqQuery = req.query;

   let selector = {
    where: { createdAt: date, kode_jam: clock },
   };

   const gettbl_lubeoil_bearingtemperature =
    await tbl_lubeoil_bearingtemperature.update(
     {
      value_lubeoil_bearingtemperature: value_lubeoil_bearingtemperature,
      kode_jam: kode_jam,
     },
     selector
    );

   const gettbl_hvdoil_press = await tbl_hvdoil_press.update(
    {
     value_hvdoil_press: value_hvdoil_press,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_hvdtrip = await tbl_hvdtrip_circuitpress.update(
    {
     value_hvdtrip_circuitpress: value_hvdtrip_circuitpress,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_lubeoil_press = await tbl_lubeoil_press.update(
    {
     value_main_oil_pump: value_main_oil_pump,
     value_fwdfilter: value_fwdfilter,
     value_turbinebearing_header: value_turbinebearing_header,
     value_gen_bearingheader: value_gen_bearingheader,
     kode_jam: kode_jam,
    },
    selector
   );

   const gettbl_lubeoil_tanktemp = await tbl_lubeoil_tanktemp.update(
    {
     value_lubeoil_tanktemp: value_lubeoil_tanktemp,
     kode_jam: kode_jam,
    },
    selector
   );

   res.status(200).json({
    gettbl_lubeoil_bearingtemperature,
    gettbl_hvdoil_press,
    gettbl_hvdtrip,
    gettbl_lubeoil_press,
    gettbl_lubeoil_tanktemp,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getForm04params: async (req, res) => {
  let { date, clock } = req.query;

  let selector = {
   where: { createdAt: date, kode_jam: clock },
  };

  try {
   const tbl_lubeoil_bearingtemperatures =
    await tbl_lubeoil_bearingtemperature.findOne(selector);
   const tbl_hvdoil_presss = await tbl_hvdoil_press.findOne(selector);
   const tbl_hvdtrip_circuitpresss = await tbl_hvdtrip_circuitpress.findOne(
    selector
   );
   const tbl_lubeoil_presss = await tbl_lubeoil_press.findOne(selector);
   const tbl_lubeoil_tanktemps = await tbl_lubeoil_tanktemp.findOne(selector);

   res.status(200).json({
    tbl_lubeoil_bearingtemperatures,
    tbl_hvdtrip_circuitpresss,
    tbl_lubeoil_presss,
    tbl_hvdoil_presss,
    tbl_lubeoil_tanktemps,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getform04: async (req, res) => {
  try {
   const lubeoil_bearingtemperature = await db.sequelize.query(
    "SELECT tbl_lubeoil_bearingtemperature.id, tbl_lubeoil_bearingtemperature.value_lubeoil_bearingtemperature, tbl_lubeoil_bearingtemperature.kode_jam, tbl_lubeoil_bearingtemperature.updatedAt, tbl_lubeoil_bearingtemperature.createdAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_lubeoil_bearingtemperature LEFT JOIN tbl_jam ON tbl_lubeoil_bearingtemperature.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const hvdoil_press = await db.sequelize.query(
    "SELECT tbl_hvdoil_press.id, tbl_hvdoil_press.value_hvdoil_press, tbl_hvdoil_press.kode_jam, tbl_hvdoil_press.createdAt, tbl_hvdoil_press.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_hvdoil_press LEFT JOIN tbl_jam ON tbl_hvdoil_press.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const hvdtrip_circuitpress = await db.sequelize.query(
    "SELECT tbl_hvdtrip_circuitpress.id, tbl_hvdtrip_circuitpress.value_hvdtrip_circuitpress, tbl_hvdtrip_circuitpress.kode_jam, tbl_hvdtrip_circuitpress.createdAt, tbl_hvdtrip_circuitpress.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_hvdtrip_circuitpress LEFT JOIN tbl_jam ON tbl_hvdtrip_circuitpress.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const lubeoil_press = await db.sequelize.query(
    "SELECT tbl_lubeoil_press.id, tbl_lubeoil_press.value_main_oil_pump, tbl_lubeoil_press.value_fwdfilter, tbl_lubeoil_press.value_turbinebearing_header, tbl_lubeoil_press.value_gen_bearingheader, tbl_lubeoil_press.kode_jam, tbl_lubeoil_press.createdAt, tbl_lubeoil_press.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_lubeoil_press LEFT JOIN tbl_jam ON tbl_lubeoil_press.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const lubeoil_tanktemp = await db.sequelize.query(
    "SELECT tbl_lubeoil_tanktemp.id, tbl_lubeoil_tanktemp.value_lubeoil_tanktemp, tbl_lubeoil_tanktemp.kode_jam, tbl_lubeoil_tanktemp.createdAt, tbl_lubeoil_tanktemp.updatedAt, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_lubeoil_tanktemp LEFT JOIN tbl_jam ON tbl_lubeoil_tanktemp.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );

   res.status(200).json({
    lubeoil_bearingtemperature,
    hvdoil_press,
    hvdtrip_circuitpress,
    lubeoil_press,
    lubeoil_tanktemp,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getFormId04: async (req, res) => {
  try {
   const getID = await db.sequelize.query(
    "SELECT tbl_form04.id_form, tbl_form04.nameForm, tbl_form04.kode_jam, tbl_form04.createdAt, tbl_form04.updatedAt FROM tbl_form04 INNER JOIN tbl_lubeoil_tanktemp ON tbl_form04.id_form = tbl_lubeoil_tanktemp.id INNER JOIN tbl_hvdoil_press ON tbl_form04.id_form = tbl_hvdoil_press.id INNER JOIN tbl_hvdtrip_circuitpress ON tbl_form04.id_form = tbl_hvdtrip_circuitpress.id INNER JOIN tbl_lubeoil_bearingtemperature ON tbl_form04.id_form = tbl_lubeoil_bearingtemperature.id INNER JOIN tbl_lubeoil_press ON tbl_form04.id_form = tbl_lubeoil_press.id",
    { type: QueryTypes.SELECT }
   );

   res.status(200).json({ getID, msg: "success" });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },
};

module.exports = form4Ctrl;
