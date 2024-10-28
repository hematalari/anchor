import React from 'react'
import './Industries.css'
import Nav from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Image from "/assets/images/industry.jpeg";
import { SiTicktick } from "react-icons/si";
import Marquee from 'react-fast-marquee'
import Contact from '../../Components/Contact/Contact';
import { TiLocationOutline } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";
import { PiClockClockwiseFill } from "react-icons/pi";


const Industires = () => {
  return (
    <div>
      <Nav />
        <div className="industries-top">
        <img className="indus-bg-img" style={{ width: "100%", height:"550px" }} src={Image} alt="" />
        <div className="indus-cont">
          <div className="indus-info">
          <h2>Industries</h2>
          <h3>Your accountant should understand your industry.</h3>
          <p>vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque</p>
          </div>
        </div>
        </div>
        <div className="industries-section">
        <div className="industries-sec-top">
          <div className="indus-sec-right">
              <h2>Private Clients</h2>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra blandit curabitur habitasse varius eros arcu velit torquent.</p>
              <div className="indus-sec-list">
                <ul>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
              </div>
          </div>
          <div className="indus-sec-left">
          </div>
        </div> 

        <div className="industries-sec-center">
        <div className="indus-sec-center-right">
        </div>
          <div className="indus-sec-center-left">
              <h2>Entrepreneurs</h2>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra blandit curabitur habitasse varius eros arcu velit torquent.</p>
              <div className="indus-sec-list">
                <ul>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
              </div>
          </div>
        </div>

        <div className="industries-sec-bottom">
          <div className="indus-sec-bottom-right">
              <h2>Professional Firms</h2>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra blandit curabitur habitasse varius eros arcu velit torquent.</p>
              <div className="indus-sec-bottom-list">
                <ul>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li><SiTicktick style={{color:"green"}}/> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
              </div>
          </div>
          <div className="indus-sec-bottom-left">
          </div>
        </div> 
        </div>
        <div className="industries-container">
          <p>Trusted by the world’s fastest growing companies</p>
          </div>
          <div className='company-scroll'>
           <Marquee speed="100" direction="left" height="300px" width="100%" >
            <div className="Scroll-text">
            <div className="Scroll-text text1">
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
            </div>
            <div className="Scroll-text text2">
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
            </div>
            <div className="Scroll-text text3">
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
            </div>
            <div className="Scroll-text text4">
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
                <span>HEMISFERIO</span>
            </div>
            </div>
           </Marquee>
        </div>
        <div className="contact-form-section">
          <div className="contact-form-container">
          <div className="contact-form-right">
            <h2>Get a personal consultation.</h2>
           <span><TiLocationOutline className='icon'/>Location </span>
           <p>Head-Office :184 Heigham Road LondonE6 2JH U.K. <br />  
            Branch-Office : Vaishnavi's Cynosure,Gachibowli, Hyderabad, Telangana 500032</p>
           <span><IoIosContact  className='icon' />Contact</span> 
           <p>+44 7438 846089<br />  
            rafi@anchorinformatics.com</p>
           <span><PiClockClockwiseFill  className='icon' />Open Hours</span>
           <p>Monday - Friday: 9am - 6pm</p>
          </div>
          <div className="cont-form">
          <form>
          <div className="form-cont">
            <label htmlFor="">Name*</label><br />
            <input
          type="text"
          id="name"
          name="name"
          required
        />
        </div>
        <div className="form-cont">
            <label htmlFor="">Email*</label><br />
            <input
          type="email"
          id="email"
          name="email"
          required
        />
         </div>
         <div className="form-cont">
            <label htmlFor="">Phone.no*</label><br />
            <input
          type="tel"
          id="phone"
          name="phone"

        />
         </div>
         <div className="form-cont">
            <label htmlFor="">How can we help you?</label><br />
            <textarea
          id="projectInfo"
          name="projectInfo"
          required
        ></textarea>
         </div>
          </form>
          <button type='submit' className='form-cont-btn'>Request a call</button>
          </div>
          </div>
        </div>
        <Contact />
      <Footer />
    </div>
  )
}

export default Industires