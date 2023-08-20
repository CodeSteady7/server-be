const express = require("express");
const { route } = require(".");

const router = express.Router();
const logicCtrl = require("../controllers/logicCtrl");

router.get("/form_actif", logicCtrl.showActifClocks);


module.exports = router;
