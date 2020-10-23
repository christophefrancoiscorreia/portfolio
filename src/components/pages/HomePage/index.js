import React from 'react'
import Container from './Container'
import Navbar from '../../Navbar'
import Intro from '../Intro'
import PostFeatured from './posts/PostFeatured'

function HomePage() {  
  return (
      <>
        <Intro />
        <Navbar /> 
        <Container /> 
      </>
  )
} 

export default HomePage
