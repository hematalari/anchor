import React, { useState }from "react";
import "./Cloud.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Sideimage from "/anchor/assets/images/cloud.png";
import insight_data from "../../data/insight.js";
import Ques from "../../Pages/Ques/Ques.jsx";
import cloudimg from "/anchor/assets/images/cloud-sec.jpeg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Cloud = () => {
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
      <div className="cloud-top">
        <img
          className="cloud-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="cloud-cont">
          <div className="cloud-info">
            <h2>Cloud strategy consulting and implementation solutions.</h2>
            <p>
              Leverage cloud technology to reduce operational expenses, achieve
              limitless scalability, and experience top-tier performance with
              our comprehensive cloud consulting and deployment services.
            </p>
          </div>

          <div className="cloud-btn">
            <button>
              Hire a developer
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="cloud-image">
          <img src={Sideimage} alt="" />
        </div>
      </div>

      <div className="cloud-section">
        <div className="cloud-section-top">
          <h2>
            Comprehensive cloud computing consulting and implementation
            services.
          </h2>
          <p>
            End-to-end cloud computing consulting and implementation services
            tailored to your business needs. Maximize efficiency, scalability,
            and performance with our expert solutions.
          </p>
        </div>
      </div>

      <div className="appdev-bottom">
        <Ques in_data={insight_data} />
      </div>

      <button className="cloud-tech-button">
        Hire a developer
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="cloud-section-bottom">
        <div className="cloud-section-btm-top"></div>
        <div className="cloud-section-btm-center">
          <p>
            We provide consulting and build IaaS, PaaS, and SaaS solutions to
            help you maximize cloud benefits with the most suitable
            implementation. Our cloud consultants manage various deployment
            models to balance technology, risks, and costs while keeping your
            business objectives at the forefront.
          </p>
        </div>
      </div>

      <div className="cloud-sec-center">
        <div className="cloud-sec-cont">
          <p>
            <span>Private Cloud: </span>Safeguard sensitive data, maintain
            control over your operations, and enjoy extensive customization
            options.
          </p>
        </div>
        <div className="cloud-sec-cont">
          <p>
            <span>Distributed Cloud:</span> Address location-specific needs,
            minimize latency, and significantly reduce downtime risk with
            distributed cloud solutions.
          </p>
        </div>
        <div className="cloud-sec-cont">
          <p>
            <span>Multicloud:</span> Avoid being tied to a single vendor by
            leveraging top-tier cloud solutions to broaden your service
            offerings and business scope.
          </p>
        </div>
        <div className="cloud-sec-cont">
          <p>
            <span>Hybrid Cloud:</span>Achieve enhanced agility and reliability
            by balancing the benefits of on-premises and cloud-based deployments
            for managing data and resources.
          </p>
        </div>
        <div className="cloud-sec-cont">
          <p>
            <span>Public Cloud: </span> Access cloud computing consulting and
            implementation easily, and deploy scalable solutions without the
            burden of managing infrastructure.
          </p>
        </div>
      </div>

      <div className="cloud-section-one-image">
        <div className="cloud-section-image-one-top">
          <h2>Every aspect of cloud adoption, taken care of</h2>
        </div>
        <div className="cloud-section-one-cont">
          <p>
            From assessing your business needs and offering cloud strategy
            consulting to providing employee training, we are committed to
            delivering high-quality service throughout our partnership. Our
            business analysts collaborate closely with solution architects to
            ensure a seamless cloud adoption and usage experience.
          </p>
        </div>
      </div>

      <div className="cloud-sec-btm-list">
        <div className="cloud-list">
          <h2>Assessment and Discovery</h2>
          <p>
            We begin by analyzing the client's business goals, existing IT
            infrastructure, and challenges to identify key needs. We then
            evaluate the organization's readiness for cloud adoption,
            considering technical, financial, and organizational factors.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Strategy Development</h2>
          <p>
            We create a customized cloud strategy that aligns with your business
            goals and develop a detailed roadmap with timelines and milestones
            for adoption. We then design a secure, scalable, and compliant cloud
            architecture tailored to your selected cloud model and technology
            stack.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Planning</h2>
          <p>
            We select the best cloud services and technologies for your needs
            and create a detailed plan for migration or deployment. We also
            identify potential risks and develop strategies to mitigate them
            effectively.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Implementation</h2>
          <p>
            We carry out the cloud migration or deployment plan, including
            setting up infrastructure, configuring services, and transferring
            data and applications. We also apply best practices to ensure
            efficiency and automate processes where feasible.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Optimization</h2>
          <p>
            We continuously monitor and optimize cloud resources to boost
            performance and cost-efficiency. Additionally, we regularly review
            and update security measures to ensure compliance with relevant
            regulations.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Ongoing Support and Management</h2>
          <p>
            We track cloud resource usage, performance, and costs, performing
            routine maintenance and updates as necessary. Additionally, we offer
            employee training and ongoing support to address any issues and
            ensure smooth cloud operations.
          </p>
        </div>
        <hr className="cloud-list-hr" />
        <div className="cloud-list">
          <h2>Review and Improvement</h2>
          <p>
            We collect feedback from stakeholders to evaluate the cloud
            strategy's effectiveness and make adjustments to enhance the cloud
            environment and processes.
          </p>
        </div>
      </div>
      <button className="cloud-btn">
        Talk to a cloud expert
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="cloud-section-two-image">
        <div className="cloud-section-image-two-top">
          <h2>
            Cloud computing consulting with Anchor informatics ltd Our unique
            value proposition
          </h2>
        </div>
        <div className="cloud-section-two-cont">
          <p>
            As a cloud consulting firm, our mission is to guide you through
            digital transformation with minimal effort and risk. Our services
            are focused on ensuring your cloud infrastructure delivers real
            business value rather than just incurring costs.
          </p>
        </div>
      </div>

      <div className="cloud-section-bottom2">
        <div className="cloud-section-bottom2-cont">
          <div className="cloud-sec-cont2">
            <ul>
              <li>
                <p>
                  <b>Seamless Growth from the Start:</b> <br />
                  Cloud infrastructure that scales effortlessly with your
                  business, supporting uninterrupted expansion.
                </p>
              </li>
            </ul>
          </div>
          <div className="cloud-sec-cont2">
            <ul>
              <li>
                <p>
                  <b>Enhanced Security Measures: </b>
                  <br />
                  State-of-the-art security features and practices for superior
                  data protection.
                </p>
              </li>
            </ul>
          </div>
          <div className="cloud-sec-cont2">
            <ul>
              <li>
                <p>
                  <b>Innovation-Ready Environment: </b>
                  <br />A dynamic platform designed to support advanced
                  technologies like AI, ML, and IoT for future-forward
                  solutions.
                </p>
              </li>
            </ul>
          </div>
          <div className="cloud-sec-cont2">
            <ul>
              <li>
                <b>Regulatory Compliance: </b> <br />
                Robust compliance frameworks for industry standards such as
                HIPAA, PCI-DSS, and GDPR.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="cloud-tech-button">
        Discuss my cloud strategy
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="cloud-bottom">
        <h2>Why work with Anchor informatics ltd?</h2>
        <div className="cloud-bottom-cont">
            <div className="cloud-list-item">
            <p>
            <IoMdCheckmarkCircleOutline />
            <b>Platform-Independent </b>We select cloud tools and technologies
            that align perfectly with your project's needs, without being
            limited to any specific cloud provider.
          </p>
            </div>
            <div className="cloud-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>Broad Industry Knowledge</b> With over 3 years in the field, we
            provide cloud consulting and develop solutions for a wide range of
            industries, including eCommerce, fintech, healthcare, logistics, and
            real estate.
          </p>
          </div>
          <div className="cloud-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>Expertise from a Large Team </b>Our team of 50+ professionals includes
            experienced business analysts, cloud architects, DevOps experts, and
            a dedicated R&D unit to address all project requirements.
          </p>
          </div>
          <div className="cloud-list-item">
          <p>
            <IoMdCheckmarkCircleOutline />
            <b>Demonstrated Success</b> We’ve achieved over 100 successful project
            completions and have served more than 150 clients globally,
            showcasing our reliable and effective solutions.
          </p>
           </div>
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

export default Cloud;
