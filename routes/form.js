const express = require("express");
const { route } = require(".");
const router = express.Router();
const form1Ctrl = require("../controllers/form1Ctrl");
const form2Ctrl = require("../controllers/form2Ctrl");
const form3Ctrl = require("../controllers/form3Ctrl");
const form4Ctrl = require("../controllers/form4Ctrl");
const form5Ctrl = require("../controllers/form5Ctrl");
const form6Ctrl = require("../controllers/form6Ctrl");
const form7Ctrl = require("../controllers/form7Ctrl");
const form8Ctrl = require("../controllers/form8Ctrl");
const form9Ctrl = require("../controllers/form9Ctrl");

// Endpoint qrcode
router.get("/qrcode", form1Ctrl.qrCode);

// Getview_jam
router.get("/view_jam", form1Ctrl.view_jam);

// Endpoint form1Ctrl
router.post("/form1", form1Ctrl.form1Add);
router.get("/getform01_params", form1Ctrl.getForm01params);
router.put("/updateform01", form1Ctrl.updateForm01);
// 
router.get("/getform01", form1Ctrl.getForm01);
router.get("/getform_id01", form1Ctrl.getFormId);

// end point form 2
router.post("/form2", form2Ctrl.form2Add);
router.get("/getform02_params", form2Ctrl.getForm02params);
router.put("/updateform02", form2Ctrl.updateForm02);
// 
router.get("/getform02", form2Ctrl.getForm02);
router.get("/getform_id02", form2Ctrl.getFormId2);

// end point form 3
router.post("/form3", form3Ctrl.form3Add);
router.get("/getform03_params", form3Ctrl.getForm03params);
router.put("/updateform03", form3Ctrl.updateForm03);
// 
router.get("/getform03", form3Ctrl.getform03);
router.get("/getform_id03", form3Ctrl.getFormId03);

// endpoint form
router.post("/form4", form4Ctrl.form4add);
router.get("/getform04_params", form4Ctrl.getForm04params);
router.put("/updateform04", form4Ctrl.updateForm04);
// 
router.get("/getform04", form4Ctrl.getform04);
router.get("/getform_id04", form4Ctrl.getFormId04);

// endpoint form 5
router.post("/form5", form5Ctrl.form5add);
router.get("/getform05_params", form5Ctrl.getForm05params);
router.put("/updateform05", form5Ctrl.updateForm05);
// 
router.get("/getform05", form5Ctrl.getform05);
router.get("/getform_id05", form5Ctrl.getFormId05);

// endpoint form 6
router.post("/form6", form6Ctrl.form6add);
router.get("/getform06_params", form6Ctrl.getForm06params);
router.put("/updateform06", form6Ctrl.updateForm06);
// 
router.get("/getform06", form6Ctrl.getForm06);
router.get("/getform_id06", form6Ctrl.getFormId06);

// endpoint form 7
router.post("/form7", form7Ctrl.form7Add);
router.get("/getform07_params", form7Ctrl.getForm07params);
router.put("/updateform07", form7Ctrl.updateForm07);
// 
router.get("/getform07", form7Ctrl.getForm07);
router.get("/getform_id07", form7Ctrl.getFormId07);

// endpoint form 8
router.post("/form8", form8Ctrl.form8Add);
router.get("/getform08_params", form8Ctrl.getForm08params);
router.put("/updateform08", form8Ctrl.updateForm08);
// 
router.get("/getform08", form8Ctrl.getForm08);
router.get("/getform_id08", form8Ctrl.getFormId08);

// endpoint form 9
router.post("/form9", form9Ctrl.form9Add);
router.get("/getform09/:id", form9Ctrl.getForm09params);
router.get("/getform09", form9Ctrl.getForm09);
router.get("/getform_id09", form9Ctrl.getFormId09);
router.put("/updateform09/:id", form9Ctrl.updateForm09);

module.exports = router;
