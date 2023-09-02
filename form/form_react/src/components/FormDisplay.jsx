import React from 'react'

const FormDisplay = (props) => {
  return (
    <fieldset>
        <legend>---Display----</legend>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirmPassword}</p>
    </fieldset>
  )
}


export default FormDisplay