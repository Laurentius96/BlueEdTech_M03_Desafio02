const express = require('express');

const tarefasController = require('../controllers/tarefas.controller');

const router = express.Router();

router.get('/get-tarefas', tarefasController.getTarefas);

router.get('/get-tarefa-id/:id', tarefasController.getTarefaById);

router.post('/create', tarefasController.createTarefa);

router.put('/edit/:id', tarefasController.editTarefa);

router.delete('/delete/:id', tarefasController.deleteTarefa);

module.exports = router;
