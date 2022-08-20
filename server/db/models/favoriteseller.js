const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  FavoriteSeller.init({
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'FavoriteSeller',
  });
  return FavoriteSeller;
};
