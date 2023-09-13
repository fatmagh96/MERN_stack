import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllAuthors = ({authors, setAuthors}) => {
    const deleteNote = (id) => {
        console.log("AUTHOR ID = ",id, "WILL Be deleted");
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=> {
          console.log(response)
          const filteredAuthors = authors.filter(author => author._id != id)
          setAuthors(filteredAuthors)
        })
        .catch(error => console.log(error))
      }
  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Avaliable</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author=>
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}><button className='btn btn-warning me-3'>Edit</button></Link>
                            <button className='btn btn-danger' onClick={()=>deleteNote(author._id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default AllAuthors