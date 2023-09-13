import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AllAuthors from '../components/AllAuthors'
import { Link } from 'react-router-dom'

const Home = ({baseUrl}) => {
    const [authors, setAuthors] = useState([])
    useEffect(()=>{
        axios.get(baseUrl+'authors')
        .then(serverResponse=>{
          console.log(serverResponse);
          setAuthors(serverResponse.data)
        })
        .catch(serverError=>console.log(serverError))
    },[])
  return (
    <div>
      <Link to={'/new'}>Add an author</Link>
        <h3>We have Quotes by:</h3>
        <AllAuthors authors={authors} setAuthors={setAuthors}/>


    </div>
  )
}

export default Home