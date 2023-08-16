module.exports = (sequelize, DataTypes) => {
  const tbl_lubeoil_press = sequelize.define(
    "tbl_lubeoil_press",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_main_oil_pump: {
        type: DataTypes.STRING,
      },
      value_fwdfilter: {
        type: DataTypes.STRING,
      },
      value_turbinebearing_header: {
        type: DataTypes.STRING,
      },
      value_gen_bearingheader: {
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
      tableName: "tbl_lubeoil_press",
    }
  );
  return tbl_lubeoil_press;
};
