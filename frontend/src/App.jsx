import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './style/App.css'
import Navbar from './components/Navbar'

function App() {

  const [task,setTask] = useState(
    {
     
      title:'',
      description:'',
      completed:'No'
    }
  )
  const [tasks, setTasks] = useState([])

  const [tasksUpdate, setTaskUpdate] = useState(false)
  

  

  useEffect(() => {
    const getTasks = () => {
      fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(res => setTasks(res))
      .catch((error) => conso0le.error("Error:",error))
   }
    getTasks()
    setTaskUpdate(false)
  }, [tasksUpdate])

  return (
    <Fragment>
      <Navbar brand='Manager Task' />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Lista de tareas</h2>
            <TaskList task={task} setTask={setTask} tasks={tasks}  setTaskUpdate = {setTaskUpdate}/>
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Formulario de tareas</h2>
            <TaskForm task={task} setTask={setTask}  />
          </div>

        </div>
      </div>
    </Fragment>

  


  );
}

export default App;