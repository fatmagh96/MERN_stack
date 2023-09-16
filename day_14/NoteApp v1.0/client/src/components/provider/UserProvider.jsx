import React, {useState} from 'react'
import UserContext from '../context/UserContect'

const UserProvider = ({children}) => {
    const [userContext, setUserContext] = useState(null)
    const login = (userData) => {
        setUserContext(userData)
    }
    const logout = () => {
        setUserContext(null)
    }
  return (
    <UserContext.Provider value={{userContext,login,logout}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider