import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css'
import AllJobs from './components/AllJobs'
import JobForm from './components/JobForm'
import JobShow from './components/JobShow'
import JobEdit from './components/JobEdit'
import UserProvider from './components/provider/UserProvider'
import Nav from './components/Nav'
import Register from './views/Register'
import Login from './views/Login'

function App() {
  const [count, setCount] = useState(0)
  const baseUrl = 'http://localhost:8000/api/'

  return (
    <>
      <div className="container mt-3">
        {/* <h1>Jobs Board</h1> */}
        <UserProvider>
          <Nav baseUrl={baseUrl} />

          <Routes>
            <Route path='/' element={<Register baseUrl={baseUrl} />} />
            <Route path='/login' element={<Login baseUrl={baseUrl} />} />
            <Route path={'/jobs'} element={<AllJobs baseUrl={baseUrl} />} />

            <Route path={'/jobs/new'} element={<JobForm baseUrl={baseUrl} />} />
            <Route path={'/jobs/:id'} element={<JobShow baseUrl={baseUrl} />} />
            <Route path='/jobs/edit/:id' element={<JobEdit baseUrl={baseUrl} />} />

          </Routes>

        </UserProvider>
      </div>
    </>
  )
}

export default App
