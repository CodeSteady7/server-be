module.exports = (sequelize, DataTypes) => {
  const tbl_historyReport = sequelize.define(
    "tbl_historyReport",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      report_id: {
        type: DataTypes.INTEGER,
      },
      reportRepair: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      imageBase64: {
        type: DataTypes.STRING,
      },
      judul: {
        type: DataTypes.STRING,
      },
      lokasi: {
        type: DataTypes.STRING,
      },
      deskripsi: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM(["01", "02", "03"]),
        get: function () {
          let getStatus = this.getDataValue("status");
          if (getStatus === "01") {
            getStatus = "Menunggu";
          } else if (getStatus === "02") {
            getStatus = "Di Tolak";
          } else {
            getStatus = "Telah Di Proses";
          }
          return getStatus;
        },
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        get: function () {
          return this.getDataValue("createdAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get: function () {
          return this.getDataValue("updatedAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
    },
    {
      tableName: "tbl_historyReport",
    }
  );
  return tbl_historyReport;
};
