import React, { createContext, useContext, useEffect, useState } from 'react'
import { readBlogs } from '../helpers/firebase';

const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext)
}

const BlogContextProvider = ({children}) => {
const [currentBlogs, setCurrentBlogs] = useState()


useEffect(() => {
  readBlogs(setCurrentBlogs)
}, [])

  return (
    <BlogContext.Provider value={{currentBlogs}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider