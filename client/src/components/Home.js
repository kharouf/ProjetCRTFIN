import React from 'react'
import '../scss/home.css'
import Carousel from './Carousel'
import About from './About'
import Evenements from './Evenements'
import Comite from './Comite'
import Principes from './Principes'
import Programs from './Programs'
import Contact from './Contact'
import Footer from './Footer'





const Home = () => {

  return (
    <div className='CRT' >

      <Carousel />
      <About />
      <Evenements />
      <Comite />
      <Principes />
      <Programs />
      <Contact />
      <Footer />



    </div>
  )
}

export default Home