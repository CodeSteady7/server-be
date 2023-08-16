module.exports = (sequelize, DataTypes) => {
	const view_voltaf = sequelize.define(
		'view_voltaf',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueVolta1_2: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			valueVolta2_3: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			valueVolta3_1: {
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
			tableName: 'view_voltaf',
		}
	);
	return view_voltaf;
};
