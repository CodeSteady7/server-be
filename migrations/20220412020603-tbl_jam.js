'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_jam', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			urutan_jam: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			nilai_jam: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('tbl_jam');
	},
};
