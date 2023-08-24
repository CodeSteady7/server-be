module.exports = (sequelize, DataTypes) => {
  const tbl_signatureform = sequelize.define(
    "tbl_signatureform",
    {
      id_signature: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tbl_historydate_id: {
        type: DataTypes.STRING,
      },
      operation_name_signature01: {
        type: DataTypes.INTEGER,
      },
      suprv_name_signature01: {
        type: DataTypes.INTEGER,
      },
      range_date01: {
        type: DataTypes.STRING,
        defaultValue: "00:00 - 08:00",
      },
      operation_name_signature02: {
        type: DataTypes.INTEGER,
      },
      suprv_name_signature02: {
        type: DataTypes.INTEGER,
      },
      range_date02: {
        type: DataTypes.STRING,
        defaultValue: "08:00 - 16:00",
      },
      operation_name_signature03: {
        type: DataTypes.INTEGER,
      },
      suprv_name_signature03: {
        type: DataTypes.INTEGER,
      },
      range_date03: {
        type: DataTypes.STRING,
        defaultValue: "16:00 - 00:00",
      },
      createdat: {
        type: DataTypes.DATEONLY,
        get: function () {
          return this.getDataValue("createdat")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
      updatedat: {
        type: DataTypes.DATE,
        get: function () {
          return this.getDataValue("updatedat")?.toLocaleString("en-GB", {
            timeZone: "UTC",
          });
        },
      },
    },
    {
      tableName: "tbl_signatureform",
    }
  );
  return tbl_signatureform;
};
