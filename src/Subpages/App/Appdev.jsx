import React, { useState } from "react";
import "./Appdev.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Side from "/anchor/assets/images/appdev-side.png";
import Android from "/anchor/assets/images/android.png";
import IOS from "/anchor/assets/images/ios.png";
import Cross from "/anchor/assets/images/cross.png";
import Projects from "../../Components/Projects/Projects.jsx";
import slider_info from "../../data/slider.js";
import Point from '/anchor/assets/images/web-point.png'
import insight_data from "../../data/insight.js";
import Ques from "../../Pages/Ques/Ques.jsx";
import Sideimage from '/anchor/assets/images/sideimage.png'
import Marquee from 'react-fast-marquee'
import Contact from "../../Components/Contact/Contact.jsx";



const Appdev = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav />
      <div className="appdev-top">
        <img
          className="appdev-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="appdev-cont">
          <div className="appdev-info">
            <h2>Mobile app development Company</h2>
            <p>
              Transform your ideas into intuitive mobile apps with our expert
              development services. We create user-friendly, high-performance
              applications tailored to your needs.
            </p>
          </div>

          <div className="appdev-btn">
            <button>
              Hire a developer
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="appdev-image">
          <img src={Side} alt="" />
        </div>
      </div>
      <div className="appdev-section">
        <div className="appdev-section-top">
          <h2>Tailored app solutions for all mobile platforms</h2>
          <p>
            We design and develop both consumer and enterprise applications of
            any scale, capable of growing with your user base. Our clients often
            evolve their products from MVPs to feature-rich apps serving
            millions.
          </p>
        </div>
      </div>

      <div className="appdev-tech-bottom">
        <div className="appdev-tech-cont">
          <img src={Android} alt="" />
          <h2>Android</h2>
          <p>
            Leveraging innovative concepts and data-driven insights, we develop
            high-performance Android apps that excel on Google Play and drive
            business transformation. We use <span>Java</span> and <span>Kotlin</span>  to create robust,
            scalable applications tailored to your needs.
          </p>
        </div>
        <div className="appdev-tech-cont">
          <img src={IOS} alt="" />
          <h2>iOS</h2>
          <p>
            Our expertise in iOS development has led to the creation of
            exceptional apps across various business niches, consistently
            featured on the home screens of satisfied users' iPhones and iPads.
            We use <span>Swift</span>  and  <span>Objective-C</span> to deliver seamless, high-quality
            experiences.
          </p>
        </div>
        <div className="appdev-tech-cont">
          <img src={Cross} alt="" />
          <h2>Cross-Platform</h2>
          <p>
            For complex projects, we utilize cross-platform technologies to
            maximize efficiency and reach. Our solutions, built with  <span>React</span>
            <span>Native</span>,  <span>Flutter</span>, and  <span>Xamarin</span>, offer reduced costs, quicker
            time-to-market, and broad platform compatibility.
          </p>
        </div>
      </div>
      <button type="button" className="appdev-tech-button">
     Let's Build an App <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>
      <Projects slide={slider_info}/>

      <div className="appdev-section-image">
        <div className="appdev-section-image-top">
          <h2>
          Comprehensive mobile development services from start to finish.
          </h2>
        </div>
      </div>

      <div className="appdev-tabs-container">
      <div className="appdev-line">
      <div className={activeTab === 'Tab1' ? 'appdev-circle active' : 'appdev-circle'}></div>
      <div className={activeTab === 'Tab2' ? 'appdev-circle active' : 'appdev-circle'}></div>
      <div className={activeTab === 'Tab3' ? 'appdev-circle active' : 'appdev-circle'}></div>
      <div className={activeTab === 'Tab4' ? 'appdev-circle active' : 'appdev-circle'}></div>
      <div className={activeTab === 'Tab5' ? 'appdev-circle active' : 'appdev-circle'}></div>
      <div className={activeTab === 'Tab6' ? 'appdev-circle active' : 'appdev-circle'}></div>
      </div>
      <div className="appdev-tabs">
        <div className="appdev-tab" onClick={() => handleTabClick('Tab1')}>
          <button className={activeTab === 'Tab1' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          Discovery & Research
          </button>
        </div>
        <div className="appdev-tab" onClick={() => handleTabClick('Tab2')}>
          
          <button className={activeTab === 'Tab2' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          UX/UI Design
          </button>
        </div>
        <div className="appdev-tab" onClick={() => handleTabClick('Tab3')}>
         
          <button className={activeTab === 'Tab3' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          Development
          </button>
        </div>
        <div className="appdev-tab" onClick={() => handleTabClick('Tab4')}>
          
          <button className={activeTab === 'Tab4' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          Quality Assurance
          </button>
        </div>
        <div className="appdev-tab" onClick={() => handleTabClick('Tab5')}>
         
          <button className={activeTab === 'Tab5' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          Launch
          </button>
        </div>
        <div className="appdev-tab" onClick={() => handleTabClick('Tab6')}>
         
          <button className={activeTab === 'Tab6' ? 'appdev-tab-title active' : 'appdev-tab-title'}>
          Maintenance & Support
          </button>
        </div>
      </div>
      <div className="appdev-tab-content">
        {activeTab === 'Tab1' && <div><p>We start by understanding your business needs, target audience, and project goals to create a solid foundation for your web development project. This phase includes market research, competitor analysis, and defining technical requirements.</p></div>}
        {activeTab === 'Tab2' && <div><p>Our design team crafts intuitive and visually compelling user interfaces, ensuring an engaging user experience across all devices. We prioritize usability, accessibility, and aesthetics to create a seamless journey for your users.</p></div>}
        {activeTab === 'Tab3' && <div><p>Our development team brings your vision to life with clean, efficient code. We build responsive, high-performance websites and web applications using the latest technologies, ensuring scalability and security.</p></div>}
        {activeTab === 'Tab4' && <div><p>We rigorously test your website or web application to ensure it meets the highest standards of quality. This includes functional testing, performance testing, security assessments, and cross-browser compatibility checks.</p></div>}
        {activeTab === 'Tab5' && <div><p>We handle all aspects of the launch, ensuring a smooth and successful deployment. This includes final testing, optimizing for speed, and setting up analytics to monitor performance post-launch.</p></div>}
        {activeTab === 'Tab6' && <div><p>Post-launch, we provide ongoing maintenance and support to ensure your website or web application continues to perform at its best. This includes regular updates, security monitoring, bug fixes, and performance optimization.</p></div>}
      </div>
    </div>
    <button type="button" className="appdev-tech-button">
     Hire app Developer <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="appdev-slider-bottom">
        <div className="appdev-slider-bottom-right">
        <h2>Providing Tailored mobile app solution for specific industries </h2>
        <img src={Point} alt="" />
        </div>
      </div> 
      <div className="appdev-bottom">
      <Ques in_data={insight_data} />
      </div>
      <button type="button" className="appdev-tech-button">
     Contact Us <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>
       
      <div className="appdev-section-one-image">
        <div className="appdev-section-image-one-top">
          <h2>
          Comprehensive mobile development services from start to finish.
          </h2>
          <img src={Sideimage} alt='' />
        </div>
        <div className="appdev-section-one-cont">
          <p>We lead with innovation, utilizing emerging technologies to drive the next generation of mobile app experiences.</p>
        </div>
      </div>

        <div className="appdev-section-bottom">
          <h2>Our Clients</h2>
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
        </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Appdev;
