import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from './context/UserContext'

const Nav = ({baseUrl}) => {
    const navigate = useNavigate()
    const {userContext, login, logout:userLogout} = useContext(UserContext)
    // i dont konw why this doesnt work (i think because there is a navigate to login in the logout function)
    // if(!userContext){
    //     navigate('/')
    // } 
    // ---------------------------
    console.log("INFOFORMATION FROM CONTEXT : ", userContext, login, userLogout );
    const logout = () => {
        console.log("logout");
        axios.post(baseUrl+'logout',{},{withCredentials:true})
        .then(serverResponse=>{
            console.log(serverResponse);
            navigate('/login')
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <div className="row">
            <h1 className='col-5'>Jobs Board</h1>
            <div className="d-flex col-5 align-items-center justify-content-around">
                <Link to={'/'}>Register</Link>
                <Link to={'/login'}>Login</Link>
                <Link onClick={logout}>Logout</Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Nav