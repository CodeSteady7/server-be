const { Field, voltAfterTrafo } = require("../../models");
const { Op } = require("sequelize");
let { temp_ } = require("../data/control_getonedata");
module.exports = {
  getIndexDate: async (req, res) => {
    try {
      const { date } = req.query;
      let check;


      if (date == undefined || date == '') {
      }else {
        check = await temp_(date ? date : '');
      }

      res.status(200).json({ data: check });
    } catch (err) {
      console.log(err);
    }
  },

  //
  indexPost: async (req, res) => {
    try {
      const { date } = req.query;
      const { name } = req.body;

      let setData = req.body;

      res.json({ data: { setData } });
    } catch (err) {
      res.status(500).json({ err });
      console.log("err", err);
    }
  },
  //
  index: async (req, res) => {
    try {
      const { date } = req.query;
      console.log('date ==>', date);
      let query = "";
      let check;
      
      let setChart = "true";

      let setParams = req.query;
      res.render("admin/charts/view_charts", {
        setChart,
        setParams,
        valuesdata: check,
        query,
        date,
      });
    } catch (err) {
      console.log(err);
    }
  },

  // getIndexDateDetail: async (req, res) => {
  //   try {
  //     const startDate = req.params;
  //     let check = await temp_(startDate);

  //     res.status(200).json({ data: check });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};

