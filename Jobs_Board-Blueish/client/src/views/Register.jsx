import React , {useState} from 'react'
import RegisterForm from '../components/Users/RegisterForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = ({baseUrl}) => {
    const [user, setUser] = useState({userName:"",email:"",password:"", confirmPassword:""})
    const [errors,setErrors] = useState({userName:"",email:"",password:"", confirmPassword:""})
    const navigate = useNavigate()
    const register = (e, newUser)=>{
        e.preventDefault();
        axios.post(baseUrl+'register', newUser, {withCredentials:true})
        .then(serverResponse=> {
            console.log(serverResponse)
            navigate('/jobs')
        })
        .catch(error=>{
          console.log(error)
          const errs = {userName:"",email:"",password:"", confirmPassword:""}
          for (let key of Object.keys(error.response.data.errors)) {
              errs[key] = error.response.data.errors[key].message
            }
          setErrors({ ...errors, ...errs })
      })
        
        // setUser({userName:"",email:"",password:"", confirmPassword:""})

    }
  return (
    <div>
        <RegisterForm user={user} setter={setUser} operation={register} errors={errors}/>
    </div>
  )
}

export default Register