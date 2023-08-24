const express = require("express");
const router = express.Router();

const { index, registerAuth, loginAuth, logout } = require("./controller");

router.get("/", index);
router.post("/", loginAuth);
router.post("/createauth", registerAuth);
router.get("/logout", logout);

module.exports = router;
