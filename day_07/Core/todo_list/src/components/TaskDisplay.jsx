import React from 'react'

const TaskDisplay = ({ tasks, setTasks}) => {
    const updateTask = (e,idx) => {
        const updatedList = [...tasks]
        // console.log('+++',updatedList)
        updatedList[idx].isDone = !updatedList[idx].isDone
        setTasks(updatedList)
    }
    const deleteTask = (id)=>{
        setTasks(tasks.filter((task,idx)=> idx != id ))
      }
    return (
        <fieldset>
            <legend>TODO LIST</legend>
            {tasks.map((task, idx) =>
                <div key={idx}>
                    <span style={task.isDone ? { textDecorationLine: "line-through" } : { textDecorationLine: "None" }}>{task.content}</span>
                    <input type="checkbox" checked={task.isDone} onChange={e=>updateTask(e,idx)} />
                    <button onClick={e=>deleteTask(idx)}>Delete</button>
                </div>)}
        </fieldset>
    )
}

export default TaskDisplay