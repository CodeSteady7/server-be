module.exports = (sequelize, DataTypes) => {
	const tbl_jam = sequelize.define(
		'tbl_jam',
		{
			urutan_jam: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			nilai_jam: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'tbl_jam',
			timestamps: false,
		}
	);
	return tbl_jam;
};
