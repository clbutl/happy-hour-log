const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurantCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    happyHourTimeStart: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    happyHourTimeEnd: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;