
import TaskItem from '../components/TaskItem'
import React from 'react'

const TaskList = ({ tasks = [],handleDelete,handleSelect}) => {


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
        {tasks.length > 0 ?(
          tasks.map(task => (
         <TaskItem key={task.id} task={task} handleDelete={handleDelete} handleSelect={handleSelect} />
        ))
        ) : (
          <tr>
            <td colSpan="5" style={{textAlign:"center"}}>
              No hay tareas disponibles.Refresca la página.
            </td>
          </tr>
        )}

      </tbody>
      
    </table>
  )
}

export default TaskList;