
import TaskItem from '../components/TaskItem'
import React from 'react'

 export const TaskList = ({tasks}) => {
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
        {tasks.map(tasks =>(
           <tr key={tasks.id}>
           <th>{tasks.id}</th>
           <th>{tasks.title}</th>
           <th>{tasks.description}</th>
           <th>{tasks.completed}</th>
         </tr>
        )
       )}
       
       </tbody>
       <TaskItem/>
    </table>
  )
}

export default TaskList;