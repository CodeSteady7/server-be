'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_lube_oil_temp', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_oilcooler_inlet: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_oilcooler_outlet: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_journaland_thrustdrain: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_no2_bearingdrain: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gearpinion_no1: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gearwheel_no2: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gearwheel_no3: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gearwheel_no4: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_gearwheel_no5: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_generator_drain: {
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
		await queryInterface.dropTable('tbl_lube_oil_temp');
	},
};
