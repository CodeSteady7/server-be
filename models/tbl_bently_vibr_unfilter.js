module.exports = (sequelize, DataTypes) => {
  const tbl_bently_vibr_unfilter = sequelize.define(
    "tbl_bently_vibr_unfilter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      thrustBrg_1_A: {
        type: DataTypes.STRING,
      },
      thrustBrg_1_B: {
        type: DataTypes.STRING,
      },
      No1Brg_rv101_V: {
        type: DataTypes.STRING,
      },
      No1Brg_rv101_H: {
        type: DataTypes.STRING,
      },
      No2Brg_rv102_V: {
        type: DataTypes.STRING,
      },
      No2Brg_rv102_H: {
        type: DataTypes.STRING,
      },
      GenBrg_rv103_V: {
        type: DataTypes.STRING,
      },
      GenBrg_rv103_H: {
        type: DataTypes.STRING,
      },
      GearturbineBrg_rv104_V: {
        type: DataTypes.STRING,
      },
      GearturbineBrg_rv104_H: {
        type: DataTypes.STRING,
      },
      GearpinionBrg_rv105_V: {
        type: DataTypes.STRING,
      },
      GearpinionBrg_rv105_H: {
        type: DataTypes.STRING,
      },
      GearwheelturbineBrg_rv106_V: {
        type: DataTypes.STRING,
      },
      GearwheelturbineBrg_rv106_H: {
        type: DataTypes.STRING,
      },
      GearwheelGen_Brg_rv107_V: {
        type: DataTypes.STRING,
      },
      GearwheelGen_Brg_rv107_H: {
        type: DataTypes.STRING,
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
      kode_jam: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name_table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "tbl_bently_vibr_unfilter",
    }
  );
  return tbl_bently_vibr_unfilter;
};
