import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NoteCreate = (props) => {
  const [note, setNote] = useState({title:"",content:"",isImportant:false})
  const [errors, setErrors] = useState({title:"",content:""})
  const naviagte = useNavigate()
  const createNote = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/notes',note)
    .then(serverResponse => {
      console.log(serverResponse.data);
      naviagte('/notes')
    })
    .catch(error=>{
      const serverError = error.response.data
      // console.log('SERVER ERROR : ',serverError)
      const errs = {title:"",content:""}
      for (let label of Object.keys(serverError)){
        console.log("ERROR LABEL = ", label , '-----', "ERROR VALUE = ", serverError[label].message);
        errs[label] = serverError[label].message;
      }
      console.log("ALL Backend Errors = ", errs);
      setErrors({...errors,...errs})
      
    })
    console.log('😡😡',errors);
  }
  return (
    <div>
      <h4>Note from State: {JSON.stringify(note)}</h4>
      <hr />
      <h4 className='bg-danger text-light'>{JSON.stringify(errors)}</h4>
      <form onSubmit={createNote}>
        <div className="form-group mb-3">
          <label>Title:</label>
          <input type="text" className='form-control' onChange={e=>setNote({...note,title:e.target.value})}
          value={note.title} />
          {/* {errors.title && <p>{errors.title.message}</p>} */}
        </div>
        <div className="form-group mb-3">
          <label>Content:</label>
          <textarea className='form-control' onChange={e=>setNote({...note,content:e.target.value})} value={note.content}></textarea>
        </div>
        <div className="form-group mb-3">
          <label>Is Important?</label>
          <input type="checkbox" className='form-check-input ms-3' onChange={e=>setNote({...note,isImportant:e.target.checked})}
          checked={note.isImportant}/>
        </div>
        <div className='text-center'>
          <button className='btn btn-outline-primary w-50'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NoteCreate