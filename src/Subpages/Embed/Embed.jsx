import React,{useState} from "react";
import "./Embed.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "/anchor/assets/images/embed.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Embed = () => {
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
      <div className="embed-top">
        <img
          className="embed-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="embed-cont">
          <div className="embed-info">
            <h2>
              Customized Embedded Software Development & Consulting Services
            </h2>
            <p>
              Leverage our expertise in embedded software development to build
              firmware, middleware, bespoke operating systems, and tailored
              interfaces for innovative devices.
            </p>
          </div>

          <div className="embed-btn">
            <button>
              Build embedded solutions
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="embed-image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="embed-section">
        <div className="embed-section-top">
          <h2>
            Embedded software development services tailored to meet your
            specific requirements.
          </h2>
          <p>
            As a software engineering firm with over 5 years of experience,
            we've handled numerous electronic product designs and embedded
            software development projects. Whether you're looking for device
            drivers or a comprehensive operating system that processes data at
            the network edge, we have the expertise to deliver. Our capabilities
            include:
          </p>
        </div>
      </div>

      <div className="embed-tech-list">
        <ul>
          <li>
            Our team of embedded software engineers can help you quickly
            prototype and test your ideas, develop bare-metal firmware,
            real-time operating systems (RTOS), and board support packages, and
            manage over-the-air (OTA) firmware updates. Reach out to us for your
            firmware development needs!
          </li>
          <li>
            Anchor informatics ltd experts specialize in building custom
            middleware that bridges the gap between hardware components,
            devices, and software systems. Our experience includes creating
            reliable device drivers, SDKs, APIs, and connectivity solutions
            powered by AI.
          </li>
          <li>
            Work with us to develop intuitive human-machine interfaces (HMI) for
            a range of applications, including medical devices, industrial
            machinery, consumer electronics, vehicles, and POS systems. We can
            also assist with integrating your devices with voice assistants. As
            part of our embedded software development services, we dive deep
            into operating system customization, tailoring Linux Kernel, AOSP,
            and RTOS to meet your specific needs.
          </li>
          <li>
            Our team will design efficient embedded solutions for connectivity
            and proximity, enabling devices to handle sensor data exchange while
            conserving battery life. We excel in Bluetooth, iBeacon, NFC, and
            RFID technology development.
          </li>
          <li>
            Anchor informatics ltd consultants will thoroughly analyze your
            project, assess the performance requirements, and recommend the best
            technology stack for your embedded software. We also offer
            optimization and code review services to enhance your firmware and
            middleware, ensuring no flaws are left unchecked.
          </li>
        </ul>
      </div>
      <button className="embed-button">
        Hire embedded software engineers
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="embed-section-one-image">
        <div className="embed-section-image-one-top">
          <h2>Embedded software systems we develop</h2>
        </div>
        <div className="embed-section-one-cont">
          <p>
            Anchor Informatics Ltd. offers embedded software development
            services across diverse industries such as healthcare,
            biotechnology, finance, and logistics. Explore our expertise in
            embedded solutions to discover how we can support your projects.
          </p>
        </div>
      </div>

      <div className="embed-section-two-image">
        <div className="embed-section-image-two-top">
          <h2>
            What makes Anchor informatics ltd the right embedded{" "}
            <span>software company to handle your project?</span>
          </h2>
        </div>
        <div className="embed-section-two-cont">
          <p>
            As an established IoT development and consulting firm, Anchor
            Informatics Ltd. boasts extensive experience in crafting reliable
            connected solutions for both enterprise and consumer markets. We
            specialize in:
          </p>
        </div>
      </div>

      <div className="embed-bottom">
        <div className="embed-bottom-cont">
            <div className="embed-list-item">
            <p>
            <IoMdCheckmarkCircleOutline />
            <b>We are knowledgeable.</b> Anchor informatics ltd is not just
an embedded solution provider. We are
emerging technology experts with full-
stack expertise! And we can build an entire software ecosystem for your device, should the need arise.
          </p>
            </div>
            <div className="embed-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>We are flexible.</b>  Our embedded software engineers may carry out your project from the ideation stage to deploymentor tune in at any given moment to conduct audits,
            refine code, and assist you with firmware installation and flashing.
          </p>
          </div>
          <div className="embed-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>We are customer-centric.</b> We can remain your technology partner even after your product goes live. Should you need help with OTA updates, new feature development, or performance optimization, our embedded software
            development superheroes will step right in!
          </p>
          </div>
          <div className="embed-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>We are flexible.</b>Our embedded software engineers may carry out your project from the ideation stage to deploymentor tune in at any given moment to conduct audits,
            refine code, and assist you with firmware installation and flashing.
          </p>
           </div>
        </div>
      </div>
      <button className="embed-button">
      Embedded systems developers to hire
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

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

export default Embed;
