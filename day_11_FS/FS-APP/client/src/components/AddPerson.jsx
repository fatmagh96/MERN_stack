import React, { useState } from 'react'
import axios from 'axios'

const AddPerson = (props) => {
  const [person, setPerson] = useState({firstName:"",lastName:"",age:1,isFunny:true})
  const formHandler = (e) => {
    e.preventDefault()
    console.log("SUBMITTED PERSON : ", person);
    axios.post('http://localhost:8000/api/people', person)
    .then(serverResponse => console.log(serverResponse))
    .catch(serverError => console.log(serverError))
    setPerson({firstName:"",lastName:"",age:1,isFunny:true})
  }
  return (
    <fieldset>
        <legend><h2>AddPerson</h2></legend>
        <h4>
          {JSON.stringify(person)}
        </h4>
        <form onSubmit={formHandler}>
          <p>First Name: <input type="text" onChange={e=>setPerson({...person,firstName:e.target.value})}
          value={person.firstName}/></p>
          <p>Last Name: <input type="text" onChange={e=>setPerson({...person,lastName:e.target.value})}
          value={person.lastName} /></p>
          <p>Age: <input type="number" onChange={e=>setPerson({...person,age:e.target.value})}
          value={person.age}/></p>
          <p>Is Funny: <input type="checkbox" onChange={e=>setPerson({...person,isFunny:e.target.checked})}
          checked={person.isFunny}/></p>
          <button>Submit</button>
        </form>
    </fieldset>
  )
}

export default AddPerson