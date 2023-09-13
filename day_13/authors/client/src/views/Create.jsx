import React, { useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = ({baseUrl}) => {
    const message = "Add a new author:"
    const [author, setAuthor] = useState({name:""})
    const [error,setError] = useState("")
    const navigate = useNavigate()
    console.log(baseUrl+'authors');
    const createAuthor = (author) =>{
        console.log('****', author);
        axios.post(baseUrl+'authors', author)
        .then(serverResponse=>{
            console.log(serverResponse,'----');
            navigate('/')
        })
        .catch(serverError=>{
            console.log(serverError.response.data.name,'😡😡😡')
            setError(serverError.response.data.name.message)
    })
    }
  return (
    <div>
        <AuthorForm message={message} operation={createAuthor} setter={setAuthor} author={author} error={error}/>
    </div>
  )
}

export default Create