'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_diffpress', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_inlethouse_filter: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_lubeoil_filter: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_controloil_filter: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_hydoil_filter: {
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
		await queryInterface.dropTable('tbl_diffpress');
	},
};
