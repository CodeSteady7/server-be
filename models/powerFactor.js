module.exports = (sequelize, DataTypes) => {
  const powerFactor = sequelize.define(
    "powerFactor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      valuePowerfactor: {
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
      tableName: "powerfactor",
    }
  );
  return powerFactor;
};
