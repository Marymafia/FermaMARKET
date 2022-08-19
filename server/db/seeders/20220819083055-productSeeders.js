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
    await queryInterface.bulkInsert('Products', [{
      name: 'Окорок свиной',
      title: 'Окорок свиной бескостный – это вкусное и сочное мясо без грубой соединительной ткани и прожилок. Подходит для запекания, тушения, обжаривания.',
      category_id: 4,
      user_id: 3,
      photo: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/09/1_1600163298-e1600163396967-630x315.jpg',
      price: '30',
    }], {});

    //  name: DataTypes.STRING,
    //  title: DataTypes.TEXT,
    //  category_id: DataTypes.INTEGER,
    //  user_id: DataTypes.INTEGER,
    //  photo: DataTypes.TEXT,
    //  price: DataTypes.STRING,
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
