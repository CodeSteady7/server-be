module.exports = (sequelize, DataTypes) => {
  const voltBeforeTrafo = sequelize.define(
    "voltBeforeTrafo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      valueV_BT: {
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
      tableName: "voltbeforetrafo",
    }
  );
  return voltBeforeTrafo;
};
