const express = require('express');
const app = express();
bodyParser = require('body-parser');

const Passageiro = require('./models/Passageiro');
const Viagem = require('./models/Viagem');

//CONFIGS
    //Body-Parser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

//ROTAS
    //BUSCAR
    app.get('/buscarPassageiros', function(req, res) {
        Passageiro.findAll().then((passageiros) => {
            res.json(passageiros)
        })
    });

    //CRIAR
    app.post('/criarPassageiro', function(req, res) {
        Passageiro.create({
            nome: req.body.nome,
            cpf: req.body.cpf
        }).then(function() {
            res.json('nome')
        })
    });

    //DELETAR
    app.delete('/deletarPassageiro/:cpf', function(req, res) {
        Passageiro.destroy({where: {'cpf': req.params.cpf}}).then(function() {
            res.json('nome')
        })
    });

    //EDITAR
    app.put('/editarPassageiro/:cpf', function(req, res) {
        Passageiro.findOne({_cpf: req.params.cpf}).then((passageiro) => {
            passageiro.nome = req.body.nome;
            passageiro.save();
            res.json(passageiro)
        })
    });



/**********************************************************************************/
app.listen(8081, function() {
    console.log('Servidor Funcionando!')
});