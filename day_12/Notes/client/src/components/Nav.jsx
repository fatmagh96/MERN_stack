import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className='border-bottom border-3 border-dark mb-3'>
        <div className="text-center mb-3">
            <h1>🗒️Notes🗒️</h1>
        </div>
        <div className="d-flex justify-content-around">
            <Link to={'/notes'} className='h2'>Home</Link>
            <Link to={'/notes/new'} className='h2'>Create</Link>
        </div>
    </div>
  )
}

export default Nav