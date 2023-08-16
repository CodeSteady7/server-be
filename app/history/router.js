let express = require("express");
let router = express.Router();

const { historyReport } = require("./controller");

router.get("/", historyReport);

module.exports = router;
