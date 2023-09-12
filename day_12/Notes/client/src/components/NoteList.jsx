import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './Note'

const NoteList = (props) => {
    const [notes, setNotes] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/notes')
        .then(serverResponse => {
            console.log("SERVER RESPONSE", serverResponse);
            setNotes(serverResponse.data);
        })
        .catch(serverError => {
            console.log('SERVER ERROR : ', serverError);
        })
    },[])
    const deleteNote = (id) => {
        console.log("NOTE ID = ", id, "WILL BE DELETED");
        axios.delete(`http://localhost:8000/api/notes/${id}`)
        .then(res=>{
            console.log(res)
            const filteredNotes = notes.filter((note)=> note._id != id)
            setNotes(filteredNotes)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        {/* <h2>{JSON.stringify(notes)}</h2> */}
        {notes.map((note)=><Note key={note._id} note={note} deleteNote={deleteNote}/>)}
        
    </div>
  )
}

export default NoteList