import React from 'react'
import "./Header.css"
import heroimg from "../../assets/Heroimg.jpg"

//we will not use background properties in css we use only inline css\
//because image will access only in this header


const Header = ({ heading }) => {
  return (
    <section className="header" style={{ backgroundImage: `url(${heroimg})`, backgroundSize: "cover", backgroundPosition: "fixed" }} >
      <h1>{heading}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, assumenda?</p>
    </section>
  )
}

export default Header
