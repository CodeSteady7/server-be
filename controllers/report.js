let db = require("../models");
const fs = require("fs");
const { tbl_report } = require("../models");
const path = require("path");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const config = require("../config/index.js");
const reportCtrl = {
  getReport: async (req, res) => {
    try {
      const { imageBase64, title, description } = req.body;

      // console.log(" req.body =>", req.body)
      // console.log(" req.file =>", req.file)
      // console.log(" req.files =>", req.files)
      // console.log(" req.images =>", req.images)

      res.status(200).json({ msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  img: async (req, res) => {
    {
      try {
        const { judul, lokasi, deskripsi, status } = req.body;
        const tempPath = req.file;
        // console.log(
        // "🚀 ~ file: report.js ~ line 49 ~ img: ~ req.files",
        // req.files
        // );
        const tempBody = req.body;
        // console.log(
        //   "🚀 ~ file: report.js ~ line 50 ~ img: ~ req.body",
        //   req.body
        // );
        // const targetPath = path.join(__dirname, "./uploads/image.png")

        if (req.file) {
          let tmp_path = req.file.path;
          let originaExt =
            req.file.mimetype.split(".")[
              req.file.originalname.split(".").length - 1
            ];
          // let filename = req.file.filename
          // let filename = `${req.file.filename}` + "." + originaExt
          let filename = `${req.file.filename}`;
          // console.log("originaExt", originaExt);
          // console.log("filename", filename);
          // console.log("req.file", req.file);
          let target_path = path.resolve(
            config.rootPath,
            `public/data/uploads/${filename}.jpeg`
          );
          const src = fs.createReadStream(tmp_path);
          const dest = fs.createWriteStream(target_path);
          src.pipe(dest, { end: false });
          // console.log("src", src)

          src.on("end", async () => {
            try {
              const data = await tbl_report.create({
                judul: judul,
                lokasi: lokasi,
                deskripsi: deskripsi,
                imageBase64: `${filename}.jpeg`,
                status: "01",
              });

              // console.log("req.body => ", req.body);
              // console.log("req.files => ", tempPath);
              // console.log(" => ", tempBody.judul);
              // console.log("/// ", data);
              res.status(200).json({ data, msg: "success" });
            } catch (error) {
              console.log(error);
            }
          });
        }
        //
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    }
  },

  getImg: async (req, res) => {
    try {
      const getImg = await db.sequelize.query(
        "SELECT tbl_report.id, tbl_report.imageBase64, tbl_report.judul, tbl_report.lokasi,tbl_report.deskripsi, tbl_report.createdAt FROM tbl_report"
      );
      res.status(200).json({ getImg, msg: "success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = reportCtrl;
