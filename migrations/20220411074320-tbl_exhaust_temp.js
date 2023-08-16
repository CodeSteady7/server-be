'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_exhaust_temp', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_1_exhaustTemp: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_2_exhaustTemp: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_3_exhaustTemp: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_4_exhaustTemp: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			kode_jam: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('tbl_exhaust_temp');
	},
};
