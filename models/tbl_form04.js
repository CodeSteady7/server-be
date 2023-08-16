module.exports = (sequelize, DataTypes) => {
  const tbl_form04 = sequelize.define(
    "tbl_form04",
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
      tableName: "tbl_form04",
    }
  );
  return tbl_form04;
};
