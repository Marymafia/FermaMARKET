module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [{
      name: 'Овощи',
    },
    {
      name: 'Фрукты',
    },
    {
      name: 'Молочные изделия',
    },
    {
      name: 'Мясо и птица',
    },
    {
      name: 'Рыба',
    },
    {
      name: 'Мед',
    },
    {
      name: 'Выпечка',
    },
    {
      name: 'Другое',
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
