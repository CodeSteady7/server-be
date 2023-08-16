module.exports = (sequelize, DataTypes) => {
	const Form1 = sequelize.define(
		'Form1',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			fieldId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			// voltBeforeTrafoId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			// loadAMPId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			// powerFactorId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			// loadMWId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			// MVarId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
			// voltAfterTrafoId: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: false,
			// },
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
			tableName: 'form1',
		}
	);
	return Form1;
};
