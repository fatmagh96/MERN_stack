import React from 'react'

const PersonCard= (props) => {
  return (
    <>
      
      <h1>{props.person.lastName}, {props.person.firstName}</h1>
      <p>Age: {props.person.age}</p>
      <p>Hair Color: {props.person.hair_color}</p>

    </>
  )
}

export default PersonCard