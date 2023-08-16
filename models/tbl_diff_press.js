module.exports = (sequelize, DataTypes) => {
  const tbl_diffpress = sequelize.define(
    "tbl_diffpress",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_inlethouse_filter: {
        type: DataTypes.STRING,
      },
      value_lubeoil_filter: {
        type: DataTypes.STRING,
      },
      value_controloil_filter: {
        type: DataTypes.STRING,
      },
      value_hydoil_filter: {
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
      tableName: "tbl_diffpress",
    }
  );
  return tbl_diffpress;
};
