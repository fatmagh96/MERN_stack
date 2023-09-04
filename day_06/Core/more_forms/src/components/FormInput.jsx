import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import FormDisplay from './FormDisplay';

const FormInput = (props) => {
    const [firstName, SetfirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, SetlastName] = useState("");
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, Setpassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, SetconfirmPassword] = useState("");
    console.log(firstName);
    const handleFirstName = (e) => {
        SetfirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("first name not valid")
        }
        else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        console.log(e);
        SetlastName(e.target.value);
        // console.log('😡😡😡😡', e.target.value);
        // console.log('⏰⏰⏰', lastName);
        if (e.target.value.length < 2) {
            setLastNameError("last name not valid")
        }
        else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
        console.log(firstName)
        if (e.target.value.length < 5) {
            setEmailError("email must be at least 5 characters")
        }
        else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        Setpassword(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("password must be at least 8 characters")
        }
        else {
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) => {
        SetconfirmPassword(e.target.value);
        console.log(e.target.value);
        if (e.target.value != password) {
            setPasswordError("Password and Confirm Password dont match!")
        }
        else {
            setPasswordError("")
        }
    }
    return (
        <fieldset>
            <legend>---Form----</legend>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name:</Form.Label>
                    <p className='text-danger'>{firstNameError}</p>
                    <Form.Control onChange={(e) => handleFirstName(e)} value={firstName} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <p className='text-danger'>{lastNameError}</p>
                    <Form.Control type="text" placeholder="" onChange={(e) => handleLastName(e)} value={lastName} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <p className='text-danger'>{emailError}</p>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => handleEmail(e)} value={email} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <p className='text-danger'>{passwordError}</p>
                    <Form.Control type="password" onChange={(e) => handlePassword(e)} value={password} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => handleConfirmPassword(e)} value={confirmPassword} />
                </Form.Group>
            </Form>

            {/* <FormDisplay firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/> */}
        </fieldset>
    );
}

export default FormInput;