import React from 'react'
import noteStyle from './Note.module.css'
import { Link } from 'react-router-dom'

const Note = ({ note, deleteNote }) => {
  // console.log(props);
  return (
    <div className={noteStyle.note}>
      <Link className='fst-italic text-dark h1' to={`/notes/${note._id}`} style={{textDecoration:"none"}}>{note.isImportant && "📌"} {note.title}</Link>
      {/* <h1>{note.isImportant ? "📌":""} {note.title}</h1> */}
      <p className='fs-4'>
        {note.content}
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        <p>{note.createdAt}</p>
        <div>
          <Link
            to={`/notes/${note._id}/edit`}
            className='btn btn-info mx-2'
            style={{ width: "100px", height: "40px" }} >
            Edit</Link>
          <button className={noteStyle.button_delete} 
          onClick={() => deleteNote(note._id)}
          >Delete</button>
        </div>
        <div className='text-right'>
          <h3 className='fst-italic' style={{color:"crimson"}}>Posted by: {note.user.userName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Note