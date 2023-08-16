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
// Endpoint qrcode
router.get("/qrcode", form1Ctrl.qrCode);

// Getview_jam
router.get("/view_jam", form1Ctrl.view_jam);

// Endpoint form1Ctrl
router.post("/form1", form1Ctrl.form1Add);
// router.post('/postform_id01', form1Ctrl.postFormId);
router.get("/getform01/:id", form1Ctrl.getForm01params);
router.get("/getform01", form1Ctrl.getForm01);
router.get("/getform_id01", form1Ctrl.getFormId);
router.put("/updateform01/:id", form1Ctrl.updateForm01);

// end point form 2
router.post("/form2", form2Ctrl.form2Add);
// router.post('/postform_id02', form2Ctrl.postFormId02);
router.get("/getform02/:id", form2Ctrl.getForm02params);
router.get("/getform02", form2Ctrl.getForm02);
router.get("/getform_id02", form2Ctrl.getFormId2);
router.put("/updateform02/:id", form2Ctrl.updateForm02);

// end point form 3
router.post("/form3", form3Ctrl.form3Add);
// router.post('/postform_id03', form3Ctrl.postFormId03);
router.get("/getform03/:id", form3Ctrl.getForm03params);
router.get("/getform03", form3Ctrl.getform03);
router.get("/getform_id03", form3Ctrl.getFormId03);
router.put("/updateform03/:id", form3Ctrl.updateForm03);

// endpoint form
router.post("/form4", form4Ctrl.form4add);
// router.post('/postform_id04', form4Ctrl.postFormId04);
router.get("/getform04/:id", form4Ctrl.getForm04params);
router.get("/getform04", form4Ctrl.getform04);
router.get("/getform_id04", form4Ctrl.getFormId04);
router.put("/updateform04/:id", form4Ctrl.updateForm04);

// endpoint form 5
router.post("/form5", form5Ctrl.form5add);
// router.post('/postform_id05', form5Ctrl.postFormId05);
router.get("/getform05/:id", form5Ctrl.getForm05params);
router.get("/getform05", form5Ctrl.getform05);
router.get("/getform_id05", form5Ctrl.getFormId05);
router.put("/updateform05/:id", form5Ctrl.updateForm05);

// endpoint form 6
router.post("/form6", form6Ctrl.form6add);
// router.post('/postform_id06', form6Ctrl.postFormId06);
router.get("/getform06/:id", form6Ctrl.getForm06params);
router.get("/getform06", form6Ctrl.getForm06);
router.get("/getform_id06", form6Ctrl.getFormId06);
router.put("/updateform06/:id", form6Ctrl.updateForm06);

// endpoint form 7
router.post("/form7", form7Ctrl.form7Add);
// router.post('/postform_id07', form7Ctrl.postFormId07);
router.get("/getform07/:id", form7Ctrl.getForm07params);
router.get("/getform07", form7Ctrl.getForm07);
router.get("/getform_id07", form7Ctrl.getFormId07);
router.put("/updateform07/:id", form7Ctrl.updateForm07);

// endpoint form 8
router.post("/form8", form8Ctrl.form8Add);
// router.post('/postform_id08', form8Ctrl.postFormId08);
router.get("/getform08/:id", form8Ctrl.getForm08params);
router.get("/getform08", form8Ctrl.getForm08);
router.get("/getform_id08", form8Ctrl.getFormId08);
router.put("/updateform08/:id", form8Ctrl.updateForm08);

// endpoint form 9
router.post("/form9", form9Ctrl.form9Add);
// router.post('/postform_id09', form9Ctrl.postFormId09);
router.get("/getform09/:id", form9Ctrl.getForm09params);
router.get("/getform09", form9Ctrl.getForm09);
router.get("/getform_id09", form9Ctrl.getFormId09);
router.put("/updateform09/:id", form9Ctrl.updateForm09);

module.exports = router;
