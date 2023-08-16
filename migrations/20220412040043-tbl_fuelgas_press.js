'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_fuelgas_press', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_hpgas_before: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_beforestop_value: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_aftergas_stopvalue: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_aftergas_controlvalue: {
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
		await queryInterface.dropTable('tbl_fuelgas_press');
	},
};
