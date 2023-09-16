import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => {
  return (
    <div className='mt-3'>
        <h1>400 </h1>
         <h3>Bad Request</h3>   
        <p>
            We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?
        </p>
        <Link className='btn btn-primary' to={'/new'}>Create an Author</Link>
    </div>
  )
}

export default ErrorPage