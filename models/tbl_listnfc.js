module.exports = (sequelize, DataTypes) => {
	const tbl_listnfc = sequelize.define(
		'tbl_listnfc',
		{
			id_listNFC: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codeNFC: {
				type: DataTypes.STRING,
			},
			linkQrcode: {
				type: DataTypes.STRING,
			},
		},
		{
			tableName: 'tbl_listnfc',
			timestamps: false,
		}
	);
	return tbl_listnfc;
};
