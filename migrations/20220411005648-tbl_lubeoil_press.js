'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_lubeoil_press', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_main_oil_pump: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_fwdfilter: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_turbinebearing_header: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gen_bearingheader: {
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
		await queryInterface.dropTable('tbl_lubeoil_press');
	},
};
