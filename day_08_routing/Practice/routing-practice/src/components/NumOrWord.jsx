import React from 'react'
import { useParams } from 'react-router-dom'
import Number from './Number'
import Word from './Word'

const NumOrWord = () => {
    const {param} = useParams()
  return (
    <div>
        {isNaN(param)? <Word/>:<Number/>}
        
    </div>
  )
}

export default NumOrWord