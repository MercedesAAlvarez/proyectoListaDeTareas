

import { FaRegEdit } from "react-icons/fa";


export const TaskItem = () =>{
    return(
        <li>
           <span>
            <label htmlFor="" className="container-edit"></label>
           </span>
           <button className="btn-edit"><FaRegEdit /></button>
        </li>
    )
}










export default TaskItem;