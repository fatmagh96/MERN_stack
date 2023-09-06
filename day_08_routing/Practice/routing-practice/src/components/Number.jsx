import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {param} = useParams()
    console.log(param)
  return (
    <div>
        <h2>The number is : {param}</h2>
    </div>
  )
}

export default Number