'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_bently_vibr_unfilter', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			thrustBrg_1_A: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			thrustBrg_1_B: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			No1Brg_rv101_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			No1Brg_rv101_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			No2Brg_rv102_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			No2Brg_rv102_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GenBrg_rv103_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GenBrg_rv103_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearturbineBrg_rv104_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearturbineBrg_rv104_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearpinionBrg_rv105_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearpinionBrg_rv105_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearwheelturbineBrg_rv106_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearwheelturbineBrg_rv106_H: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearwheelGen_Brg_rv107_V: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			GearwheelGen_Brg_rv107_H: {
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
		await queryInterface.dropTable('tbl_bently_vibr_unfilter');
	},
};
