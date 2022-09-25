/**
 * 5°) Conectar com o banco de dados
 *     Importando o mongoose (lib responsável por lidar com o banco de dados mongoDB)
 *
 */
const mongoose = require("mongoose");

/**
 * 6°) Declarando uma função para ser a função de conexão
 *       Url da conexao = mongodb://servidor:porta/ => mongodb://localhost:27017/
 *
 * mongodb://localhost:27017/lista
 *
 *       userNewUrlParser = fala pro mongoDB trabalhar com o novo sistema de Url
 */
const Conn = (url, user, pass, data) => {
  mongoose
    .connect(`${url}/${data}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("MongoDB Conectado...");
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
};

// 7°) Exporto a função de conexão
module.exports = Conn;

