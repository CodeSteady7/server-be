const { Field, voltAfterTrafo } = require("../../models");
const { Op } = require("sequelize");
let { temp_ } = require("../data/control_getonedata");
module.exports = {
  getIndexDate: async (req, res) => {
    try {
      let startDate = "2022-09-23";
      const { date } = req.query;
      let check;

      // let testing = date ? "false" : "2022-09-23";

      check = await temp_(date ? date : startDate);

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
      console.log("req =>", req.body);
      let startDate = "2022-09-24";
      const { date } = req.query;
      let query = "";

      let check;
      check = await temp_(date === "" ? `${startDate}` : date);
      let chartField = (setClock, setValueV_Field, setValueA_Field) => ({
        labels: setClock,
        datasets: [
          {
            label: "V",
            backgroundColor: "rgba(60,141,188,0.9)",
            borderColor: "rgba(60,141,188,0.8)",
            pointRadius: false,
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: setValueV_Field,
          },
          {
            label: "A",
            backgroundColor: "rgba(210, 214, 222, 1)",
            borderColor: "rgba(210, 214, 222, 1)",
            pointRadius: false,
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: setValueA_Field,
          },
        ],
      });
      let setChart = "true";

      console.log("setParams", req.query);
      let setParams = req.query;
      res.render("admin/charts/view_charts", {
        setChart,
        setParams,
        valuesdata: check,
        query,
        date,
        chartField,
      });
    } catch (err) {
      console.log(err);
    }
  },

  getIndexDateDetail: async (req, res) => {
    try {
      const startDate = req.params;
      let check = await temp_(startDate);

      res.status(200).json({ data: check });
    } catch (err) {
      console.log(err);
    }
  },
};

// let check = await Field.findAll({
//   where: {
//     createdAt: {
//       [Op.between]: [`${startDate}`, `${endDate}`],
//     },
//   },
// });
