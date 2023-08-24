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
router.get("/getonedata", getOneData);
router.get("/download", excel);
router.post("/getonedata", paginatePage);

router.put("/signature/:createdat", actionSignature);
router.get("/signature/:createdat", indexSignature);


module.exports = router;
