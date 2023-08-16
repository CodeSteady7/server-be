module.exports = (sequelize, DataTypes) => {
  const tbl_compdisch_airpress = sequelize.define(
    "tbl_compdisch_airpress",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_afterporous_filter: {
        type: DataTypes.STRING,
      },
      value_for96cd: {
        type: DataTypes.STRING,
      },
      kode_jam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        get: function () {
          return this.getDataValue("createdAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        get: function () {
          return this.getDataValue("updatedAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
        allowNull: false,
      },
      name_table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "tbl_compdisch_airpress",
    }
  );
  return tbl_compdisch_airpress;
};
