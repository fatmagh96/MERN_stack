import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
import NoteList from './components/NoteList'
import Note from './components/Note'
import NoteEdit from './components/NoteEdit'
import NoteCreate from './components/NoteCreate'



function App() {

  return (
    <div className='container mt-3'>
      <Nav />
      {/* ROUTES */}
      <Routes>
        {/* Notes List Route */}
        <Route path='/notes' element={<NoteList/>} />
        {/* One Note Route */}
        <Route path='/notes/:id' element={<Note/>} />
        {/* Create Note Route */}
        <Route path='/notes/new' element={<NoteCreate/>} />
        {/* Edit Note Route */}
        <Route path='/notes/:id/edit' element={<NoteEdit/>} />
        {/* GUARD ROUTE */}
        <Route path='*' element={<Navigate to='/notes' replace />}/>
      </Routes>

      
    </div>
  )
}

export default App
