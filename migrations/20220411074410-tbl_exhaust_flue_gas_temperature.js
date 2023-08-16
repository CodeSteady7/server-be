'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_exhaust_flue_gas_temperature', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_5_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_6_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_7_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_8_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_9_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_10_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_11_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_12_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_AVETX_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T1_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T2_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T3_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T4_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T5_exhaustFluegas: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_T6_exhaustFluegas: {
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
		await queryInterface.dropTable('tbl_exhaust_flue_gas_temperature');
	},
};
