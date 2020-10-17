import React,{createContext,useState} from 'react';
import nextId from "react-id-generator";

export  const TaskListContext = createContext()

const TaskListContextProvider = ({children}) => {
 const [tasks,setTasks] = useState([])
 const [editItem,setEditItem]=useState(null)

 //Add task
const addTask =(task)=>{
const newTask = {
 title:task,
 id:nextId()
}
setTasks([...tasks,newTask]);
}

//Delete task
const deleteTask = (id)=>{
 setTasks(tasks.filter(task=>id!==task.id))
}

//Clear task
const clearTask = ()=>{
setTasks([]);
}

// Find Item
const findItem = (id)=>{
const item = tasks.find(task=>task.id===id)
setEditItem(item);
}
// Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  }

 return ( 
   <TaskListContext.Provider value={{tasks,addTask,deleteTask,clearTask,findItem,editItem,editTask}}>
  {children}
  </TaskListContext.Provider> 
  );
}
 
export default TaskListContextProvider;