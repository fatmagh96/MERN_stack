import React from 'react'
import noteStyle from './Note.module.css' 
// Note: .module.css bch n importi style as objet js
import { Link } from 'react-router-dom'

const Note = ({note, deleteNote}) => {
    
  return (
    <div className={noteStyle.note}>
        <h3>{note.isImportant && "📌" }{note.title}</h3>
        <p>{note.content}</p>
        <div className='d-flex justify-content-between'>
            <p>{note.createdAt}</p>
            <div>
                <button className='btn btn-info mx-2' style={{width:"100px", height:"40px"}}><Link  to={`/notes/${note._id}/edit`}>Edit</Link></button>
                <button className={noteStyle.button_delete} onClick={()=>deleteNote(note._id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Note