import React from "react";
import Webpoint from "/assets/images/web-point.png";
import "./Web.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import WEB from "/assets/images/webdevelopmet.webp";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Tech from "../Tech/Tech";
import web_info from "../../data/web.js";
import Projects from "../../Components/Projects/Projects.jsx";
import slider_info from "../../data/slider.js";
import insight_data from "../../data/insight.js";
import Ques from "../../Pages/Ques/Ques.jsx";
import Side from "/assets/images/sideimage.png";
import Static from "/assets/images/static.png";
import Java from "/assets/images/java.png";
import Ecom from "/assets/images/ecommere.png";
import Content from "/assets/images/content.png";
import Respons from "/assets/images/responsive.png";
import Rich from "/assets/images/rich.png";
import Face from "/assets/images/face-time.png";
import Multiple from "/assets/images/multiple.png";
import Customer from "/assets/images/customer.png";

const Web = () => {
  return (
    <div>
      <Nav />
      <div className="web-top">
        <img
          className="web-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="web-cont">
          <div className="web-info">
            <h2>Web Development Company</h2>
            <p>
              We build custom websites that overcome business challenges, boost
              revenue, and engage millions of users.
            </p>
          </div>

          <div className="web-btn">
            <button>
              Hire a developer
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="web-image">
          <img src={WEB} alt="" />
        </div>
      </div>
      <div className="web-section">
        <div className="web-section-top">
          <h2>Custom Web Solutions for Any Business Need</h2>
          <p>
            We develop high-performing websites and web applications of any
            complexity, designed to handle growing user demands. Many of our
            clients’ projects have evolved from an initial concept to
            fully-featured platforms serving millions of users.
          </p>
        </div>
      </div>
      <div className="web-image-section">
        <div className="image-cont" style={{ backgroundColor: "#0090A5" }}>
          <img src={Static} alt="" />
          <h2>static web application</h2>
        </div>
        <div className="image-cont" style={{ backgroundColor: "#E8E8E8" }}>
          <img src={Java} alt="" />
          <h2>static web application</h2>
        </div>
        <div className="image-cont" style={{ backgroundColor: "#F9E9D9" }}>
          <img src={Ecom} alt="" />
          <h2>static web application</h2>
        </div>
        <div className="image-cont" style={{ backgroundColor: "#3EBCE5" }}>
          <img src={Content} alt="" />
          <h2>static web application</h2>
        </div>
        <div
          className="image-cont"
          style={{ backgroundColor: "#271057", color: "white" }}
        >
          <img src={Respons} alt="" />
          <h2>static web application</h2>
        </div>
        <div className="image-cont" style={{ backgroundColor: "#A6ECFF" }}>
          <img src={Rich} alt="" />
          <h2>static web application</h2>
        </div>
      </div>
      <button
        style={{
          padding: "12px 30px",
          margin: "30px 80px",
          marginLeft: "100px",
          backgroundColor: "#6076FF",
          borderRadius: "4px",
        }}
        type="button"
      >
        Let's build a Website{" "}
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="web-section-image-one">
        <div className="web-section-image-one-top">
          <h2>
            Bespoke web app development services designed to propel your
            business forward.
          </h2>
        </div>
        <div className="web-section-image-one-center">
          <p>
            As a leading provider of custom web application development
            services, Anchor Informatics Ltd. can meet all your digital needs,
            regardless of your industry. We develop innovative, high-performance
            web applications using the latest front-end and back-end
            technologies to deliver quick results. Our web apps ensure maximum
            usability, scalability, and cross-browser compatibility, giving you
            a competitive edge to fuel your growth.
          </p>
        </div>
      </div>

      <div className="web-section-image-two">
        <div className="web-section-image-two-top">
          <h2>
            Expert support at every stage of your web development journey.
          </h2>
        </div>
        <div className="web-section-image-two-center">
          <p>
            Anchor Informatics Ltd. is a comprehensive software engineering
            company. Our UI/UX designers collaborate with experienced business
            analysts, front-end developers, testing experts, and software
            architects to provide exceptional UI/UX design and development
            services:
          </p>
        </div>
      </div>

      <Tech data={web_info} />
      <div className="web-slider-bottom">
        <h2>Technologies We Utilize</h2>
      </div>
      <div className="tech-list">
        <ol>
          <li>
            <h1>Front-End</h1>
            <p>React.js | Vue.js |Angular| JavaScript</p>
          </li>
          <li>
            <h1>Back-End</h1>
            <p>Node.js | Python |Ruby on Rails| PHP|Java|.NET</p>
          </li>
          <li>
            <h1>DevOps</h1>
            <p>Docker | Kubernetes |Jenkins</p>
          </li>
          <li>
            <h1>UI/UX</h1>
            <p>Figma | Adobe XD, |Sketch|InVision</p>
          </li>
        </ol>
        <hr className="tech-list-hr" />
        <ol>
          <li>
            <h1>Cloud</h1>
            <p>AWS| Azure| Google Cloud</p>
          </li>
          <li>
            <h1>APIs</h1>
            <p>REST| GraphQL</p>
          </li>
          <li>
            <h1>Databases</h1>
            <p>MySQL | PostgreSQL |MongoDB|Firebase</p>
          </li>
        </ol>
      </div>
      <button
        style={{
          padding: "12px 30px",
          margin: "30px 80px",
          marginLeft: "100px",
          backgroundColor: "#6076FF",
          borderRadius: "4px",
        }}
        type="button"
      >
        Get in Touch
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="web-sec-bottom">
        <div className="web-sec-top">
          <h2>
            How Anchor Informatics <span>creates impact</span>
          </h2>
        </div>
      </div>
      <div className="web-tech-bottom">
        <div className="web-tech-cont">
          <img src={Face} alt="" />
          <h2>Fast time-to-value</h2>
          <p>
            Our top-tier professionals bring extensive expertise and innovative
            thinking to every project, ensuring exceptional quality and
            performance.
          </p>
        </div>
        <div className="web-tech-cont">
          <img src={Multiple} alt="" />
          <h2>A-class team</h2>
          <p>
            We prioritize efficiency and agility, delivering solutions quickly
            to provide immediate value and competitive advantage.
          </p>
        </div>
        <div className="web-tech-cont">
          <img src={Customer} alt="" />
          <h2>Deeply customized solutions</h2>
          <p>
            We prioritize efficiency and agility, delivering solutions quickly
            to provide immediate value and competitive advantage.
          </p>
        </div>
      </div>
      <button type="button" className="web-tech-button">
      Discuss your web app development project <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>
      <div className="web-section-image-bottom">
        <Projects slide={slider_info}/>
      </div>
      <Footer />
    </div>
  );
};

export default Web;
