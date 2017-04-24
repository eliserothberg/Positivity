'use strict';
module.exports = function(sequelize, DataTypes) {
  var photo = sequelize.define('photo', {
    photos: DataTypes.VARBINARY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return photo;
};