const express = require('express');
const router = express.Router();
const {taskList, taskCrear, taskUpdate, taskEliminar } = require('../controllers/apiController');

/* lista de tareas */
router.get('/tasks',taskList)
/* crear tarea */
router.post('/tasks',taskCrear)
/* editar tarea */
router.put('/tasks/:id',taskUpdate)
/* eliminar tarea */
router.delete('/tasks/:id',taskEliminar)

module.exports =router;