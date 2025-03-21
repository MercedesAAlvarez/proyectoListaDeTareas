import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './style/App.css'
import logo from "./assets/logo.ForIT.png"

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="card-tasklist">
        <h1>Manager Task</h1>
        <div className="counter-tasklist">
          <h3>Total de Tareas: 1</h3>
          <h3>Tareas pendientes: 1</h3>
        </div>
        <div className="add-tasklist">
          <h3>Agregar una tarea</h3>
          <TaskForm></TaskForm>
        </div>





        <TaskList></TaskList>
      </div>

    </>
  );
}

export default App;