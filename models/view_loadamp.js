module.exports = (sequelize, DataTypes) => {
	const view_loadamp = sequelize.define(
		'view_loadamp',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value1Loadamp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			value2Loadamp: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			value3Loadamp: {
				type: DataTypes.INTEGER,
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
			tableName: 'view_loadamp',
		}
	);
	return view_loadamp;
};
