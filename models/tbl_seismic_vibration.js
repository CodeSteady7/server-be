module.exports = (sequelize, DataTypes) => {
  const tbl_seismic_vibration = sequelize.define(
    "tbl_seismic_vibration",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      IBRG_casing: {
        type: DataTypes.STRING,
      },
      comp_Casing: {
        type: DataTypes.STRING,
      },
      gen_BrgCasing: {
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
      tableName: "tbl_seismic_vibration",
    }
  );
  return tbl_seismic_vibration;
};
