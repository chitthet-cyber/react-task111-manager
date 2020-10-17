import React,{useContext} from 'react';
import { TaskListContext } from '../context/TaskLIstContext';
const Task = ({task}) => {
 const {deleteTask,findItem} = useContext(TaskListContext)

 return ( 
  <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
        onClick={()=>deleteTask(task.id)}
         className="btn-delete task-btn">
        <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button 
        onClick ={()=>findItem(task.id)}
        className="btn-edit task-btn" >
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
          
        
  );
}
 
export default Task;