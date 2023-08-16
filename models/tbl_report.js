module.exports = (sequelize, DataTypes) => {
  const tbl_report = sequelize.define(
    "tbl_report",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
        type: DataTypes.DATE,
        get: function () {
          return this.getDataValue("createdAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "tbl_report",
    }
  );
  return tbl_report;
};
