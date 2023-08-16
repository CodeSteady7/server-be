'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tbl_firststage_wheelspace', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value_first_fwd2: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_first_fwd3: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_first_afd2: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			value_first_afd3: {
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
		await queryInterface.dropTable('tbl_firststage_wheelspace');
	},
};
