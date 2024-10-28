import React, { useState } from "react";
import "./Iot.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Side from "/assets/images/iot.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Iot = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const slides = [
    {
      src: '/anchor/assets/images/slide-img1.jpeg',
      title: 'Advanced Cloud Migration for Fintech Innovator',
      description: 'Seamless cloud migration for a leading fintech company, enhancing scalability and performance.',
    },
    {
      src: '/anchor/assets/images/slide-img2.jpeg',
      title: 'Secure Data Lake Implementation for Healthcare Provider',
      description: 'Implemented a secure data lake solution for a healthcare provider to enhance data integration and protection.',
    },
    {
      src: '/anchor/assets/images/slide-img3.jpeg',
      title: 'Secure Data Lake Implementation for Healthcare Provider',
      description: 'Deployed a secure data lake for a healthcare provider to streamline data management and ensure stringent security and compliance.',
    },
    {
      src: '/anchor/assets/images/slide-img4.jpeg',
      title: 'Secure Data Lake Implementation for Healthcare Provider',
      description: 'Created a secure data lake for a healthcare provider, ensuring robust data integration and compliance with privacy regulations.',
    },
    {
      src: '/anchor/assets/images/slide-img5.jpeg',
      title: 'AI Solutions for E-Commerce Growth',
      description: 'Integrating AI to boost e-commerce platforms, improving customer experience and operational efficiency.',
    },
    {
      src: '/anchor/assets/images/slide-img6.png',
      title: 'Blockchain Innovation in Healthcare',
      description: 'Pioneering blockchain solutions for secure, efficient healthcare data management.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div>
      <Nav />
      <div className="iot-top">
        <img
          className="iot-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="iot-cont">
          <div className="iot-info">
            <h2>IoT Design and Advisory Solutions</h2>
            <p>
              Through our IoT design and advisory solutions, we assist
              businesses in gathering sensor data, processing it with AI
              algorithms, delivering actionable insights to users in a
              user-friendly format, and managing interconnected devices.
            </p>
          </div>

          <div className="iot-btn">
            <button>
              Contact IoT developers
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="iot-image">
          <img src={Side} alt="" />
        </div>
      </div>
      <div className="iot-section">
        <div className="iot-section-top">
          <h2>
            Comprehensive IoT consulting and software development services
          </h2>
          <p>
            Anchor Informatics Ltd. delivers IoT application development
            services to forward-thinking startups aiming to build integrated
            software ecosystems for new connected devices. We also partner with
            enterprises, healthcare providers, educational institutions, and
            non-profit organizations exploring IoT possibilities. Our expertise
            in Internet of Things development encompasses:
          </p>
        </div>
      </div>

      <div className="iot-tech-bottom">
        <div className="iot-tech-cont">
          <h2>Embedded IoT solutions</h2>
          <p>
            We develop and integrate embedded IoT components, including
            middleware, SDKs, device drivers, HMIs, and custom OS solutions
            based on Linux Kernel and AOSP, to ensure your IoT devices integrate
            seamlessly with your IT ecosystem.
          </p>
        </div>
        <div className="iot-tech-cont">
          <h2>IoT Cloud Solutions and Analytics</h2>
          <p>
            We craft bespoke IoT cloud solutions using AWS, Microsoft Azure, and
            Google Cloud, selecting the most suitable tech stack and
            architecture. Our services include aggregating sensor data, applying
            AI models, and displaying insights through interactive cloud
            dashboards.
          </p>
        </div>
        <div className="iot-tech-cont">
          <h2>IoT Mobile Application Development</h2>
          <p>
            We design mobile apps that enable efficient management and operation
            of IoT systems. Our development focuses on reliable,
            energy-efficient protocols, biometric security features, and backend
            performance optimization.
          </p>
        </div>
      </div>
      <button type="button" className="iot-tech-button">
        Create custom IoT applications
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="iot-section-two-image">
        <div className="iot-section-image-two-top">
          <h2>Spotlight on Internet of Things Solutions</h2>
        </div>
        <div className="iot-section-two-cont">
          <p>
            As an established IoT development and consulting firm, Anchor
            Informatics Ltd. boasts extensive experience in crafting reliable
            connected solutions for both enterprise and consumer markets. We
            specialize in:
          </p>
        </div>
      </div>

      <div className="iot-sec-center">
        <div className="iot-sec-cont">
          <p>
            <span>Connected Home Systems:</span> Collaborate with Anchor
            Informatics Ltd. to build a seamless software ecosystem for your
            connected home solutions. We handle everything from smart HVAC units
            and lighting to security systems and home appliances, integrating
            them with voice assistants and enabling AI-powered features.
          </p>
        </div>
        <div className="iot-sec-cont">
          <p>
            <span>AHealthcare IoT Solutions:</span> We partner with healthcare
            providers, biotech firms, and digital health innovators to develop
            smart hospital systems, remote patient monitoring tools, and
            advanced health analytics platforms, transforming patient data into
            actionable insights for improved care.
          </p>
        </div>
        <div className="iot-sec-cont">
          <p>
            <span>Wearable Device Applications:</span> Our team specializes in
            creating apps for wearable technology, connecting devices with their
            respective hardware and software components, and establishing a
            robust back-end for device management. Our expertise includes
            activity trackers, health monitors, and pet IoT solutions.
          </p>
        </div>
        <div className="iot-sec-cont">
          <p>
            <span>Industrial Connectivity Solutions :</span> We craft embedded
            applications for industrial equipment, offer real-time inventory
            tracking with beacons and RFID, and build comprehensive data
            ecosystems for factories, focusing on high performance, continuous
            availability, and exceptional user experience.
          </p>
        </div>
      </div>
      <button type="button" className="iot-tech-button">
        Create custom IoT applications
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="iot-section-one-image">
        <div className="iot-section-image-one-top">
          <h2>IoT Solution Design and Execution Pathway</h2>
        </div>
        <div
          className="iot-section-one-cont"
          style={{ backgroundColor: "#FFF4C5", color: "black" }}
        >
          <p>
            With over 5 years of expertise in IoT consulting and development, we
            have crafted a tailored and efficient process to bring your IoT
            concept to life. Here’s our approach to turning your vision into a
            successful product:
          </p>
        </div>
      </div>

      <div className="iot-tabs-container">
        <div className="iot-tabs-section">
          <div className="iot-line">
            <div
              className={activeTab === "Tab1" ? "circle active" : "circle"}
            ></div>
            <div
              className={activeTab === "Tab2" ? "circle active" : "circle"}
            ></div>
            <div
              className={activeTab === "Tab3" ? "circle active" : "circle"}
            ></div>
            <div
              className={activeTab === "Tab4" ? "circle active" : "circle"}
            ></div>
            <div
              className={activeTab === "Tab5" ? "circle active" : "circle"}
            ></div>
          </div>
          <div className="iot-tabs">
            <button
              className={
                activeTab === "Tab1" ? "iot-tab-title active" : "iot-tab-title"
              }
              onClick={() => handleTabClick("Tab1")}
            >
              IoT Strategy and Planning
            </button>
            <button
              className={
                activeTab === "Tab2" ? "iot-tab-title active" : "iot-tab-title"
              }
              onClick={() => handleTabClick("Tab2")}
            >
              Prototype Creation
            </button>
            <button
              className={
                activeTab === "Tab3" ? "iot-tab-title active" : "iot-tab-title"
              }
              onClick={() => handleTabClick("Tab3")}
            >
              MVP Deployment and Evaluation
            </button>
            <button
              className={
                activeTab === "Tab4" ? "iot-tab-title active" : "iot-tab-title"
              }
              onClick={() => handleTabClick("Tab4")}
            >
              Scalability and Expansion
            </button>
            <button
              className={
                activeTab === "Tab5" ? "iot-tab-title active" : "iot-tab-title"
              }
              onClick={() => handleTabClick("Tab5")}
            >
              Comprehensive IoT Integration
            </button>
          </div>
        </div>
        <div className="iot-tab-content">
          {activeTab === "Tab1" && (
            <div>
              Define the IoT vision, assess needs, and develop a strategic plan
              aligned with business goals.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Develop a Minimum Viable Product (MVP) to validate concepts and
              refine the IoT solution based on initial feedback.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              Launch the MVP, conduct thorough testing, and gather performance
              data to ensure functionality and effectiveness.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Enhance and scale the IoT solution to accommodate growing needs
              and integrate with additional systems.
            </div>
          )}
          {activeTab === "Tab5" && (
            <div>
              Establish a complete IoT ecosystem, integrating all components and
              ensuring seamless operation across the entire setup.
            </div>
          )}
        </div>
      </div>
      <button type="button" className="logo-tech-button">
        Hire UI/UX Designer
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="iot-section-three-image">
        <div className="iot-section-image-three-top">
          <h2>Customized IoT Solutions for Industry Sectors</h2>
        </div>
        <div
          className="iot-section-three-cont"
          style={{ backgroundColor: "#FFF4C5", color: "black" }}
        >
          <p>
            Anchor Informatics Ltd.'s IoT development specialists collaborate
            with a wide range of industries, including biotechnology, finance,
            agriculture, and consumer electronics. Our primary focus, however,
            is on delivering tailored IoT solutions for retail and logistics,
            healthcare, and education sectors. Rely on Anchor Informatics Ltd.
            to develop:
          </p>
        </div>
      </div>

      <div className="logo-btm-tabs-container">
        <div className="logo-btm-tabs">
          <button
            className={activeTab === "Tab1" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab1")}
          >
           Innovative Retail Solutions
          </button>
          <button
            className={activeTab === "Tab2" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab2")}
          >
            Advanced Logistics Systems
          </button>
          <button
            className={activeTab === "Tab3" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab3")}
          >
            Smart Healthcare Applications
          </button>
          <button
            className={activeTab === "Tab4" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab4")}
          >Educational IoT Integration
          </button>
        </div>
        <div className="underline"></div>
        <div className="logo-btm-tab-content">
          {activeTab === "Tab1" && (
            <div>
              Enhance customer experiences and streamline operations with tailored IoT technologies for inventory management, smart checkout systems, and personalized shopping.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Optimize supply chain operations, real-time tracking, and fleet management with custom IoT solutions designed for efficiency and accuracy.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              Implement IoT solutions for remote patient monitoring, smart medical devices, and advanced health analytics to improve patient care and operational efficiency.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Create interactive learning environments, manage campus facilities, and streamline administrative tasks with bespoke IoT solutions for educational institutions.
            </div>
          )}
        </div>
      </div>
     
      <div className="slider-container">
      <div className="slider">
        <img src={slides[currentSlide].src} alt={slides[currentSlide].title} />
        <div className="content">
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="prev" onClick={prevSlide}><FaArrowLeft /></button>
        <button className="next" onClick={nextSlide}><FaArrowRight /></button>
      </div>
    </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Iot;
