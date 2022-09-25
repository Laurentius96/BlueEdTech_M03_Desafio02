// 14°) Importando a model para usar as funções do mongDB no service...
const Tarefa = require("../models/tarefas");

// 15°) Criando os Métodos...
const getTarefas = async () => {
  // Vai conectar com o banco de dados e retornar a lista de tarefas
  // Find = bunsca os dados no banco de dados de acordo com o filtro, se não houver filtros, busca todos os dados cadastrados
  const tarefas = await Tarefa.find();
  return tarefas;
};

// 27°) Recebe um id e faz uma busca no banco de dados de acordo com ess id...
const getTarefaById = async (id) => {
  const tarefa = await Tarefa.findById(id);
  return tarefa;
};

// 32°) Recebendo um objeto (JSON) e salvando no banco de dados...
const createTarefa = async (tarefa) => {
  //Recebe o objeto e envia para ser cadastrado no banco de dados atraves do model da função create...
  return await Tarefa.create(tarefa);
};

// 36°) Recebe um Objeto(JSON) e um id e altera os valores de uma tarefa no banco de dados...
const editTarefa = async (id, tarefa) => {
  return await Tarefa.findByIdAndUpdate(id, tarefa);
};

// 39°) Recebe um id e deleta os valores de uma tarefa no banco de dados...
const deleteTarefa = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

// 16°) Módulos de exportação...
module.exports = {
  getTarefas,
  getTarefaById,
  createTarefa,
  editTarefa,
  deleteTarefa,
};
