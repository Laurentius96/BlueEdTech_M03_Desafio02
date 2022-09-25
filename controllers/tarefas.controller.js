const tarefasService = require('../services/tarefas.service');

const mongoose = require('mongoose');

const getTarefas = async (req, res) => {
    const tarefa = await tarefasService.getTarefas();
    res.send(tarefa); // Joga no front...
};

const getTarefaById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send({ message: 'ID inválido' });
    }

    const tarefa = await tarefasService.getTarefaById(id);

    if (!tarefa) {
        res.status(404).send({ message: 'Game não encontrado!' });
    }

    res.send(tarefa);
};

const createTarefa = async (req, res) => {
    const tarefa = req.body;

    if (
        !tarefa ||
        !tarefa.titulo ||
        !tarefa.descricao ||
        !tarefa.prioridade ||
        !tarefa.status ||
        !tarefa.prazo
    ) {
        res.status(400).send({
            message:
                'Não foi preenchido todos os dados para a criação da tarefa.',
        });
    }
    await tarefasService
        .createTarefa(tarefa)
        .then(() => {
            res.send({ message: 'Tarefa criada!' });
        })
        .catch(err => {
            res.status(500).send({ message: `Erro no servidor: ${err}` });
        });
};

const editTarefa = async (req, res) => {
    const id = req.params.id;
    const tarefaEdit = req.body;

    await tarefasService
        .editTarefa(id, tarefaEdit)
        .then(() => {
            res.send({ message: 'Tarefa editada!' });
        })
        .catch(err => {
            res.status(500).send({ message: `Erro no servidor: ${err}` });
        });
};

const deleteTarefa = async (req, res) => {
    const id = req.params.id;

    await tarefasService
        .deleteTarefa(id)
        .then(() => {
            res.send({ message: 'Tarefa deletada!' });
        })
        .catch(err => {
            res.status(500).send({ message: `Erro no servidor:${err}` });
        });
};

module.exports = {
    getTarefas,
    getTarefaById,
    createTarefa,
    editTarefa,
    deleteTarefa,
};
