module.exports = (sequelize, DataTypes) => {
  const tbl_lube_oil_temp = sequelize.define(
    "tbl_lube_oil_temp",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_oilcooler_inlet: {
        type: DataTypes.STRING,
      },
      value_oilcooler_outlet: {
        type: DataTypes.STRING,
      },
      value_journaland_thrustdrain: {
        type: DataTypes.STRING,
      },
      value_no2_bearingdrain: {
        type: DataTypes.STRING,
      },
      value_gearpinion_no1: {
        type: DataTypes.STRING,
      },
      value_gearwheel_no2: {
        type: DataTypes.STRING,
      },
      value_gearwheel_no3: {
        type: DataTypes.STRING,
      },
      value_gearwheel_no4: {
        type: DataTypes.STRING,
      },
      value_gearwheel_no5: {
        type: DataTypes.STRING,
      },
      value_generator_drain: {
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
      tableName: "tbl_lube_oil_temp",
    }
  );
  return tbl_lube_oil_temp;
};
