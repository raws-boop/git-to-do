const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Activities extends Model {}

Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    indoor_outdoor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activities',
  }
);

module.exports = Activities;