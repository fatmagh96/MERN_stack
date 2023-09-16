import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from './context/UserContect'



const Nav = ({baseUrl}) => {
    const navigate = useNavigate()
    const {userContext, login, logout:userLogout} = useContext(UserContext)
    // if(!userContext){
    //     navigate('/')
    // } 
    console.log("INFOFORMATION FROM CONTEXT : ", userContext, login, userLogout );
    const logout = () => {
        console.log("logout");
        axios.post(baseUrl+'/logout',{},{withCredentials:true})
        .then(serverResponse=>{
            console.log(serverResponse);
            navigate('/login')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className=' border-bottom  border-3 border-dark mb-5'>
            <div className='text-center mb-3 '>
                <h1>Notes 📝</h1>
            </div>
            <div className="d-flex justify-content-around">
                <Link to={'/notes'} className='h2'>Home</Link>
                <Link to={'/notes/new'} className='h2'>Create</Link>
                <Link className='text text-primary h2'
                onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}

export default Nav