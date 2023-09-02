import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import FormDisplay from './FormDisplay';

function TextControlsExample() {
  const [firstName, SetfirstName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [confirmPassword, SetconfirmPassword] = useState("");
  console.log(firstName);
  return (
    <fieldset>
      <legend>---Form----</legend>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="email" placeholder="" onChange={ (e) => SetfirstName(e.target.value)} value={firstName} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="" onChange={ (e) => SetlastName(e.target.value)} value={lastName}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={ (e) => Setemail(e.target.value)} value={email}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={ (e) => Setpassword(e.target.value)} value={password}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" onChange={ (e) => SetconfirmPassword(e.target.value)} value={confirmPassword}/>
      </Form.Group>
    </Form>

    <FormDisplay firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
    </fieldset>
  );
}

export default TextControlsExample;