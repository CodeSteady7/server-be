const Validator = require("fastest-validator");
let db = require("../models");
const { QueryTypes } = require("sequelize");

const {
 tbl_firststage_wheelspace,
 tbl_second_wheelspace,
 tbl_comp_temp,
 tbl_fuel_temp,
 tbl_form05,
 tbl_historyDate,
 tbl_signatureform,
} = require("../models");

const v = new Validator();
const form5Ctrl = {
 form5add: async (req, res) => {
  try {
   const {
    value_first_fwd2,
    value_first_fwd3,
    value_first_afd2,
    value_first_afd3,
    value_second_fwd2,
    value_second_fwd3,
    value_second_aft1,
    value_second_aft2,
    value_discharge_anulr,
    value_inletair,
    value_fuel_temp,
    nameForm,
    kode_jam,
    akses_masuk,
    user_id,
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

    const gettbl_firststage_wheelspace = await tbl_firststage_wheelspace.create(
     {
      value_first_fwd2: value_first_fwd2,
      value_first_fwd3: value_first_fwd3,
      value_first_afd2: value_first_afd2,
      value_first_afd3: value_first_afd3,
      kode_jam: kode_jam,
      name_table: "FIRST STAGE WHEEL SPACE",
     },
     { transaction: t }
    );

    const gettbl_second_wheelspace = await tbl_second_wheelspace.create(
     {
      value_second_fwd2: value_second_fwd2,
      value_second_fwd3: value_second_fwd3,
      value_second_aft1: value_second_aft1,
      value_second_aft2: value_second_aft2,
      kode_jam: kode_jam,
      name_table: "SECOND WHEELSPACE",
     },
     { transaction: t }
    );

    const gettbl_comp_temp = await tbl_comp_temp.create(
     {
      value_discharge_anulr: value_discharge_anulr,
      value_inletair: value_inletair,
      kode_jam: kode_jam,
      name_table: "COMP TEMP",
     },
     { transaction: t }
    );

    const gettbl_fuel_temp = await tbl_fuel_temp.create(
     {
      value_fuel_temp: value_fuel_temp,
      kode_jam: kode_jam,
      name_table: "FUEL TEMPERATURE",
     },
     { transaction: t }
    );

    const postFormID = await tbl_form05.create(
     {
      nameForm: nameForm,
      kode_jam: kode_jam,
      akses_masuk: akses_masuk,
     },
     { transaction: t }
    );

    await t.commit();

    res.status(200).json({
     gettbl_firststage_wheelspace,
     gettbl_second_wheelspace,
     gettbl_comp_temp,
     gettbl_fuel_temp,
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

 getForm05params: async (req, res) => {
  let { date, clock } = req.query;

  let selector = {
   where: { createdAt: date, kode_jam: clock },
  };

  try {
   const tbl_firststage_wheelspaces = await tbl_firststage_wheelspace.findOne(
    selector
   );
   const tbl_second_wheelspaces = await tbl_second_wheelspace.findOne(selector);
   const tbl_comp_temps = await tbl_comp_temp.findOne(selector);
   const tbl_fuel_temps = await tbl_fuel_temp.findOne(selector);

   res.status(200).json({
    tbl_firststage_wheelspaces,
    tbl_second_wheelspaces,
    tbl_comp_temps,
    tbl_fuel_temps,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 updateForm05: async (req, res) => {
  try {
   let { date, clock } = req.query;
   let reqQuery = req.query;

   let selector = {
    where: { createdAt: date, kode_jam: clock },
   };

   const {
    value_first_fwd2,
    value_first_fwd3,
    value_first_afd2,
    value_first_afd3,
    value_second_fwd2,
    value_second_fwd3,
    value_second_aft1,
    value_second_aft2,
    value_discharge_anulr,
    value_inletair,
    value_fuel_temp,
    kode_jam,
   } = req.body;

   const gettbl_firststage_wheelspace = await tbl_firststage_wheelspace.update(
    {
     value_first_fwd2: value_first_fwd2,
     value_first_fwd3: value_first_fwd3,
     value_first_afd2: value_first_afd2,
     value_first_afd3: value_first_afd3,
    },
    selector
   );

   const gettbl_second_wheelspace = await tbl_second_wheelspace.update(
    {
     value_second_fwd2: value_second_fwd2,
     value_second_fwd3: value_second_fwd3,
     value_second_aft1: value_second_aft1,
     value_second_aft2: value_second_aft2,
    },
    selector
   );

   const gettbl_comp_temp = await tbl_comp_temp.update(
    {
     value_discharge_anulr: value_discharge_anulr,
     value_inletair: value_inletair,
    },
    selector
   );

   const gettbl_fuel_temp = await tbl_fuel_temp.update(
    {
     value_fuel_temp: value_fuel_temp,
    },
    selector
   );

   res.status(200).json({
    gettbl_firststage_wheelspace,
    gettbl_second_wheelspace,
    gettbl_comp_temp,
    gettbl_fuel_temp,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getform05: async (req, res) => {
  try {
   const gettbl_firststage_wheelspace = await db.sequelize.query(
    "SELECT tbl_firststage_wheelspace.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_firststage_wheelspace LEFT JOIN tbl_jam ON tbl_firststage_wheelspace.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const gettbl_second_wheelspace = await db.sequelize.query(
    "SELECT tbl_second_wheelspace.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_second_wheelspace LEFT JOIN tbl_jam ON tbl_second_wheelspace.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   const gettbl_comp_temp = await db.sequelize.query(
    "SELECT tbl_comp_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_comp_temp LEFT JOIN tbl_jam ON tbl_comp_temp.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );

   const gettbl_fuel_temp = await db.sequelize.query(
    "SELECT tbl_fuel_temp.*, tbl_jam.urutan_jam, tbl_jam.nilai_jam FROM tbl_fuel_temp LEFT JOIN tbl_jam ON tbl_fuel_temp.kode_jam = tbl_jam.nilai_jam",
    { type: QueryTypes.SELECT }
   );
   res.status(200).json({
    gettbl_firststage_wheelspace,
    gettbl_second_wheelspace,
    gettbl_comp_temp,
    gettbl_fuel_temp,
    msg: "success",
   });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },

 getFormId05: async (req, res) => {
  try {
   const getID = await db.sequelize.query(
    "SELECT tbl_form05.id_form, tbl_form05.nameForm, tbl_form05.kode_jam, tbl_form05.createdAt, tbl_form05.updatedAt FROM tbl_form05 INNER JOIN tbl_comp_temp ON tbl_form05.id_form = tbl_comp_temp.id INNER JOIN tbl_second_wheelspace ON tbl_form05.id_form = tbl_second_wheelspace.id INNER JOIN tbl_fuel_temp ON tbl_form05.id_form = tbl_fuel_temp.id INNER JOIN tbl_firststage_wheelspace ON tbl_form05.id_form = tbl_firststage_wheelspace.id",
    { type: QueryTypes.SELECT }
   );
   res.status(200).json({ getID, msg: "success" });
  } catch (error) {
   return res.status(500).json({ msg: error.message });
  }
 },
};

module.exports = form5Ctrl;
