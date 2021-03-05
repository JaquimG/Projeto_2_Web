const db = require('./Database');

const Viagem = db.conn.define('Viagem', {
    partida: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    destino: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    horaDePartida: {
        type: db.Sequelize.DATE,
        allowNull: false
    }
}, {freezeTableName: true});

//Viagem.sync({force: true});

module.exports = Viagem;
module.exports = db;