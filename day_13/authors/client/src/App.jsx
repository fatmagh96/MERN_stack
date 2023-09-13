import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Create from './views/Create'
import Update from './views/Update'

// import './App.css'

function App() {
  const baseUrl = "http://localhost:8000/api/"
  return (
    <>
      <div className='container mt-3'>
        <h1>Favourite Authors</h1>
        <Routes>
          <Route path='/' element={<Home baseUrl={baseUrl}/>}/>
          <Route path='/new' element={<Create baseUrl={baseUrl}/>}/>
          <Route path='/edit/:id' element={<Update baseUrl={baseUrl}/>}/>
        </Routes>
        
      </div>
        
    </>
  )
}

export default App
