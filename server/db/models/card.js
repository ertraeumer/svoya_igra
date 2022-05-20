const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      // define association here
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Card.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    themeId: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
