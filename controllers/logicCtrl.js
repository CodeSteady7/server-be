let db = require("../models");
const fs = require("fs");
const {
 tbl_form01,
 tbl_form02,
 tbl_form03,
 tbl_form04,
 tbl_form05,
 tbl_form06,
 tbl_form07,
 tbl_form08,
} = require("../models");
const path = require("path");

const logicCtrl = {
 showActifClocks: async (req, res) => {
  let { date, clock, form_actif } = req.query;
  console.log('req.query',req.query);
  try {
   const findFormData = async (table, options) => {
    try {
     const response = await table.findOne(options);
     if (response) {
      return { status: "success"};
     }
     return { status: "error"};
    } catch (error) {
     return { status: "error" };
    }
   };

   const getData = async () => {
    const formTables = {
     FORM01: tbl_form01,
     FORM02: tbl_form02,
     FORM03: tbl_form03,
     FORM04: tbl_form04,
     FORM05: tbl_form05,
     FORM06: tbl_form06,
     FORM07: tbl_form07,
     FORM08: tbl_form08,
    };

    const selectedTable = formTables[form_actif];

    if (!selectedTable) {
     return [{ status: "error" }];
    }

    const options = {
     where: {
      createdAt: date,
      kode_jam: clock,
     },
    };

    return [await findFormData(selectedTable, options)];
   };

   const data = await getData();

   res.status(200).json({
    data,
    msg: "Successfully",
   });
  } catch (error) {
   return res.status(500).json({ msg: error });
  }
 },
};
module.exports = logicCtrl;
