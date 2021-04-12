const Sequelize = require('sequelize');

const conn = new Sequelize('*****', '*****', '*****', {
    host: '*****',
    dialect: 'mysql'
});

module.exports = {Sequelize, conn};
