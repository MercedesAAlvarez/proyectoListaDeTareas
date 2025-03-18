
const express = require('express');
let path = require('path');
const app = express();
const port = 3017;


app.use(express.json());


let tasks =[];
let id= 1;

/* Todas las tareas */

app.get("/api/taks",(req,res)=>{
    res.json(tasks);
    });

/* Nueva tarea */

app.post("/api/tasks",(req,res)=>{
    const {title,description} =req.body;

    if (tittle ===" " || description ===" "){
    return res.status(400).json({error: "Tenes que ingresar un titulo y una descripcion"})
    }
     
    const newTask ={
    id: id++,
    title,
    description,
    completed:false,
    createAt: new Date()
    };

    tasks.push(newTask);
    res.status(201).json(newTask)

    });

   /*  Actualizar tarea */

   app.put("/api/tasks/:id", (req, res) => {
    const {id} = req.params;
    const {title,description,completed} = req.body;
    const taskId = tasks.findIndex(task => task.id === id);

    if (taskId === -1) {
      return res.status(404).json({error:" No se encontro la tarea,probá nuevamente"})
    }

    if (title === undefined || description === undefined || completed === undefined) {
     return res.status(400).json({error:"Todos los campos son obligatorios"})
    }
    

    tasks[taskId].title = title
    tasks[taskId].description = description
    tasks[taskId].completed = completed

    res,json(tasks[taskId]);

});


/* Borrar tarea */

app.delete("/api/tasks/:id", (req, res) => {
    const {id} = req.params;
    const taskFind = tasks.find(task => task.id === id)
     if (taskFind === undefined){
        return res.status(404).json({error:" La Tarea no se ha encontrado o no existe"})
     }

     tasks= task.filter(task => task.id != id)
      return res.json({message:"La tarea fue eliminada"})
});










app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}\n`))