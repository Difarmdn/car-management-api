'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class cars extends Model {
  }
  cars.init({
    plat: DataTypes.STRING,
    model: DataTypes.STRING,
    tipe: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    createdby: DataTypes.STRING,
    updatedby: DataTypes.STRING,
    deletedby: DataTypes.STRING
  }, {
    sequelize,

  });
  return cars;
};