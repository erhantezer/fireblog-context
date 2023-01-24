import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext();

//! custom hook 
export const useAuth = () => {
  return useContext(AuthContext)
}


const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(false)




  return (
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider