'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('form1', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			fieldId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			// voltBeforeTrafoId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// loadAMPId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// powerFactorId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// loadMWId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// MVarId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			// voltAfterTrafoId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// },
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('form1');
	},
};
