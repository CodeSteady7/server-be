let express = require("express");
let router = express.Router();

const {
 index,
 addSignature,
 updateSignature,
 signature,
 deleteSignature,
} = require("./controller");

router.get("/", index);
router.get("/add-user", signature);
router.post("/add-user", addSignature);
router.put("/add-user/:id", updateSignature);
router.delete("/delete/:id", deleteSignature);

module.exports = router;
