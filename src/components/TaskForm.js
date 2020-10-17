import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskLIstContext';


const TaskForm = () => {
  const { addTask, clearTask, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

   const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form  className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button 
        onClick={()=>clearTask()}
        className="btn clear-btn" >
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm;