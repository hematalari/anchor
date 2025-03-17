import React from "react";
import "./About.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Image from "/assets/images/abut.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Contact from "../../Components/Contact/Contact";

import about from '/assets/images/about.jpeg';
import image from '/assets/images/about-sec.jpeg'



const About = () => {
  return (
    <div>
      <Nav />
      <div className="about">
        <img className="bg-img" style={{ width: "100%" }} src={Image} alt="" />
        <div className="about-cont">
          <div className="about-info">
            <h3>
              Corporate Responsibility{" "}
              <FaLongArrowAltRight
                style={{
                  marginBottom: "-5px",
                  color: "white",
                  fontSize: "24px",
                }}
              />{" "}
            </h3>
            <h2>
              Sustainable Software Development:
              <br />
              Our Journey
            </h2>
          </div>
          <div className="about-btn">
            <button>
              Talk to our Experts{" "}
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="section-top">
          <h2>Mission Statement</h2>
          <p>
            Welcome to Anchor Informatics Ltd., where technology meets
            sustainability.
          </p>
          <p>
            <span>Our commitment to sustainability </span>echoes through every
            aspect of our business, from empowering our employees and
            contractors to delivering eco-friendly solutions for our clients,
            all while minimizing our impact on the planet.
          </p>
          <p>
            <span>Our dedication to sustainability </span>
            is deeply ingrained in our core values, guiding our interactions and
            decisions. Our team, composed of honest, respectful, always
            learning, and dedicated individuals, drives innovation while
            prioritizing the environment.
          </p>
          <p>
            <span>Our commitment to sustainability </span>encourages
            collaboration with clients, fostering a cleaner future for all. We
            acknowledge that environmental stewardship is a collective
            responsibility.
          </p>
          <p>
            <span>Our commitment to sustainability </span>motivates us to adopt
            eco-conscious practices and support clients in doing the same.
            Assessing our choices' environmental impact, we integrate
            sustainability into daily operations to achieve our mission and
            promote a greener future.
          </p>
          <p>
            When we create software with the environment in mind, everyone wins
            – businesses, people, and our planet.
          </p>
        </div>
      </div>

      <div className="about-section-image">
        <img src={about} alt="" />
      </div>

      <div className="about-section-center">
        <h2>
          Anchor Informatics Ltd <span>Sustainability Framework</span>
        </h2>
        <div className="about-section-center-cont">
          <p>
            We are committed to building a sustainable future by embedding
            eco-friendly practices into every aspect of our operations. By using
            resources efficiently, minimizing waste, and promoting responsible
            disposal, we continuously set and strive for higher sustainability
            goals. We foster a culture of learning about sustainability,
            engaging employees, contractors, clients, and partners in this
            mission. Our collaborative efforts with clients and
            eco-organizations drive us toward shared sustainability objectives.
            We champion diversity, inclusion, and equal opportunities while
            leveraging technology to create innovative, earth-friendly software
            solutions. Sustainability is a core business value, guiding our
            decisions and shaping our vision for a greener future.
          </p>
          <img src={image} alt='' />
        </div>
      </div>

      <div className="section-bottom">
        <div className="section-bottom-top">
          <h3>Our Pillars</h3>
          <p>
            At Anchor Informatics, we are committed to forging a sustainable
            future through the power of innovation, integrity, and
            collaboration. Our strategy for sustainability is anchored in three
            core pillars: Our People, Our Clients, and Our Planet. These pillars
            guide us in making the world of IT services more responsible,
            inclusive, and environmentally friendly.
          </p>
        </div>
        </div>
        <div className="about-tech-list">
        <ul>
          <li>
            <p>
              <span>Comprehensive Development Lifecycle</span> <br />We help you develop a
              strategic IT roadmap that aligns with your business objectives,
              ensuring technology investments deliver maximum value.
            </p>
          </li>
          <li>
            <p>
              <span>Expert Knowledge Base</span><br /> Our experts guide
              you through adopting digital technologies, optimizing processes,
              and transforming your business operations for increased efficiency
              and innovation.
            </p>
          </li>
          <li>
            <p>
              <span>Rigorous Quality Assurance</span><br /> We create
              custom software solutions tailored to your specific needs and
              seamlessly integrate them with your existing systems to enhance
              functionality.
            </p>
          </li>
          <li>
            <p>
              <span>Adaptive Methodology</span><br /> We assess your current
              security posture, identify vulnerabilities, and implement robust
              measures to protect your organization from cyber threats.
            </p>
          </li>
          <li>
            <p>
              <span>Innovative Solutions</span><br />
              Our team assists in migrating your business operations to the
              cloud, optimizing cloud environments for scalability,
              cost-efficiency, and flexibility.
            </p>
          </li>
          <li>
            <p>
              <span>Ultimate Flexibility</span> <br />We leverage
              advanced analytics tools to turn your data into actionable
              insights, empowering you to make informed, strategic decisions.{" "}
            </p>
          </li>
        </ul>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
