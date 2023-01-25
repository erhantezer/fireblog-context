import { Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <Grid container  spacing={2} m="auto">
      <Grid  item xs={6} md={8}>
        <BlogCard/>
      </Grid>
    </Grid>
  )
}

export default Dashboard