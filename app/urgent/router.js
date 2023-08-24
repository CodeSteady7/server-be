let express = require("express");
let router = express.Router();

const {
 index
} = require("./controller");

router.get("/delete-all", index);

module.exports = router;
