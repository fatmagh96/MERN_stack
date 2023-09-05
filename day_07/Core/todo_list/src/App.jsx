import { useState } from 'react'
import './App.css'
import TaskDisplay from './components/TaskDisplay'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([{content:"Get Python black belt",isDone:true},{content:"Get Python red belt",isDone:false}])

  return (
    <>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskDisplay tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
