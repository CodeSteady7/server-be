const { Users, tbl_historyReport } = require("../../models");

module.exports = {
  historyReport: async (req, res) => {
    try {
      const db_historyReport = await tbl_historyReport.findAll();
      let setUser = async (_id) => {
        const db_users = await Users.findOne({
          where: { id: _id },
        });
        return db_users;
      };

      let setHistory = [];
      let set_db_history = await Promise.all(
        db_historyReport.map(async (item) => {
          let set_User = await setUser(item.user_id);
          let setUserHistory = set_User.username;
          setHistory.push(item.user_id, setUserHistory);
          // console.log("=>", item, setUserHistory);
          return { item, setUserHistory };
        })
      );

      let db_history = await set_db_history;
      console.log("setHistory", db_history);

      // res.locals.myFunction = await setUser(1);
      // res.locals.myFunction = async (_id) => {
      //   const db_users = await Users.findOne({
      //     where: { id: _id },
      //   });
      //   return db_users;
      // };
      // console.log("db", await setUser(1));

      res.render("history/index", {
        data: { db_history },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
