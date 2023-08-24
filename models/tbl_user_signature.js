module.exports = (sequelize, DataTypes) => {
 const tbl_user_signature = sequelize.define(
  "tbl_user_signature",
  {
   user_signature_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
   },
   username: {
    type: DataTypes.STRING,
   },
   nopek: {
    type: DataTypes.STRING,
   },
   fungsi_id: {
    type: DataTypes.INTEGER,
   },
   position_id: {
    type: DataTypes.INTEGER,
   },
  },
  {
   tableName: "tbl_user_signature",
   timestamps: false,
  }
 );
 return tbl_user_signature;
};
