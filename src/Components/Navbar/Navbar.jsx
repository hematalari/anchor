import "./Navbar.css";
import React , {useState} from 'react';
import logo from "/assets/images/new-logo.png";
import {Link} from 'react-router-dom';
import { RiArrowDownSFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
const Nav = () => {
  const [menu, setMenu] = useState("home");
  const [color,setColor] = useState(false)
  const colorChange =()=>{
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }

    window.addEventListener('scroll', colorChange)

    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
  
    const toggleFirstDropdown = () => {
      setIsFirstOpen(!isFirstOpen);
      setIsSecondOpen(false); // Close the second dropdown if open
    };
  
    const toggleSecondDropdown = () => {
      setIsSecondOpen(!isSecondOpen);
      setIsFirstOpen(false); // Close the first dropdown if open
    };

  return (
    <nav className='Navbar'>
      <div className={color ? 'Nav-section Nav-section-bg':'Nav-section'}>
            <img src={logo} alt="" />
            <ul className='list'>
                <li className="nav-item active">
                    <Link to = '/anchor/' 
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li className="nav-item">
                <Link to = '/anchor/Industries' 
                onClick={() => setMenu("Industries")}
                className={menu === "Industries" ? "active" : ""}>Industries</Link>
                </li>
                <li className="nav-item">
                    <Link  onClick={toggleFirstDropdown} >Insights <RiArrowDownSFill  className="icons"/> </Link>
                   {isFirstOpen && (
                      <div className="dropdown-menu">
                        <Link to = '/anchor/Insights' onClick={() => setMenu("Insights")} className="dropdown-item">Insights into Artificial Intelligence</Link>
                        <Link to = '/anchor/Saas' onClick={() => setMenu("Saas")} className="dropdown-item">Software as a Service (SaaS)</Link>
                      </div>
                     )}
                </li>
                <li className="nav-item">
                <Link className="dropdown-button" onClick={toggleSecondDropdown}>Services <RiArrowDownSFill  className="icons"/> </Link>
                {isSecondOpen && (
                      <div className="dropdown-menu">
                        <Link to = '/anchor/Appdev' onClick={() => setMenu("Appdev")} className="dropdown-item">Mobile App Development</Link>
                        <Link to = '/anchor/Digital' onClick={() => setMenu("Digital")} className="dropdown-item">Digital Marketing</Link>
                        <Link to = '/anchor/Agumented' onClick={() => setMenu("Agumented")} className="dropdown-item">Agumented Reality</Link>
                        <Link to = '/anchor/Web' onClick={() => setMenu("Web")} className="dropdown-item">Web Development & Redesinging</Link>
                        <Link to = '/anchor/Design' onClick={() => setMenu("Design")} className="dropdown-item">Designing</Link>
                        <Link to = '/anchor/Logo' onClick={() => setMenu("Logo")} className="dropdown-item">Logo Designing</Link>
                        <Link to = '/anchor/Cloud' onClick={() => setMenu("Cloud")} className="dropdown-item">Cloud Consulting</Link>
                        <Link to = '/anchor/Iot' onClick={() => setMenu("Iot")} className="dropdown-item">IOT Consulting</Link>
                        <Link to = '/anchor/Saas' onClick={() => setMenu("Saas")} className="dropdown-item">Hosting Service</Link>
                        <Link to = '/anchor/Smart' onClick={() => setMenu("Smart")} className="dropdown-item">Smart Contract</Link>
                        <Link to = '/anchor/Embed' onClick={() => setMenu("Embed")} className="dropdown-item">Embedded Software</Link>
                        <Link to = '/anchor/Techno' onClick={() => setMenu("Techno")} className="dropdown-item">Technology Consulting</Link>
                      </div>
                     )}
                </li>
                <li className="nav-item">
                <Link to = '/anchor/About' 
                onClick={() => setMenu("About")}
                className={menu === "About" ? "active" : ""}>About</Link>
                </li>
                <li className="nav-item">
                <Link to = '/anchor/Career' 
                onClick={() => setMenu("Career")}
                className={menu === "Career" ? "active" : ""}>Career</Link>
                </li> 
            </ul>
            <Link to = '/anchor/Contact' 
                onClick={() => setMenu("contact")}
                className={menu === "contact" ? "active" : ""}>Contact</Link>
            </div>
    </nav>
  )
}

export default Nav