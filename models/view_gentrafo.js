module.exports = (sequelize, DataTypes) => {
	const view_gentrafo = sequelize.define(
		'view_gentrafo',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			liquid_level: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			liquid_temp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			wind_temp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			kode_jam: {
				type: DataTypes.STRING,
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
		},
		{
			tableName: 'view_gentrafo',
		}
	);
	return view_gentrafo;
};
