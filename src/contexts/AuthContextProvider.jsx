import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../helpers/firebase';


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