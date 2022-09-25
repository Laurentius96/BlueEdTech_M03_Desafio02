// 17°) Importando o service para poder ter acesso as funções que cuidam dos dados...
const tarefasService = require("../services/tarefas.service");

// 30°) Chamando o mongoose...
const mongoose = require("mongoose");

// 18°) Vai retornar um lista de tarefas pré cadastradas para o Front-End...
const getTarefas = async (req, res) => {
  const tarefa = await tarefasService.getTarefas();
  // Recebemos os tarefas encontradas pelo serviço va banco de dados (atravez do model)...
  // Enviam resposta para o Fron-End...
  res.send(tarefa); // Joga no front...
};

// 28° & 31°) Recebe um id via parametro da requisição e busca uma tarefa no banco de dados...
const getTarefaById = async (req, res) => {
  // Acesso o id via parametro da requisicao
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ message: "ID inválido" });
  }

  const tarefa = await tarefasService.getTarefaById(id);

  if (!tarefa) {
    res.status(404).send({ message: "Game não encontrado!" });
  }

  res.send(tarefa);
};

// 33° & 35°) Função que recebe um objeto via requisição (Front-End) e envia para ser cadastrado no banco de dados...
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
      message: "Não foi preenchido todos os dados para a criação da tarefa.",
    });
  }
  await tarefasService
    .createTarefa(tarefa)
    .then(() => {
      res.send({ message: "Tarefa criada!" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Erro no servidor: ${err}` });
    });
};

// 37°) Função que recebe um id via reisição e envia para ser alterado no banco de dados...
const editTarefa = async (req, res) => {
  // Acesso o id do parametro via requisição...
  const id = req.params.id;
  // Acesso o objeto do game no corpo da requisição...
  const tarefaEdit = req.body;

  await tarefasService
    .editTarefa(id, tarefaEdit)
    .then(() => {
      res.send({ message: "Tarefa editada!" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Erro no servidor: ${err}` });
    });
};

// 40°) Recebe um ID via parametro da requisição e envia para o serviço para ser excluido do banco de dados...
const deleteTarefa = async (req, res) => {
  const id = req.params.id;

  await tarefasService
    .deleteTarefa(id)
    .then(() => {
      res.send({ message: "Tarefa deletada!" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Erro no servidor:${err}` });
    });
};

// 19°) Exportando os módulos...
module.exports = {
  getTarefas,
  getTarefaById,
  createTarefa,
  editTarefa,
  deleteTarefa,
};
