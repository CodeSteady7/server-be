let express = require("express");
let router = express.Router();
const authUserAdmin = require("../../middleware/auth");
const { index } = require("./controller");

// router.use(authUserAdmin);
router.get("/", authUserAdmin, index);

module.exports = router;
