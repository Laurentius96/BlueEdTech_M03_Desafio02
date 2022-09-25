// 10°) Importat o Mongoose - feramenta que auxilia no desenvolvimento com banco de dados MongoDB
const mongoose = require("mongoose");

/**
 *  Schemas --> É a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
 *
 *  Documents --> São como se fosse as linhas da nossa tabela .
 *
 *  Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
 *
 *  Collections --> São equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.
 *
 */

// 11°) Contruindo o modelo com as estruturas de dados pre definidos
const tarefasModel = new mongoose.Schema({
  titulo: { type: String, reqired: true },
  descricao: { type: String, reqired: true },
  prioridade: {type:String, reqired: true},
  status: { type: String, reqired: true },
  prazo: { type: String, reqired: true },
  dataCriacao: { type: Date, default: Date.now },
});

// 12°) Inicializar o model na nossa collection com o Schemma farefasModel
const Tarefa = mongoose.model("tarefas", tarefasModel);

// 13°) Exporto o módulo para que ele possa usar as funções do banco de dados
module.exports = Tarefa;
