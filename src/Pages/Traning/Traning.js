import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import About from "../Home/Components/About"



const Traning = () => {
  return (
    <>
   <Navbar/>
   <Header heading="Traning page" /> {/* Here we are using the props */}
   <About heading="Traning"/>
   <Footer/>
    </>
  )
}

export default Traning

