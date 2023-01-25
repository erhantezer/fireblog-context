import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'

const PrivateRouter = () => {
  const {currentUser} = useAuth()
  return (
    currentUser ? <Outlet/> : <Navigate to="/" replace/>
  )
}

export default PrivateRouter