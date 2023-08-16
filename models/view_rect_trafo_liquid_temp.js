module.exports = (sequelize, DataTypes) => {
	const view_rect_trafo_liquid_temp = sequelize.define(
		'view_rect_trafo_liquid_temp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_tblRect_trafo_liquid_temp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			kode_jam: {
				type: DataTypes.STRING,
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
			tableName: 'view_rect_trafo_liquid_temp',
		}
	);
	return view_rect_trafo_liquid_temp;
};
