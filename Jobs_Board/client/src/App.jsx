import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
// import './App.css'
import AllJobs from './components/AllJobs'
import JobForm from './components/JobForm'
import JobShow from './components/JobShow'
import JobEdit from './components/JobEdit'

function App() {
  const [count, setCount] = useState(0)
  const baseUrl = 'http://localhost:8000/api/'

  return (
    <>
    <div className="container mt-3">
      <h1>Jobs Board</h1>
      
      <Routes>
        <Route path={'/'} element={<AllJobs baseUrl={baseUrl}/>}/>

        <Route path={'/jobs/new'} element={<JobForm baseUrl={baseUrl}/>}/>
        <Route path={'/jobs/:id'} element={<JobShow baseUrl={baseUrl}/>}/>
        <Route path='/jobs/edit/:id' element={<JobEdit baseUrl={baseUrl}/>}/>

      </Routes>

    </div>
    </>
  )
}

export default App
