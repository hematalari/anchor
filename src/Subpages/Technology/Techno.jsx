import React, { useState } from "react";
import "./Techno.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "/anchor/assets/images/tech.png";
import { FaHeart } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { PiVanFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Techno = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav />

      <div className="techno-top">
        <img
          className="techno-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="techno-cont">
          <div className="techno-info">
            <h2>Technology Consulting Services</h2>
            <p>
              Leverage our technology consulting services to unlock the full
              potential of technology and deliver outstanding business value,
              both now and in the future.
            </p>
          </div>

          <div className="techno-btn">
            <button>
              Talk to tech consultants
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="techno-image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="techno-section">
        <div className="techno-section-top">
          <h2>Our technology consulting services</h2>
          <p>
            Technology is advancing at an unprecedented pace, and with it comes
            the need for a fresh approach to managing enterprise IT. This
            approach should prioritize building resilient, scalable ecosystems
            that fuel business growth. To help you stay ahead in this rapidly
            evolving landscape, we provide expert tech guidance through a
            comprehensive suite of software consulting services.
          </p>
        </div>
      </div>

      <div className="techno-tech-list">
        <ul>
          <li>
            <p>
              <span>IT Strategy and Planning:</span> We help you develop a
              strategic IT roadmap that aligns with your business objectives,
              ensuring technology investments deliver maximum value.
            </p>
          </li>
          <li>
            <p>
              <span>Digital Transformation Consulting:</span> Our experts guide
              you through adopting digital technologies, optimizing processes,
              and transforming your business operations for increased efficiency
              and innovation.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <span>Software Development and Integration:</span> We create
              custom software solutions tailored to your specific needs and
              seamlessly integrate them with your existing systems to enhance
              functionality.
            </p>
          </li>
          <li>
            <p>
              <span>Cybersecurity Consulting:</span> We assess your current
              security posture, identify vulnerabilities, and implement robust
              measures to protect your organization from cyber threats.
            </p>
          </li>
          <li>
            <p>
              <span>Cloud Computing Consulting:</span>
              Our team assists in migrating your business operations to the
              cloud, optimizing cloud environments for scalability,
              cost-efficiency, and flexibility.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <span>Data Analytics and Business Intelligence:</span> We leverage
              advanced analytics tools to turn your data into actionable
              insights, empowering you to make informed, strategic decisions.{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              <span>Infrastructure Management:</span> We design, deploy, and
              manage resilient IT infrastructure that supports your business
              needs, ensuring high performance and scalability.{" "}
            </p>
          </li>
          <li>
            <p>
              <span>AI and Machine Learning Consulting:</span> We integrate AI
              and machine learning technologies into your business processes,
              automating tasks and uncovering new insights from data.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <span>Enterprise Resource Planning (ERP) Consulting:</span> We
              implement and optimize ERP systems, streamlining your business
              processes and enhancing productivity across departments.
            </p>
          </li>
          <li>
            <p>
              {" "}
              <span>IT Compliance and Risk Management: </span>We help you
              navigate regulatory requirements and manage IT risks, ensuring
              your operations are compliant and secure.
            </p>
          </li>
        </ul>
      </div>
      <button className="techno-button">
        Hire embedded software engineers
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="techno-section-one-image">
        <div className="techno-section-image-one-top">
          <h2>Our procedure for creating smart contracts</h2>
        </div>
        <div className="techno-section-one-cont">
          <p>
            We make sure your company benefits fully from our relationship by
            utilizing field-tested workflows while remaining attentive to your
            demands. Our working relationship follows the following schedule:
          </p>
        </div>
      </div>

      <div className="techno-btm-tabs-container">
        <div className="techno-btm-tabs">
          <button
            className={activeTab === "Tab1" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab1")}
          >
            Exploration
          </button>
          <button
            className={activeTab === "Tab2" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab2")}
          >
            Blueprinting
          </button>
          <button
            className={activeTab === "Tab3" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab3")}
          >
            Strategy Development
          </button>
          <button
            className={activeTab === "Tab4" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab4")}
          >
            Execution
          </button>
        </div>
        <div className="underline"></div>
        <div className="techno-btm-tab-content">
          {activeTab === "Tab1" && (
            <div>
              We start by understanding your current challenges and objectives
              to gain a clear picture of your needs.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Next, we create detailed designs and frameworks tailored to
              address your specific requirements.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              We then develop a comprehensive plan that outlines the steps and
              resources needed to achieve your goals.{" "}
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Finally, we implement the plan, ensuring that the technology
              solutions are effectively integrated and deployed to drive your
              business forward.{" "}
            </div>
          )}
        </div>
      </div>

      <div className="techno-section-two-image">
        <div className="techno-section-image-two-top">
          <h2>Technologies We Use for Smart Contract Development</h2>
        </div>
        <div className="techno-section-two-cont">
          <p>
            As a blockchain consulting firm, we at Anchor informatics ltd stay
            updated on the latest advancements in blockchain technology to
            provide top-tier smart contract solutions. Share your idea with us,
            and we’ll recommend the perfect technology blend to bring it to
            life.
          </p>
        </div>
      </div>

      <div className="techno-image-cont">
        <div className="techno-image-cont-item">
          <FaHeart
            style={{ fontSize: "30px", marginRight: "20px", color: "#FFDB3B" }}
          />
          <h2>Healthcare & Biotech</h2>
        </div>
        <div className="techno-image-cont-item">
          <FaBookOpen
            style={{ fontSize: "30px", marginRight: "20px", color: "#FFDB3B" }}
          />
          <h2>Education & Elearning</h2>
        </div>
        <div className="techno-image-cont-item">
          <FaShoppingBag
            style={{ fontSize: "30px", marginRight: "20px", color: "#FFDB3B" }}
          />
          <h2>Retail & Ecommerce </h2>
        </div>
        <div className="techno-image-cont-item">
          <PiVanFill
            style={{ fontSize: "30px", marginRight: "20px", color: "#FFDB3B" }}
          />
          <h2>Logistics & Transportation</h2>
        </div>
      </div>

      <button
        type="button"
        className="techno-button"
        style={{ marginLeft: "100px" }}
      >
        Book a call with tech consultants
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="techno-section-three-image">
        <div className="techno-section-image-three-top">
          <h2>Smart contract development for diverse industries</h2>
        </div>
        <div
          className="techno-section-three-cont"
          style={{ backgroundColor: "white" }}
        >
          <p>
            As a smart contract development company with cross-industry
            expertise, ITRex harnesses the potential of smart contracts to
            benefit businesses across various sectors. Combining our blockchain
            development skills, RPA as a service, and a passion for innovation
            with a comprehensive understanding of different industry operations,
            we are prepared to tackle any challenge!
          </p>
        </div>
      </div>

      <div className="techno-bottom">
        <div className="techno-bottom-cont">
          <div className="techno-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              <b>We have experience.</b> We’ve got 5 years of experience providing
              software consulting and development services and have successfully
              delivered 600+ products to 200+ happy customers around the globe.
            </p>
          </div>
          <div className="techno-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              <b>We care about your business.</b> We delve into your business and
              thoroughly analyze your tech infrastructure to extend your legacy
              investments and make the most of new ones.
            </p>
          </div>
          <div className="techno-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              <b>We are vendor-agnostic.</b> We are not tied to any vendor, so we only
              recommend technologies and solutions that work best for you and
              generate the fastest ROI.
            </p>
          </div>
          <div className="techno-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              <b>We know emerging tech.</b> We know modern technologies through and
              through and continuously monitor industry trends to help you
              outrun the competition.
            </p>
          </div>
        </div>
      </div>
      <button className="techno-button" style={{ marginBottom: "30px" }}>
        Book a free AR development consultation
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <Contact />
      <Footer />
    </div>
  );
};

export default Techno;
