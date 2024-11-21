import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Form from './Component/Form'

import "./ContactStyle.css"

const Contact = () => {
  return (
    <div>
    <Navbar/>
   <Header heading="Contact page" /> {/* Here we are using the props */}
   <Form/>
   <Footer/>
    </div>
  )
}

export default Contact
