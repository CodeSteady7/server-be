let express = require("express");
let router = express.Router();

const {
  getOneData,
  getAllData,
  excel,
  paginatePage,
  indexSignature,
  actionSignature,
} = require("./controller");

router.get("/", getAllData);
router.get("/signature/:createdat", indexSignature);
router.put("/signature/:createdat", actionSignature);
router.get("/getonedata", getOneData);
router.get("/download", excel);
router.post("/getonedata", paginatePage);

module.exports = router;
