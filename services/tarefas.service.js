const Tarefa = require('../models/tarefas');

const getTarefas = async () => {
    const tarefas = await Tarefa.find();
    return tarefas;
};

const getTarefaById = async id => {
    const tarefa = await Tarefa.findById(id);
    return tarefa;
};

const createTarefa = async tarefa => {
    return await Tarefa.create(tarefa);
};

const editTarefa = async (id, tarefa) => {
    return await Tarefa.findByIdAndUpdate(id, tarefa);
};

const deleteTarefa = async id => {
    return await Tarefa.findByIdAndDelete(id);
};

module.exports = {
    getTarefas,
    getTarefaById,
    createTarefa,
    editTarefa,
    deleteTarefa,
};
