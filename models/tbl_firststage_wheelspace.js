module.exports = (sequelize, DataTypes) => {
  const tbl_firststage_wheelspace = sequelize.define(
    "tbl_firststage_wheelspace",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_first_fwd2: {
        type: DataTypes.STRING,
      },
      value_first_fwd3: {
        type: DataTypes.STRING,
      },
      value_first_afd2: {
        type: DataTypes.STRING,
      },
      value_first_afd3: {
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
      tableName: "tbl_firststage_wheelspace",
    }
  );
  return tbl_firststage_wheelspace;
};
