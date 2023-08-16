let express = require("express");
let router = express.Router();

const { index, indexPost, getIndexDate } = require("./controller");

router.get("/", index);
router.post("/", indexPost);
router.get("/date", getIndexDate);

module.exports = router;
