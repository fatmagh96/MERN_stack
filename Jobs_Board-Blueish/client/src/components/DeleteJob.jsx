import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteJob = ({baseUrl, id , style, isDeleted}) => {
    console.log(style);
    const navigate = useNavigate()
    const deleteJob = (id) => {
        axios.delete(baseUrl+'jobs/'+id, { withCredentials: true })
        .then(serverResponse=>{
            console.log(serverResponse);
            isDeleted(true);
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
  return (
    <button className={style} onClick={()=>deleteJob(id)}>Delete</button>
  )
}

export default DeleteJob