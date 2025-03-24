
import React from "react";




 const TaskItem = ({task,handleDelete, handleSelect}) =>{

  if (!task){
    return null;
  }

    return(
    
       
       
         <tr>
           <td>{task.id}</td>
           <td>{task.title}</td>
           <td>{task.description}</td>
           <td>{task.completed ? 'Si' : 'No'}</td>
           <td>
             <div className="mb-3">
               <button onClick={() => handleSelect(task)} className="btn btn-warning">Editar</button>
             </div>
             <div className="mb-3">
               <button onClick={() => handleDelete(task.id)} className="btn btn-danger">Eliminar</button>
             </div>
           </td>
         </tr>
      
      
     
    
    )
}










export default TaskItem;