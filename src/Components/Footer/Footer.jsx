import React from 'react'
import './Footer.css'
import Logo from '/anchor/assets/images/new-logo.png'
import { FaFacebook, FaYoutube, FaInstagramSquare, FaLinkedin,FaRegCopyright} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="main-footer">
    <div className='footer'>
        <div className="footer-top">
            <img src={Logo} alt='' />
            <p>We are an enterprise software development company that is inspired by the future</p>
        </div>
        <div className="footer-center">
            <p><span>Office: </span><br/>292 - 294 Plashet Grove, East Ham, London, England,E6 1DQ. <br/>
           <span>Address :</span> <br/>Vaishnavi's Cynosure,Gachibowli, Hyderabad, Telangana 500032 
            </p>
        <div className="footer-center-cont">
            <p>contact@anchorinformatics.co.uk</p>
            <p>Mobile: +44 7438 846089 <br /> LandLine :+020 3490 9639</p>
            <div className="social-icons">
            <FaFacebook />
            <FaYoutube />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaSquareXTwitter />
            </div>
        </div>
        </div>
        <div className="footer-bottom">
        <p><FaRegCopyright /> 2024 Anchor Informatics. All rights reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Footer