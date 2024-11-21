import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa"
import {useState} from "react";

const Navbar = () => {

  const [click, setClick] = useState(false) // it handles the components when we performing an action on it 
  const handleclick = () => {
    setClick(!click)
  };

  const [color,setColor] =useState(false)
  const handleColor =()=>{
    if(window.scrollY >=200){  // it checks the screen size whether is greater than 200px 0r not
      setColor(true);
    }else{
    setColor(false); 
    }
  }
  
  window.addEventListener("scroll",handleColor) //listen the color which we are applying


  return (
    <nav className={color ? "color":""}> {/* //ternerary operator */}
      <div className="logo">
        <h1>GLX TRVL</h1>
      </div>
      <div className={ click ? "menu active" : "menu"}>
        <Link to='/'>Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/traning">Traning</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={handleclick}>
        {  
          click ?
           <FaTimes style={{ color: "white" }} size={25} /> 
          : <FaBars style={{ color: "white" }} size={25} />
        }
      </div>

    </nav>

  )
}

export default Navbar
