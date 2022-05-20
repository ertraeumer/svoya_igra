module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Химия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Музыка',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Философия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'История',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
