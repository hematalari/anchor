import React from "react";
import "./Saas.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import { FaLongArrowAltRight } from "react-icons/fa";
import saas from "/assets/images/Saas.gif";
import Insight from "/assets/images/insights.jpg";
import Cds from '/assets/images/csd.png'
import ImageBox from "../Hover/Hover";
import Saasimg from '/assets/images/saasimg.jpeg'
import { SiTicktick } from "react-icons/si";
import is from '/assets/images/IS.png'
import dsc from '/assets/images/Dsc.png'

const Saas = () => {
  return (
    <div>
      <Nav />
      <div className="saas-top">
        <img
          className="insights-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="saas-cont">
          <div className="saas-info">
            <h2>Insights Software as a Service</h2>
            <h3>Lorem ipsum odor amet, consectetuer adipiscing elit.</h3>
            <p>
              vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae donec velit neque
            </p>
          </div>
          <div className="saas-btn">
            <button>
              Talk to our Experts <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="saas-image">
          <img src={saas} alt="" />
        </div>
      </div>
      <div className="saas-section">
        <div className="saas-section-top">
          <h2>Software as a Service</h2>
          <div className="saas-section-p-cont">
          <p>
            SaaS is a cloud-based software delivery model where applications are
            hosted by a service provider and made available to customers over
            the internet. Highlight its benefits like cost-efficiency,
            scalability, and ease of access.
          </p>
          </div>
        </div>
        <div className="saas-section-center">
            <div className="saas-section-box">
               <div className="saas-img-container">
                <div className="saas-img-box">
                <img src={Cds} alt='' />
                <h2>Customized SaaS Development</h2>
                </div>
               </div>
               <div className="saas-img-container">
                <img src={is} alt='' />
                <h2>Integration Services</h2>
               </div>
               <div className="saas-img-container">
                <img src={dsc} alt='' />
                <h2>Data Security and Compliance</h2>
               </div>
               <div className="saas-img-content">
               <p className="saas-item" >At Anchor Informatics, we craft bespoke SaaS solutions tailored to meet the specific needs of industries like e-commerce and healthcare, driving efficiency and growth with precision.</p>
               </div>
            </div>
        </div>
        <div className="saas-section-bottom">
            <div className="saas-section-btm-top">
                <img src={Saasimg} alt='' />
            </div>
            <div className="saas-section-btm-center">
                <h2>Empower Your Business with Tailor-Made SaaS Solutions</h2>
                <p> At Anchor Informatics, we specialize in developing innovative, scalable SaaS applications designed to meet the unique needs of your industry. Transform your operations with our secure, customized solutions that drive growth and efficiency, all seamlessly integrated into your existing systems.</p>
            </div>
        </div>
      </div>
      <div className="saas-section-bottom-bottom">
        <div className="saas-section-bottom-bottom-top">
            <h2>Why Choose Anchor Informatics for SaaS?</h2>
            <p><SiTicktick style={{color:'#FFDB3B'}}/>Experience and Expertise</p>
            <p><SiTicktick style={{color:'#FFDB3B'}}/>Customer-Centric Approach</p>
            <p><SiTicktick style={{color:'#FFDB3B'}}/>Support and Maintenance</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Saas;
