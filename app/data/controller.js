const {
 tbl_historyDate,
 tbl_signatureform,
 tbl_user_signature,
} = require("../../models");

const { QueryTypes } = require("sequelize");
const db = require("../../models");
let { temp_ } = require("./control_getonedata");

const puppeteer = require("puppeteer");
module.exports = {
 getAllData: async (req, res) => {
  try {
  //  let CreatedData = ["2022-09-23", "2022-12-03", "2022-09-25"];
   let history = await tbl_historyDate.findAll();

   let temp = [];
   for (let i = 0; i < history.length; i++) {
    setCreatedat = history[i].length;
    temp.push({ date: history[i].createdAt });
   }

   let temp_data = [];

   for (let i = 0; i < temp.length; i++) {
    temp_data.push(temp[i].date);
   }

   temp_data.sort(function (a, b) {
    return new Date(b) - new Date(a);
   });

   res.render("admin/table.ejs", {
    data: temp_data,
   });
  } catch (err) {
   console.log(err);
  }
 },
 indexSignature: async (req, res) => {
  try {
   const { createdat } = req.params;

   const db_signature = await tbl_signatureform.findOne({
    where: { createdat: createdat },
   });

   const user_signature = await tbl_user_signature.findAll();

   if (db_signature == null || "") {
    res.redirect("/data");
   } else {
    res.render("admin/view_table/view_detailTable", {
     data: { createdat, db_signature },
     user_signature,
    });
   }
  } catch (err) {
   console.log("err");
  }
 },
 actionSignature: async (req, res) => {
  try {
   const {
    operation_name_signature01,
    suprv_name_signature01,
    operation_name_signature02,
    suprv_name_signature02,
    operation_name_signature03,
    suprv_name_signature03,
   } = req.body;

   const { createdat } = req.params;

   let updateSignature = await tbl_signatureform.update(
    {
     operation_name_signature01,
     suprv_name_signature01,
     operation_name_signature02,
     suprv_name_signature02,
     operation_name_signature03,
     suprv_name_signature03,
    },
    {
     where: {
      createdat: createdat,
     },
    }
   );

   res.redirect("./data");
  } catch (error) {
   console.log("err", error);
  }
 },
 getOneData: async (req, res) => {
  try {
   const { queryDate } = req.query;
   const page = req.query.page * 1 || 5;

   let set_history = [];
   let historyDate = await tbl_historyDate.findAll({
    attributes: ["createdAt"],
   });

   historyDate.map((item) => {
    set_history.push(item.createdAt);
   });

   let checkDate;
   let temp;
   let indexArray;
   let indexArraySheetThree;

   

   const db_signature = await db.sequelize.query(
    `SELECT * FROM view_signature WHERE view_signature.createdat = :queryDate`,
    { type: QueryTypes.SELECT, replacements: { queryDate } }
   );

    checkDate = set_history.includes(`${queryDate}`);
    temp = await temp_(queryDate);
    indexArray = [2, 8, 12];
    indexArraySheetThree = [2, 4, 6, 8, 10, 12];

    res.render("excel/index", {
     checkDate,
     indexArray,
     indexArraySheetThree,
     page,
     set_history,
     data: { queryDate, temp, db_signature: db_signature[0]  },
    });
  } catch (err) {
   console.log("err", err);
  }
 },
 paginatePage: async (req, res) => {
  try {
   const page = req.query.page * 1 || 5;

   res.status(200).json({
    page,
   });
  } catch (err) {
   console.log("err", err);
  }
 },

 excel: async (req, res) => {
  try {
   const { createdat } = req.query;

   let min = 1;
   let max = 100;
   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

   if (createdat !== null || undefined || "") {
    try {
     (async () => {
      const browser = await puppeteer.launch({
       args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--single-process",
       ],
      });
      const page = await browser.newPage();
      await page.goto(
       `http://10.251.150.15:4004/data/getonedata?queryDate=${createdat}&page=1`
      );
      //   await page.goto(
      // `http://localhost:4004/data/getonedata?queryDate=${createdat}&page=1`
      //   );
      const pdfBuffer = await page.pdf({
       // path: `pdf/LogSheet-${createdat}-${randomNumber}.pdf`,
       format: "Legal",
       landscape: true,
      });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
       "Content-Disposition",
       `attachment; filename=LogSheet-${createdat}.pdf`
      );
      res.send(pdfBuffer);

      await browser.close();
     })();
    } catch (error) {
     return res.status(500).json({ msg: error });
    }
   } else {
    res.redirect("/data");
   }
  } catch (err) {
   console.log(err);
  }
 },
};
