let express = require("express");
let router = express.Router();
const multer = require("multer");
const os = require("os");

const {
  index,
  indexDetail,
  actionDelete,
  actionCreateHistoryReport,
} = require("./controller");

router.get("/", index);
router.get("/:id", indexDetail);
router.post(
  "/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreateHistoryReport
);
router.delete("/:id", actionDelete);

module.exports = router;
