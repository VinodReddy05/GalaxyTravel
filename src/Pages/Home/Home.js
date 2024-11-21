import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import CallTOAction from './Components/CallTOAction'
import Faq from './Components/Faq'
import Footer from '../../Components/Footer/Footer'

import "./HomeStyle.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About heading="About us"/>
        <Services/>
        <CallTOAction/>
        <Faq/>
        <Footer/>

    </div>
  )
}

export default Home
