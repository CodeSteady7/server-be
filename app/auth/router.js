const express = require("express");
const router = express.Router();

const { index, registerAuth, loginAuth } = require("./controller");

router.get("/", index);
router.post("/", loginAuth);
router.post("/createauth", registerAuth);

module.exports = router;
