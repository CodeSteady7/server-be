const {
  tbl_report,
  tbl_historyDate,
  tbl_users_admin,
} = require("../../models");

module.exports = {
  index: async (req, res) => {
    try {
      let history = await tbl_historyDate.findAll({
        attributes: ["createdAt"],
      });
      const db_report = await tbl_report.findAll();
      const db_users_admin = await tbl_users_admin.findAll();

      let db_report_length = db_report.length;
      let db_history_length = history.length;
      let db_users_admin_length = db_users_admin.length;
      // console.log("history", history.length);

      // res.status(200).json({
      //   msg: "success",
      //   data: { db_report_length, db_history_length },
      // });
      res.render("admin/dashboard", {
        data: { db_report_length, db_history_length, db_users_admin_length },
      });
    } catch (err) {
      console.log("err", err);
    }
  },
};
