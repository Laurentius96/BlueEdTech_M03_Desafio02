const mongoose = require('mongoose');

const tarefasModel = new mongoose.Schema({
    titulo: { type: String, reqired: true },
    descricao: { type: String, reqired: true },
    prioridade: { type: String, reqired: true },
    status: { type: String, reqired: true },
    prazo: { type: String, reqired: true },
    dataCriacao: { type: Date, default: Date.now },
});

const Tarefa = mongoose.model('tarefas', tarefasModel);

module.exports = Tarefa;
