import React from 'react'
import TaskList from './TaskList'




const TaskForm = ({ task, setTask }) => {

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
   
  let {title,description,completed} =task



  const handleSubmit = () => { 
    completed = false
    if (title === '' || description === '' ) {
      alert('Todos los campos son obligatorios')
      return
    }

    /* Crear tarea */
    const requestInit = {
      method: 'POST',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify(task)
    }
    fetch(`${import.meta.env.VITE_API_URL}`, requestInit)
      .then(res => res.json())
      .then(res => console.log("La tarea ha sido creada"))
      .catch((error) => console.error("Error:", error))
    
      setTask(
      {
        id: '',
        title: '',
        description: '',
        completed: ''
      }
    )    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor='title' className="form-label">Title</label>
        <input value={title} name="title" onChange={handleChange} type="text" id="title" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor='description' className="form-label">Description</label>
        <input value={description} name="description" onChange={handleChange} type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor='completed' className="form-label">Completed</label>
        <input value={completed} name="completed" onChange={handleChange} type="text" id="completed" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
  )
}

export default TaskForm;

