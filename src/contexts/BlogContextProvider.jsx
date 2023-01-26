import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext)
}

const BlogContextProvider = ({children}) => {
const [currentBlogs, setCurrentBlogs] = useState()


useEffect(() => {

}, [])

  return (
    <BlogContext.Provider value={{currentBlogs}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider