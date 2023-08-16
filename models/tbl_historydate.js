module.exports = (sequelize, DataTypes) => {
  const tbl_historyDate = sequelize.define(
    "tbl_historyDate",
    {
      id_historyDate: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "tbl_historydate",
    }
  );

  return tbl_historyDate;
};
