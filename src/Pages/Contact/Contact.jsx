import React from 'react'
import Nav from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Image from '/assets/images/footer.webp'
import { TiLocationOutline } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";
import { PiClockClockwiseFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div>
    <Nav />
    <div className="cont">
      <img src={Image} alt='' style={{width:"100%"}}/>
      <div className="contact-form-section" style={{marginTop:"-600px"}}>
          <div className="contact-form-container" style={{backgroundColor:'transparent'}}>
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
    </div>
    <Footer />
    </div>
  )
}

export default Contact