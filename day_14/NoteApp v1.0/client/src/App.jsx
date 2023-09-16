import { useContext } from 'react'
import UserProvider from './components/provider/UserProvider'
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./components/Nav"
import NoteList from './components/Notes/NoteList'
import NoteShow from './components/Notes/NoteShow'
import NoteCreate from './components/Notes/NoteCreate'
import NoteEdit from './components/Notes/NoteEdit'
import Edit from './views/Edit'
import Create from './views/Create'
import Register from './views/Register'
import Login from './views/Login'



function App() {
  const baseUrl = "http://localhost:8000/api"
  return (
    <div className="container mt-3">
      <UserProvider>

      <Nav baseUrl={baseUrl}/>
      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<Register baseUrl={baseUrl}/>}/>
        <Route path='/login' element={<Login baseUrl={baseUrl}/>}/>
        {/* Notes List route */}
        <Route path='/notes' element={<NoteList/>}/>
        {/* One Note Route */}
        <Route path='/notes/:id' element={<NoteShow baseUrl={baseUrl}/>}/>
        {/* Create Note Route */}
        {/* <Route path='/notes/new' element={<NoteCreate/>}/> */}
        <Route path='/notes/new' element={<Create/>}/>
        {/* Edit Note Route */}
        {/* <Route path='/notes/:id/edit' element={<NoteEdit/>}/> */}
        <Route path='/notes/:id/edit' element={<Edit/>}/>
        {/* GARD ROUTE */}
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
      
      </UserProvider>
    </div>
  )
}

export default App
