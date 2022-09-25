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

//* Fazendo o Deploy - inicar a conf. da varável de ambiente...
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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

//** Buscando os dados das viaveis de ambiente...
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

// 9°) Chamando a conexão com o banco de dados...
Conn(db_url, db_user, db_pass, db_data);

// 4°) Definindo a porta de inicialização do servidor...
const port = 3001;
app.listen(process.env.PORT || port, () => {
  console.log(`Servidor inicializando na porta: ${port}`);
});


//** Ir no package.json e colocar no scripts "start":"node index",