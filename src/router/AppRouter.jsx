
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Register from '../pages/Register'
import Details from '../pages/Details'
import PrivateRouter from './PrivateRouter'
import Profile from '../pages/Profile'
import UpdateBlog from '../pages/UpdateBlog'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='about' element={<About/>} />
        <Route element={<PrivateRouter/>} >
          <Route path='newblog' element={<NewBlog/>} />
          <Route path='detail/:id' element={<Details/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='update-blog/:id' element={<UpdateBlog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter