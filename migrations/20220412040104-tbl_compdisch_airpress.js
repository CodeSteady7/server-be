'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_compdisch_airpress', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_afterporous_filter: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_for96cd: {
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
		await queryInterface.dropTable('tbl_compdisch_airpress');
	},
};
