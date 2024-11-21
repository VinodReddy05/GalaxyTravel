import React from 'react'
import { Link } from 'react-router-dom'

import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <h1>GLX TRVL</h1>
        <div className="links">
        <h3>Useful Links</h3>
         <div className="link">
         <Link to="/">Home</Link>
        <Link to="/Traning">Traning</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Contact">Contact</Link>
         </div>
        </div>
      
           
           <div className="social">
            <p><TiSocialFacebookCircular style={{ fontSize: '32px' }} /></p>
            <p><TiSocialLinkedin  style={{ fontSize: '36px' }} /></p>
            <p><TiSocialTwitter  style={{ fontSize: '36px' }} /></p>
            <p><SlSocialInstagram  style={{ fontSize: '26px' }} /></p>

           </div>

    </footer>
  )
}

export default Footer
