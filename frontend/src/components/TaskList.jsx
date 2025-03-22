
import TaskItem from '../components/TaskItem'
import React from 'react'

const TaskList = ({ task,tasks,setTask, setTaskUpdate }) => {

/* Eliminar tarea */

  const handleDelete = (taskId) => {
    const requestInit = {
      method: 'DELETE',

    }
    fetch(`${import.meta.env.VITE_API_URL}/${taskId}`, requestInit)
      .then(res => res.text())
      .then(() => {
        console.log("La tarea ha sido eliminada exitosamente");
        setTaskUpdate(true)
      })
      .catch((error) => console.error("Error:", error))
  }

  /* Editar tarea */

 let {title,description,completed} = task

  const handleEdit = (taskId) => {
    completed = "Si" || "No"
    if (title === '' || description === '' || completed === '' ) {
      alert('Todos los campos son obligatorios')
      return
    }
    const requestInit = {
      method: 'PUT',
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify(task)

    }
    fetch(`${import.meta.env.VITE_API_URL}/${taskId}`, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
      setTask(
        {
          id: '',
          title: '',
          description: '',
          completed: 'No'
        }
      )
        setTaskUpdate(true)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.completed ? 'Si' : 'No'}</td>
            <td>
              <div className="mb-3">
                <button onClick={() => handleEdit(task.id)} className="btn btn-warning">Editar</button>
              </div>
              <div className="mb-3">
                <button onClick={() => handleDelete(task.id)} className="btn btn-danger">Eliminar</button>
              </div>
            </td>
          </tr>
        )
        )}

      </tbody>
      <TaskItem />
    </table>
  )
}

export default TaskList;