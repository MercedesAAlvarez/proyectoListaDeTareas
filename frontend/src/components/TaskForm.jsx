
import React from 'react'
import TaskList from './TaskList'




const TaskForm = ({ task, tasks, setTask ,setTasks}) => {

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
   
  let {id,title,description,completed} =task

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    completed = "No"
    if (title === '' || description === '' || completed === '' ) {
      alert('Todos los campos son obligatorios')
      return
    }
    /* Crear/Editar tarea */
    const requestInit = {
      method: id ? 'PUT' : 'POST',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify(task)
    };
    
    const url = id 
    ? `${import.meta.env.VITE_API_URL}/tasks/${id}`
    : `${import.meta.env.VITE_API_URL}/tasks`
    
    fetch(url, requestInit)
      .then((res) => res.json())
      .then((taskUpdate) =>setTasks(taskUpdate))
      .then(()=>{console.log("Apliación exitosa");
      })
      .catch((error) => console.error("Error:", error))    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor='title' className="form-label">Title</label>
        <input value={task.title} name="title" onChange={handleChange} type="text" id="title" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor='description' className="form-label">Description</label>
        <input value={task.description} name="description" onChange={handleChange} type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor='completed' className="form-label">Completed</label>
        <select value={task.completed} name="completed" onChange={handleChange} type="text" id="completed" className="form-control">
        <option value="No">No</option>
        <option value="Si">Si</option>
        </select>
      </div>
     {/*  <button className="btn btn-primary" type="submit">Enviar</button> */}
      <button className="btn btn-primary" type="submit">{task.id ? "Actualizar" : "Enviar"}</button>
    </form>
  )
}

export default TaskForm;

