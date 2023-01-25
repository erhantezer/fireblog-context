
import { createContext, useContext, useEffect, useState } from 'react'



const AuthContext = createContext();

//! custom hook 
export const useAuth = () => {
  return useContext(AuthContext)
}


const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState()


  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider