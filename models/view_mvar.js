module.exports = (sequelize, DataTypes) => {
	const view_mvar = sequelize.define(
		'view_mvar',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueMeter_mvar: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			valueRecord_mvar: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			kode_jam: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
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
			tableName: 'view_mvar',
		}
	);
	return view_mvar;
};
