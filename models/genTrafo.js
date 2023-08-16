module.exports = (sequelize, DataTypes) => {
  const genTrafo = sequelize.define(
    "genTrafo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      liquid_level: {
        type: DataTypes.STRING,
      },
      liquid_temp: {
        type: DataTypes.STRING,
      },
      wind_temp: {
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
      tableName: "gentrafo",
    }
  );
  return genTrafo;
};
