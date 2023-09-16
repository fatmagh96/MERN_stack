import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'

const Update = ({ baseUrl }) => {
    const message = "Edit this author:"
    const [author, setAuthor] = useState({ name: "" })
    const [error, setError] = useState("")
    const [err, setErr] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(() => {
        axios.get(baseUrl + 'authors/' + id)
            .then(serverResponse => {
                console.log(serverResponse);
                setAuthor(serverResponse.data)
            })
            .catch(serverError => {
                console.log(serverError)
                setErr(true)
            })
    }, [])
    const updateAuthor = (author) => {
        console.log('****', author);
        axios.put(baseUrl + 'authors/' + id, author)
            .then(serverResponse => {
                console.log(serverResponse, '----');
                navigate('/')
            })
            .catch(serverError => {
                console.log(serverError.response.data.errors.name.message, '😡😡😡')
                setError(serverError.response.data.errors.name.message)
            })
    }
    if (err) {
        return <ErrorPage />
    }
    return (
        <div>
            <AuthorForm message={message} operation={updateAuthor} setter={setAuthor} author={author} error={error} />
        </div>
    )
}

export default Update