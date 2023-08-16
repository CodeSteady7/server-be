const { tbl_report, tbl_historyReport } = require("../../models");

module.exports = {
  index: async (req, res) => {
    try {
      // let isName = "hai";
      const db_report = await tbl_report.findAll({
        where: { status: "01" },
      });
      // console.log("object", db_report);
      res.render("admin/view_report.ejs", {
        data: db_report,
      });
    } catch (err) {
      console.log(err);
    }
  },

  indexDetail: async (req, res) => {
    try {
      const { id } = req.params;

      const db_report = await tbl_report.findOne({
        where: { id: id },
      });

      res.render("admin/view_detail_report.ejs", {
        data: db_report,
      });
    } catch (err) {
      console.log(err);
    }
  },

  onNotAccept: async (req, res) => {
    try {
      const { id } = req.params;

      let selector = {
        where: { id: id },
      };
      console.log("==>", id);
      await tbl_report.update(
        {
          status: "03",
        },
        selector
      );

      res.redirect("/report");
    } catch (err) {
      console.log(err);
    }
  },

  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("object", id);
      await tbl_report.destroy({
        where: { id: id },
      });

      res.redirect("/report");
    } catch (err) {
      console.log(err);
    }
  },

  actionCreateHistoryReport: async (req, res) => {
    try {
      const {
        judul,
        lokasi,
        deskripsi,
        reportRepair,
        user_id,
        status,
        report_id,
      } = req.body;

      try {
        const { id } = req.params;
        const img = req.file;

        let checkHistory = await tbl_report.findOne({
          where: { id: id },
        });

        const db_historyReport = await tbl_historyReport.create({
          judul: checkHistory.judul,
          lokasi: checkHistory.lokasi,
          deskripsi: checkHistory.deskripsi,
          imageBase64: checkHistory.imageBase64,
          report_id: id,
          reportRepair: reportRepair,
          user_id: "1",
          status: "03",
        });

        const db_report = await tbl_report.update(
          {
            status: "03",
          },
          {
            where: { id: id },
          }
        );

        console.log(
          ` msg: Success, data: { ${db_historyReport}, ${db_report} }`
        );
        res.redirect("/report");
        // res
        //   .status(200)
        //   .json({ msg: "Success", data: { db_historyReport, db_report } });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
