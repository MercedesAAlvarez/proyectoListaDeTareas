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
      completed:''
    }
  )
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = () => {
      fetch('http://localhost:3017/api')
      .then(res => res,json())
      .then(res => setTasks(res))
   }
    getTasks()
  }, [])

  return (
    <Fragment>
      <Navbar brand='Manager Task' />
      <div classname="container">
        <div className="row">
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Lista de tareas</h2>
            <TaskList tasks={tasks} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Formulario de tareas</h2>
            <TaskForm task={task} setTask={setTask} />
          </div>

        </div>
      </div>
    </Fragment>

  


  );
}

export default App;