'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('voltAfterTrafo', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value1_2: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value2_3: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value3_1: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
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
		await queryInterface.dropTable('voltAfterTrafo');
	},
};
