const db = require('./Database');

const Passageiro = db.conn.define('Passageiro', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.STRING,
        primaryKey: true
    }
}, {freezeTableName: true});

//Passageiro.sync({force: true});

module.exports = Passageiro;