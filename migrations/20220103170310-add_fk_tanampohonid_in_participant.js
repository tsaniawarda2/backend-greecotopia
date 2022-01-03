'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Participants', {
      fields: ['tanam_pohon_id'],
      type: 'foreign key',
      name: 'fk_tanampohon_in_participant',
      references: { //Required field
        table: 'Tanam_Pohons',
        field: 'tanam_pohon_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('Participants', 'fk_tanampohon_in_participant', {})
  }
};
