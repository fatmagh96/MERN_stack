import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = ({message, author, setter, operation, error}) => {
  const navigate = useNavigate()
  const formHandler = (e) =>{
    e.preventDefault()
    console.log('*****', author);
    operation(author)
  }

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <h5 className='my-3'>{message}</h5>
        <form onSubmit={formHandler}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" className="form-control mb-2" onChange={e=>setter({name:e.target.value})} value={author.name} />
                {error && <span className='text-danger h5'> {error}</span>}
            </div>
            <div className='mt-3'>
                <button className='btn btn-primary me-3'>Submit</button>              
                <Link className='btn btn-secondary' to={'/'}>Cancel</Link>
            </div>
        </form>
    </div>
  )
}

export default AuthorForm