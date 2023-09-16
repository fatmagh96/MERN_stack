import React , {useState} from 'react'
import RegisterForm from '../components/Users/RegisterForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = ({baseUrl}) => {
    const [user, setUser] = useState({userName:"",email:"",password:"", confirmPassword:""})
    const navigate = useNavigate()
    const register = (e, newUser)=>{
        e.preventDefault();
        axios.post(baseUrl+'/register', newUser, {withCredentials:true})
        .then(serverResponse=> {
            console.log(serverResponse)
            navigate('/notes')
        })
        .catch(error=>console.log(error))
        
        // setUser({userName:"",email:"",password:"", confirmPassword:""})

    }
  return (
    <div>
        <RegisterForm user={user} setter={setUser} operation={register} test={"test"}/>
    </div>
  )
}

export default Register