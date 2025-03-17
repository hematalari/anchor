import React from "react";
import "./Agumented.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "/assets/images/reality.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Agumented = () => {
  return (
    <div>
      <Nav />
      <div className="agument-top">
        <img
          className="agument-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="agument-cont">
          <div className="agument-info">
            <h2>Services for Developing Augmented Reality Solutions</h2>
            <p>
              Explore our augmented reality (AR) app development services to
              enhance complex workflows, deliver exceptional customer
              experiences, and strengthen your marketing strategies.
            </p>
          </div>

          <div className="agument-btn">
            <button>
              Build custom AR software
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="agument-image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="agument-section">
        <div className="agument-section-top">
          <h2>Customized augmented reality application development services</h2>
          <p>
            As a leading AR development company, we excel in creating immersive
            experiences across various platforms and devices. At Anchor
            Informatics Ltd, our team utilizes a powerful combination of
            open-source and commercial augmented reality development tools to
            deliver impactful content presentation—precisely when and where your
            stakeholders need it.
          </p>
        </div>
      </div>

      <div className="agument-section-one-image">
        <div className="agument-section-image-one-top">
          <h2>Our methods for augmented reality app development</h2>
        </div>
        <div className="agument-section-one-cont">
          <p>
            At anchor informatics ltd , we stay up-to-date with the latest AR
            technology to swiftly adapt our augmented reality development
            services to meet our clients' needs. Whether it’s implementing basic
            QR codes or utilizing SLAM algorithms to determine a user’s position
            in 3D space, our team employs a variety of techniques to create
            dynamic and effective AR experiences.
          </p>
        </div>
      </div>

      <div className="agument-tech-bottom">
        <div className="agument-tech-cont">
          <h2>Marker-Based Augmented Reality</h2>
          <p>
            In our augmented reality development services, we create mobile and
            web apps equipped with marker recognition features. Marker-based AR
            applications detect image and object targets in real-time video and
            accurately overlay computer-generated imagery. Our team ensures your
            app delivers precise performance regardless of external conditions
            like texture or lighting.
          </p>
        </div>
        <div className="agument-tech-cont">
          <h2>Markerless Augmented Reality</h2>
          <p>
            We also specialize in markerless augmented reality apps, which
            leverage OS-specific, open-source, or proprietary technologies to
            assess the user's environment. By utilizing GPS and smartphone
            sensors, these apps calculate the user’s position and project
            digital content onto various surfaces within a 3D space.
          </p>
        </div>
      </div>

      <div className="agument-section-two-image">
        <div className="agument-section-image-two-top">
          <h2>Tailored AR Software Solutions for Specific Industriest</h2>
        </div>
        <div
          className="agument-section-two-cont"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <p>
            In the era of remote work and increasing online content consumption,
            we support clients across diverse sectors—such as media and
            entertainment, healthcare, e-commerce, sports, and education—in
            crafting impactful and engaging digital experiences for both
            customers and employees. Here’s how we can enhance your business.
          </p>
        </div>
      </div>

      <div className="agument-section-bottom">
        <div className="agument-section-bottom-cont">
          <div className="agument-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Enhance Patient Outcomes with AR-Driven Training</b> <br />
                  For healthcare, we can create AR apps that simulate medical
                  procedures for hands-on training, enhancing professionals'
                  skills and improving patient outcomes without real-life
                  practice.
                </p>
              </li>
            </ul>
          </div>
          <div className="agument-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Create Interactive Learning Modules</b>
                  <br />
                  For education, we can create AR tools that bring textbooks and
                  materials to life with interactive 3D models and virtual
                  demos, making learning more engaging and effective for better
                  student performance.
                </p>
              </li>
            </ul>
          </div>
          <div className="agument-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Boost In-Store Engagement with AR</b>
                  <br />
                  For retail, we can deploy AR solutions like virtual fitting
                  rooms and interactive product displays to enrich the shopping
                  experience, help customers make informed choices, boost foot
                  traffic, and drive sales.
                </p>
              </li>
            </ul>
          </div>
          <div className="agument-sec-cont">
            <ul>
              <li>
                <b>Optimize Warehouse Operations with AR</b> <br />
                For logistics, we can create AR systems that streamline
                warehouse operations with real-time navigation, inventory
                management, and picking instructions, reducing errors and
                boosting efficiency.
              </li>
            </ul>
          </div>
          <div className="agument-sec-cont">
            <ul>
              <li>
                <b>Drive Brand Engagement with Immersive AR Campaigns</b> <br />
                For marketing, we can craft engaging AR campaigns that let
                customers interact with your brand through virtual try-ons,
                interactive product experiences, and gamified promotions,
                enhancing engagement and creating memorable experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="agument-btn">
        Discuss my cloud strategy
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="agument-section-three-image">
        <div className="agument-section-image-three-top">
          <h2>
            Anchor informatics ltd Your Trusted Partner for Augmented Reality
            Solutions
          </h2>
        </div>
      </div>

      <div className="agument-bottom">
        <div className="agument-bottom-cont">
          <div className="agument-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              With a team of over 230 IT experts, our in-house capabilities
              guarantee outstanding augmented reality app development services,
              taking your business to new heights.
            </p>
          </div>
          <div className="agument-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              Vendor-agnostic approach: In developing AR software, we choose
              proven frameworks, libraries, and SDKs tailored to your company's
              specific needs. This ensures a diverse tech stack and reduces
              dependence on any single vendor.
            </p>
          </div>
          <div className="agument-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              Cross-functional expertise: Beyond augmented and virtual reality
              app development, we are well-versed in artificial intelligence and
              cutting-edge data management technologies. We also provide
              technology consulting to guide your company through digital
              transformation.
            </p>
          </div>
          <div className="agument-list-item">
            <p>
              <IoMdCheckmarkCircleOutline />
              Built-in scalability: Our augmented reality development services
              go beyond AR itself. We design apps that can accommodate growing
              customer bases and are easily updated to meet evolving business
              needs.
            </p>
          </div>
        </div>
      </div>
      <button className="agument-btn" style={{marginBottom:'30px'}}>
      Book a free AR development consultation
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <Contact />
      <Footer />
    </div>
  );
};

export default Agumented;
