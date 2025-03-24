import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from './components/Navbar'



function App() {

  const [task,setTask] = useState(
    {
      id:'',
      title:'',
      description:'',
      completed:'No'
    }
  )
  const [tasks, setTasks] = useState([])

  

  useEffect(() => {
    const getTasks = () => {
      fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then((res) => res.json())
      .then((res) => setTasks(res))
      .catch((error) => console.error("Error:",error))
   }
    getTasks()   
  }, [])

/* Eliminar tarea */
const handleDelete = (taskId) => {
  
  const requestInit = {
    method: 'DELETE',
  }
  fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, requestInit)
    .then(res => res.text())
    .then(() => {
      console.log("La tarea ha sido eliminada exitosamente");
      setTasks(tasks.filter((task) => task.id !== taskId)) })
    .catch((error) => console.error("Error:", error))
}

/* formulario para editar */
const handleSelect = (task) =>{
  setTask(task)




}
  return (
    <Fragment>
      <Navbar brand={<span style={{ color: "white", fontSize: "50px", fontWeight: "lighter", textAlign: "center",width:"300px", height:"80px",display:"flex",flexWrap:"wrap", justifyContent:"space-around"   }}>Manager Task</span>}  />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Lista de tareas</h2>
            <TaskList tasks={tasks} handleDelete={handleDelete} handleSelect={handleSelect} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Formulario de tareas</h2>
            <TaskForm task={task} setTask={setTask} setTasks={setTasks} tasks={tasks}  />
          </div>
        </div>
      </div>
    </Fragment>
  )}


export default App;