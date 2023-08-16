module.exports = (sequelize, DataTypes) => {
  const tbl_second_wheelspace = sequelize.define(
    "tbl_second_wheelspace",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_second_fwd2: {
        type: DataTypes.STRING,
      },
      value_second_fwd3: {
        type: DataTypes.STRING,
      },
      value_second_aft1: {
        type: DataTypes.STRING,
      },
      value_second_aft2: {
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
      tableName: "tbl_second_wheelspace",
    }
  );
  return tbl_second_wheelspace;
};
