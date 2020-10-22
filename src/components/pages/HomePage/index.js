import React from 'react'
import Container from '../../layout/Container'
import Navbar from '../../Navbar'
import Intro from '../Intro'
import Header from '../../Header'

function HomePage() {
    return (
        <>
          <Intro />
          <Header />
          <Navbar />
          <Container />
        </>
    )
} 

export default HomePage
