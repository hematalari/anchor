import React, { useState } from "react";
import "./Logo.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "/anchor/assets/images/logo-banner.webp";
import Projects from "../../Components/Projects/Projects.jsx";
import slider_info from "../../data/slider.js";

const Logo = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav />
      <div className="logo-top">
        <img
          className="logo-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="logo-cont">
          <div className="logo-info">
            <h2>Logo Designing</h2>
            <p>
              We craft unique logos that elevate your brand, drive recognition,
              and captivate audiences.
            </p>
          </div>

          <div className="logo-btn">
            <button>
              Hire a developer
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="logo-image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="logo-section">
        <div className="logo-section-top">
          <h2>Unique Logo Designs Crafted for Your Business Identity</h2>
          <p>
            We create impactful logos and visual identities tailored to elevate
            your brand. From initial concept to final design, our logos are
            crafted to resonate with your audience and adapt as your business
            grows.
          </p>
        </div>
      </div>

      <div className="logo-top-tabs-container">
        <div className="logo-top-tabs">
          <button
            className={activeTab === "Tab1" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab1")}
          >
            Typography
          </button>
          <button
            className={activeTab === "Tab2" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab2")}
          >
            Colors
          </button>
          <button
            className={activeTab === "Tab3" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab3")}
          >
            Icons/Symbols
          </button>
          <button
            className={activeTab === "Tab4" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab4")}
          >
            Simplicity
          </button>
          <button
            className={activeTab === "Tab5" ? "tab-title active" : "tab-title"}
            onClick={() => handleTabClick("Tab5")}
          >
            Scalability
          </button>
        </div>
        <div className="underline"></div>
        <div className="logo-top-tab-content">
          {activeTab === "Tab1" && (
            <div>
              Typography in a logo not only defines the brand's voice but also
              influences how the brand is perceived, whether modern, classic,
              bold, or elegant. The choice of font style, weight, and spacing
              all contribute to the overall impact and legibility of the logo.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Colors in a logo are crucial for conveying emotions and creating a
              psychological connection with the audience. Each color carries its
              own meaning, helping to reinforce the brand’s identity and making
              it memorable across different touchpoints.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              Icons and symbols in a logo serve as powerful visual shortcuts,
              instantly communicating the brand’s core values and essence. They
              help make the logo distinctive and memorable, encapsulating the
              brand’s message in a simple, recognizable form.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Simplicity in logo design ensures that the logo remains clean,
              clear, and easily recognizable across various applications. A
              simple design is versatile, making it effective in different sizes
              and formats, ensuring that the brand message is communicated
              without any visual clutter.
            </div>
          )}
          {activeTab === "Tab5" && (
            <div>
              Scalability ensures that a logo maintains its clarity and impact
              whether it’s displayed on a small business card or a large
              billboard. A well-designed scalable logo remains effective and
              recognizable at any size, preserving its integrity and legibility.
              4o mini
            </div>
          )}
        </div>
      </div>
      <button className="logo-button">
        Drop us a Line
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="logo-section-one-image">
        <div className="logo-section-image-one-top">
          <h2>
            Bespoke web app development services designed to propel your
            business forward.
          </h2>
        </div>
        <div className="logo-section-one-cont">
          <p>
            As a premier logo design studio, Anchor Informatics Ltd. delivers
            bespoke logos tailored to your brand’s unique identity. We craft
            striking, versatile logos using cutting-edge design principles to
            ensure visual impact and clarity. Our logos are designed to be
            scalable, memorable, and effective across all media, providing you
            with a distinctive brand mark that sets you apart and supports your
            business growth.
          </p>
        </div>
      </div>

      <div className="logo-tabs-container">
        <div className="logo-tabs-section">
          <div className="logo-line">
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
            <div
              className={activeTab === "Tab6" ? "circle active" : "circle"}
            ></div>
          </div>
          <div className="logo-tabs">
            <button
              className={
                activeTab === "Tab1"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab1")}
            >
              Research & Discovery
            </button>
            <button
              className={
                activeTab === "Tab2"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab2")}
            >
              Concept Development
            </button>
            <button
              className={
                activeTab === "Tab3"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab3")}
            >
              Digital Design
            </button>
            <button
              className={
                activeTab === "Tab4"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab4")}
            >
              Feedback & Revisions
            </button>
            <button
              className={
                activeTab === "Tab5"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab5")}
            >
              Finalization
            </button>
            <button
              className={
                activeTab === "Tab6"
                  ? "logo-tab-title active"
                  : "logo-tab-title"
              }
              onClick={() => handleTabClick("Tab6")}
            >
              Launch & Support
            </button>
          </div>
        </div>
        <div className="logo-tab-content">
          {activeTab === "Tab1" && (
            <div>
              The logo design process begins with a thorough understanding of
              the client's needs, goals, target audience, and brand values. This
              is followed by market research to assess industry trends and
              competitors, helping to identify effective design strategies.
              Lastly, inspiration is gathered from various sources to align
              colors, typography, and design styles with the brand's vision. 4o
              mini
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Concept Development involves generating and refining ideas for the
              logo based on initial research and inspiration. This stage
              includes brainstorming potential designs, sketching preliminary
              concepts, and selecting the most promising ones to develop
              further. The goal is to create a range of design options that
              capture the essence of the brand and provide a solid foundation
              for the final logo.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              Digital Design translates the refined logo concepts into vector
              graphics using design software. This stage involves creating
              high-quality digital versions of the logo, selecting typography,
              and finalizing the color palette. The design is crafted to ensure
              it is visually appealing and functional across various sizes and
              formats.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Feedback & Revisions involve presenting the initial logo designs
              to the client for their input. Based on the client’s feedback,
              necessary adjustments and refinements are made to ensure the logo
              aligns with their vision and requirements. This iterative process
              continues until the design meets the client's expectations.
            </div>
          )}
          {activeTab === "Tab5" && (
            <div>
              Finalization ensures the logo is polished and ready for use. This
              stage involves making final tweaks to the design, ensuring it
              works across different sizes and formats. The logo is then
              provided in various file formats and versions, along with a usage
              guide to maintain consistency and integrity in all applications.
            </div>
          )}
          {activeTab === "Tab6" && (
            <div>
              Launch & Support includes assisting with the implementation of the
              logo across various platforms and materials, such as websites,
              social media, and print. Ongoing support is provided for any
              further adjustments or additional design needs to ensure the logo
              remains effective and consistent with the brand’s identity.
            </div>
          )}
        </div>
      </div>
      <button type="button" className="logo-tech-button">
        Hire UI/UX Designer
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="logo-section-two-image">
        <div className="logo-section-image-two-top">
          <h2>Expert support at every stage of your logo design journey</h2>
        </div>
        <div
          className="logo-section-two-cont"
          style={{ backgroundColor: "#FFF4F4", color: "black" }}
        >
          <p>
            "At Anchor Informatics Ltd., we excel in software engineering and
            logo design. Our talented logo designers partner with business
            analysts, front-end developers, and software architects to create
            unique and impactful logos that perfectly represent your brand's
            essence."
          </p>
        </div>
      </div>

      <button type="button" className="logo-tech-button">
        Start a Conversation
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>
      <Projects slide={slider_info} />

      <div className="logo-sec-bottom">
        <div className="logo-sec-top">
          <h2>The Effectiveness of Anchor Informatics</h2>
        </div>
      </div>
      <div className="logo-tech-bottom">
        <div className="logo-tech-cont">
          <h2>Swift Design Execution</h2>
          <p>
            We provide rapid turnaround times for logo design projects, ensuring
            that your brand's identity is established quickly and effectively.
            Our streamlined process delivers impactful logos that meet your
            deadlines and exceed expectations.
          </p>
        </div>
        <div className="logo-tech-cont">
          <h2>Top-Tier Design Talent</h2>
          <p>
            Our team of expert designers brings a wealth of experience and
            creativity to every project. We leverage their skills to create
            high-quality, visually stunning logos that capture the essence of
            your brand and make a lasting impression.
          </p>
        </div>
        <div className="logo-tech-cont">
          <h2>Tailored Design Solutions</h2>
          <p>
            We specialize in crafting deeply customized logos that resonate with
            your unique brand identity. By understanding your vision and goals,
            we develop logos that not only reflect your brand’s values but also
            stand out in a crowded marketplace.
          </p>
        </div>
      </div>
      <button
        style={{ marginBottom: "50px" }}
        type="button"
        className="logo-tech-button"
      >
        Discuss your Logo designing project
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <Contact />
      <Footer />
    </div>
  );
};

export default Logo;
