'use strict';
module.exports = function(sequelize, DataTypes) {
  var positivityApp = sequelize.define('positivityApp', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    depression: DataTypes.BOOLEAN,
    addiction: DataTypes.BOOLEAN,
    weight: DataTypes.BOOLEAN,
    exercise: DataTypes.BOOLEAN,
    other: DataTypes.BOOLEAN,
    grief: DataTypes.BOOLEAN,
    userinput: DataTypes.STRING,
    wantPhoto: DataTypes.BINARY,
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return positivityApp;
};