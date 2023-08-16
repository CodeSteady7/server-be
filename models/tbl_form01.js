module.exports = (sequelize, DataTypes) => {
  const tbl_form01 = sequelize.define(
    "tbl_form01",
    {
      id_form: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nameForm: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kode_jam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // 1 => NFC, 2 => QRCODE
      akses_masuk: {
        type: DataTypes.ENUM,
        values: [1, 2],
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "tbl_form01",
    }
  );
  return tbl_form01;
};
