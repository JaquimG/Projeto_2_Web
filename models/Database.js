const Sequelize = require('sequelize');

const conn = new Sequelize('bd_michael', 'bd_michael', 'Michael@98', {
    host: 'bd_michael.mysql.dbaas.com.br',
    dialect: 'mysql'
});

module.exports = {Sequelize, conn};