const fs = require('fs')
const path = require('path')
let tasks = require('../data/tasks.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/tasks.json'), JSON.stringify(dato, null, 2), 'utf-8')
module.exports = {
    taskList: (req, res) => {
        return res.json(tasks);
    },
    taskCrear: (req, res) => {
        const { title, description, completed } = req.body;
      /*   let taskNueva = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description,
            completed: completed || false
        }; */
        const taskNueva ={
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description,
            completed:completed,
            createAt: new Date()
            };
        tasks.push(taskNueva);
        guardar(tasks)
        return res.status(201).json(taskNueva);
    },
    taskUpdate: (req, res) => {
        let id = +req.params.id;;
       /*  let taskId = tasks.find(task => task.id === id);

        if (!taskId) {
            return res.status(404).json({ error: 'No se encuentra la tarea' });
        } */
            const taskId = tasks.findIndex(task => task.id === id);

            if (taskId === -1) {
              return res.status(404).json({error:" No se encontro la tarea,probá nuevamente"})
            }
        const { title, description, completed } = req.body;
        tasks[taskId].title = title
        tasks[taskId].description = description
        tasks[taskId].completed = completed
        
       /*  console.log("Tarea actualizada:", taskId); */
       guardar(tasks)
       return res.json(tasks[taskId]);
    },
    taskEliminar: (req, res) => {
        let id = +req.params.id;
        let taskDel = tasks.filter(task => task.id !== id);

        if (taskDel.length === tasks.length) {
            return res.status(404).json({ error: 'No se ha encontrado la tarea solicitada o no existe' });
        }

        tasks = taskDel;
        return res.status(200).json({ message: 'La tarea fue eliminada exitosamente' });
    }
};