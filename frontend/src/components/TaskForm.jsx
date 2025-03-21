import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";





function TaskForm() {
  return (
  <div>
     
       <form className="form-crear">
         <input type="text" className="input-crear" name= "description" value="" />
         <button className="btn-crear"type="submit"><TiDocumentAdd /></button>
         <button className="btn-edit"type="submit"><FaRegEdit /></button>
       </form>
    
    {/*    <form className="form-edit">
         <input type="text" className="input-edit" name= "description" value="" />
        
       </form>
         */}
     
  </div>
  )
}

export default TaskForm

