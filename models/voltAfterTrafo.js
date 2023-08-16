module.exports = (sequelize, DataTypes) => {
  const voltAfterTrafo = sequelize.define(
    "voltAfterTrafo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      valueVolta1_2: {
        type: DataTypes.STRING,
      },
      valueVolta2_3: {
        type: DataTypes.STRING,
      },
      valueVolta3_1: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATEONLY,
        get: function () {
          return this.getDataValue("createdAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get: function () {
          return this.getDataValue("updatedAt")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
      kode_jam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name_table: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "voltaftertrafo",
    }
  );
  return voltAfterTrafo;
};
