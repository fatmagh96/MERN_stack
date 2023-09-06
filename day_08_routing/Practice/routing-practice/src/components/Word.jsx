import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    const {param, text, bg} = useParams()
  return (
    <div style={{backgroundColor:bg, color:text }}> 
    <hr />
        <h2 >The word is: {param}</h2>
        <hr />
    </div>
  )
}

export default Word