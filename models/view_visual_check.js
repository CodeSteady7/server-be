module.exports = (sequelize, DataTypes) => {
	const view_visual_check = sequelize.define(
		'view_visual_check',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			l_o: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			temp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			sound: {
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
			tableName: 'view_visual_check',
		}
	);
	return view_visual_check;
};
