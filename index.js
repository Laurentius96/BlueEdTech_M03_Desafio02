/**
 * Modelo MVC:
 *
 * > Model - É o responsável pelos dados e funções do banco de dados
 *
 * > View - É a visão do cliente ou seja (HTML, APP, SMARTWATCH, SMART TV, VUE, REACT, ANGULAR)
 *
 * > Controller - É responsável por gerenciar os fluxos e das regras do sistema.
 *
 * > Rotas - São os responsáveis pelos endpoints e métodos da API (GET/POST/PUT/DELETE)
 *
 * > Serviços - Responsáveis por conectar ao nosso modelo para chamr as funções do banco de dados (lida com dados)
 *
 */

// 1°) Importando as bobliotecas/ libs necessarias...
const express = require("express");
const cors = require("cors");

// 8°) Importando o arquivo de conexão para poder acessar a função Conn...
const Conn = require("./conn/conn");

// 25°) Importando o arquivo de rotas...
const tarefasRouter = require("./routes/tarefas.routes");

// 2°) Inicializando o express...
const app = express();

// 3°) Declarando os middleware...
app.use(express.json());
app.use(cors());

// 26°) Chamando as rotas...
app.use("/tarefas", tarefasRouter);

// 9°) Chamando a conexão com o banco de dados...
Conn();

// 4°) Definindo a porta de inicialização do servidor...
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor inicializando na porta: ${port}`);
});
