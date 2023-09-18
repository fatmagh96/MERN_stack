import React, { useState } from 'react'
import LoginForm from '../components/Users/LoginForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({baseUrl}) => {
    const [user, setUser] = useState({email:"",password:""})
    const navigate = useNavigate()
    const login = (e, loginUser) => {
        e.preventDefault()
        console.log("login user");
        console.log(loginUser);
        axios.post(baseUrl+'login',loginUser, {withCredentials:true})
        .then(serverResponse => {
            console.log(serverResponse)
            navigate('/jobs')
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <LoginForm user={user} setter={setUser} operation={login}/>
    </div>
  )
}

export default Login