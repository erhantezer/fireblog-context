import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { useAuth } from '../contexts/AuthContextProvider';
import {addBlog} from "../helpers/firebase";
import { toastSuccessNotify } from '../helpers/toastify';


const NewBlog = () => {
const {currentUser} = useAuth()
const [newBlog, setNewBlog] = useState({
  author: currentUser.email,
  title: "",
  content: "",
  get_comment_count: 0,
  get_like_count: 0,
  image: "",
  published_date: Date.now(),
  })
  const navigate = useNavigate();

const newBlogSubmit = (e) => {
  e.preventDefault()
  try {
    addBlog(newBlog);
    navigate("/");
    toastSuccessNotify("Blog added successfully!");
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div style={{ marginTop: 90 }}>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        newBlogSubmit={newBlogSubmit}
      />
    </div>
  )
}

export default NewBlog