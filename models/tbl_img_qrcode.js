module.exports = (sequelize, DataTypes) => {
	const tbl_img_qrcode = sequelize.define(
		'tbl_img_qrcode',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			pathQrcode: {
				type: DataTypes.STRING,
			},
			imgQrcode: {
				type: DataTypes.STRING,
			},
			codeNFC: {
				type: DataTypes.STRING,
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
			tableName: 'tbl_img_qrcode',
		}
	);
	return tbl_img_qrcode;
};
