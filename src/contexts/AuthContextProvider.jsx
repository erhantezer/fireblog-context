import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../helpers/firebase';


const AuthContext = createContext();

//! custom hook 
export const useAuth = () => {
  return useContext(AuthContext)
}


const AuthContextProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(false)


const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

const logout = () => {
  signOut(auth);
}


const loginWithGoogle = () => {

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error)
  });
}


useEffect(() => {
  setLoading(true)
   const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user)
    } else {
      alert("no users")
    }
  });
  return unsubscribe
}, [])

const value = {
  currentUser,
  createUser,
  login,
  logout,
  loginWithGoogle,
};

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider