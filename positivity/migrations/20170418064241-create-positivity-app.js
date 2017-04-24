'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('positivityApps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      depression: {
        type: Sequelize.BOOLEAN
      },
      addiction: {
        type: Sequelize.BOOLEAN
      },
      weight: {
        type: Sequelize.BOOLEAN
      },
      exercise: {
        type: Sequelize.BOOLEAN
      },
      other: {
        type: Sequelize.BOOLEAN
      },
      grief: {
        type: Sequelize.BOOLEAN
      },
      userinput: {
        type: Sequelize.STRING
      },
      wantPhoto: {
        type: Sequelize.BINARY
      },
      date: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('positivityApps');
  }
};