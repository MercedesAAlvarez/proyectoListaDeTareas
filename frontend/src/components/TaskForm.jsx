import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";





const TaskForm=({task,setTask})=> {

  const handleChange = e =>{
      setTask({
        [e.target.name]: e.target.value
      })
  }



  return (
  <form>
     <div className="mb-3">
      <label htmlFor='title'  className="form-label">Title</label>
      <input name="title" onChange={handleChange} type="text" id="title" className="form-control" />
     </div>
     <div className="mb-3">
      <label htmlFor='description'  className="form-label">Description</label>
      <input name="description" onChange={handleChange} type="text" id="description" className="form-control" />
     </div>
     <div className="mb-3">
      <label htmlFor='completed'  className="form-label">Completed</label>
      <input name="completed" onChange={handleChange} type="text" id="completed" className="form-control" />
     </div>
     <button className="btn btn-primary" type="submit">Enviar</button>
  </form>
  )
}

export default TaskForm

