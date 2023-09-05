import React, {useState} from 'react'

const TaskForm = ({tasks, setTasks}) => {
    const [task, setTask] = useState({content:"",isDone:false})
    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks,task])
        setTask({content:"",isDone:false})
    }
  return (
    <fieldset>
        <legend>TaskForm</legend>
        <form onSubmit={e=>addTask(e)}>
            <input type="text" onChange={(e)=>(setTask({...task,content:e.target.value}))}
            value={task.content}/>
            <button>Add</button>
        </form>
    </fieldset>
  )
}

export default TaskForm