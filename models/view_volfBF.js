module.exports = (sequelize, DataTypes) => {
	const view_volfBF = sequelize.define(
		'view_volfBF',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueV_BT: {
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
			tableName: 'view_volfBF',
		}
	);
	return view_volfBF;
};
