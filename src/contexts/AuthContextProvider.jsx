
import { createContext, useContext, useEffect, useState } from 'react'
import { userObserver } from '../helpers/firebase';



const AuthContext = createContext();

//! custom hook 
export const useAuth = () => {
  return useContext(AuthContext)
}


const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

//! kullanıcı bilgilerini ilk açıldığında  render etmesi için useEffect içinde koyulmuştur
  useEffect(() => {
    userObserver(setCurrentUser);
  }, [])


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider