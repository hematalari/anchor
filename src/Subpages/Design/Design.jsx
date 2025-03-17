import React, { useState } from "react";
import "./Design.css";
import Nav from "../../Components/Navbar/Navbar";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Ui from "/assets/images/UI.png";
import Projects from "../../Components/Projects/Projects.jsx";
import slider_info from "../../data/slider.js";

const Design = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav />
      <div className="design-top">
        <img
          className="design-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="design-cont">
          <div className="design-info">
            <h2>Full-Service UI/UX Design Offerings</h2>
            <p>
              Anchor informatics ltd delivers a full range of UI/UX design
              services to turn average mobile apps, websites, dashboards, and
              cyber-physical systems into exceptional tech solutions that
              captivate users and deliver substantial business outcomes.
            </p>
          </div>

          <div className="design-btn">
            <button>
              Hire a developer
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="design-image">
          <img src={Ui} alt="" />
        </div>
      </div>

      <div className="design-section">
        <div className="design-section-top">
          <h2>UI/UX Design Services That Make a Difference</h2>
          <p>
            Whether you're a large corporation undergoing digital transformation
            or a SaaS startup introducing a new product, collaborating with our
            UI/UX design experts offers compelling benefits. Discover how we can
            enhance your brand, set you apart from the competition, and create
            lasting relationships with your customers:
          </p>
        </div>
      </div>

      <div className="design-tech-bottom">
        <div className="design-tech-cont">
          <h2>User Research</h2>
          <p>
            Our user-focused UI/UX design services begin with in-depth user
            research. We work closely with both your internal teams and external
            stakeholders to establish the functional and non-functional
            requirements of your software product, analyze competitors, and
            develop initial low-fidelity prototypes.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>UX Design</h2>
          <p>
            Our UX design services encompass creating customer journey maps,
            user flows, and detailed diagrams. This enables us to understand how
            users will engage with UI elements and ensure alignment with your
            solution's features. Additionally, we will help you develop
            comprehensive design guidelines that reflect your brand's identity.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Prototyping</h2>
          <p>
            To confirm the assumptions from the earlier phase, our UI/UX design
            team will create high-fidelity prototypes using industry-leading
            tools. These prototypes will undergo several iterations to ensure
            that the final concept fully aligns with both your expectations and
            your customers’ needs.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>UI design</h2>
          <p>
            Our UI design services focus on crafting visually appealing and
            user-friendly interfaces. We ensure that every element enhances the
            user experience while aligning with your brand's identity and goals.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>UI/UX audit and consulting</h2>
          <p>
            Our UI/UX audit and consulting services evaluate your current design
            to identify areas for improvement and provide expert
            recommendations. We help refine user experiences and optimize
            interfaces to better meet your goals and user needs.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Usability testing</h2>
          <p>
            Our usability testing services involve evaluating your product with
            real users to identify usability issues and gather feedback. This
            process ensures that your interface is intuitive, efficient, and
            aligned with user needs and expectations.
          </p>
          <hr />
        </div>
      </div>
      <button type="button" className="appdev-tech-button">
        Let's Build an App{" "}
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="design-section-one-image">
        <div className="design-section-image-one-top">
          <p>
            What our <span>UI/UX design firm excels at</span>
          </p>
        </div>
        <div className="design-section-one-cont">
          <p>
            Even if your software solution is intricate under the hood, its
            UI/UX design should remain straightforward. At our IT company, we
            uphold this principle rigorously, ensuring every product we develop
            emphasizes consistency, responsiveness, and usability
          </p>
        </div>
      </div>

      <div className="design-tech-bottom">
        <div className="design-tech-cont">
          <h2>E-commerce Platforms</h2>
          <p>
            Developing compelling and user-friendly interfaces for online
            stores, focusing on smooth navigation, effective product displays,
            and secure checkout processes.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Mobile Apps</h2>
          <p>
            Crafting intuitive and engaging user interfaces that enhance the
            mobile experience, ensuring ease of use and seamless interactions on
            various devices.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Websites</h2>
          <p>
            Designing visually appealing and functional websites that provide an
            optimal user experience across different screen sizes and devices,
            from desktops to tablets and smartphones.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Dashboards</h2>
          <p>
            Creating interactive and user-friendly dashboards that present data
            clearly and efficiently, enabling users to make informed decisions
            with ease.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Custom Applications</h2>
          <p>
            Tailoring UI/UX designs for bespoke applications, addressing unique
            business requirements and providing solutions that enhance user
            satisfaction and engagement.
          </p>
          <hr />
        </div>
        <div className="design-tech-cont">
          <h2>Enterprise Systems</h2>
          <p>
            Designing complex interfaces for enterprise software that streamline
            workflows, improve productivity, and ensure ease of use for diverse
            user roles.
          </p>
          <hr />
        </div>
      </div>
      <button type="button" className="appdev-tech-button">
        Let's Build an App{" "}
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="design-section-one-image">
        <div className="design-section-image-one-top">
          <p>
            What our <span>UI/UX design firm excels at</span>
          </p>
        </div>
        <div className="design-section-one-cont">
          <p>
            Even if your software solution is intricate under the hood, its
            UI/UX design should remain straightforward. At our IT company, we
            uphold this principle rigorously, ensuring every product we develop
            emphasizes consistency, responsiveness, and usability
          </p>
        </div>
      </div>

      <div className="design-tabs-container">
        <div className="design-tabs-section">
          <div className="design-line">
            <div
              className={activeTab === "Tab1" ? "design-circle active" : "design-circle"}
            ></div>
            <div
              className={activeTab === "Tab2" ? "design-circle active" : "design-circle"}
            ></div>
            <div
              className={activeTab === "Tab3" ? "design-circle active" : "design-circle"}
            ></div>
            <div
              className={activeTab === "Tab4" ? "design-circle active" : "design-circle"}
            ></div>
            <div
              className={activeTab === "Tab5" ? "design-circle active" : "design-circle"}
            ></div>
          </div>
          <div className="design-tabs">
            <button
              className={
                activeTab === "Tab1" ? "design-tab-title active" : "design-tab-title"
              }
              onClick={() => handleTabClick("Tab1")}
            >
              Empathize
            </button>
            <button
              className={
                activeTab === "Tab2" ? "design-tab-title active" : "design-tab-title"
              }
              onClick={() => handleTabClick("Tab2")}
            >
              Define
            </button>
            <button
              className={
                activeTab === "Tab3" ? "design-tab-title active" : "design-tab-title"
              }
              onClick={() => handleTabClick("Tab3")}
            >
               Ideate
            </button>
            <button
              className={
                activeTab === "Tab4" ? "design-tab-title active" : "design-tab-title"
              }
              onClick={() => handleTabClick("Tab4")}
            >
              Prototype
            </button>
            <button
              className={
                activeTab === "Tab5" ? "design-tab-title active" : "design-tab-title"
              }
              onClick={() => handleTabClick("Tab5")}
            >
               Test
            </button>
          </div>
        </div>
        <div className="design-tab-content">
          {activeTab === "Tab1" && (
            <div>
              Understand the needs and challenges of the users or stakeholders.
              This involves research, interviews, and observations to gain
              insights into their experiences and problems.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              Clearly define the problem or challenge based on the insights
              gathered in the empathize stage. This step focuses on framing the
              problem in a way that guides the design process.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              Generate a wide range of ideas and potential solutions. This is
              the brainstorming phase where creativity is encouraged, and no
              idea is too outlandish.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              Create a tangible representation of one or more of the ideas.
              Prototypes can be simple sketches, models, or interactive
              simulations that allow for exploration and testing.
            </div>
          )}
          {activeTab === "Tab5" && (
            <div>
              Evaluate the prototype by testing it with users. Gather feedback
              to understand what works well and what needs improvement. The
              results from testing often lead to refining the design and
              sometimes even revisiting earlier steps in the process.
            </div>
          )}
        </div>
      </div>
      <button type="button" className="appdev-tech-button">
        Hire UI/UX Designer
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>
      <Projects slide={slider_info} />

      <div className="design-section-image">
        <div className="design-section-image-top">
          <h2>
            Why choose our
            <br />
            <span>UI/UX design company?</span>
          </h2>
        </div>
      </div>

      <div className="design-section-bottom">
        <div className="design-section-bottom-cont">
          <div className="design-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Experienced UI/UX design experts:</b> When you hire UI/UX
                  designers at Anchor informatics ltd, you get a team equipped
                  with the right blend of technical and interpersonal skills,
                  certified expertise, advanced tools, and boundless creativity.
                </p>
              </li>
            </ul>
          </div>
          <div className="design-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Customer-centric approach:</b> We prioritize user-centered
                  design principles in every project. No matter who your clients
                  are or what their objectives might be, our UI/UX design firm
                  will develop tailored solutions to meet your specific needs.
                </p>
              </li>
            </ul>
          </div>
          <div className="design-sec-cont">
            <ul>
              <li>
                <p>
                  <b>Established expertise in UI/UX:</b> Our deep experience in
                  UI/UX design and development is supported by a strong
                  portfolio of successful projects. Feel free to explore our
                  work, including our Dribbble profile.
                </p>
              </li>
            </ul>
          </div>
          <div className="design-sec-cont">
            <ul>
              <li>
                <b>Industry-specific knowledge:</b> We deliver UI/UX services to
                companies across various sectors, such as healthcare, retail,
                education, and logistics. Our team understands the unique
                challenges your business faces and knows how to enhance user
                experience to overcome them.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="appdev-tech-button">
        Partner with our UI/UX design firm
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <Contact />
      <Footer />
    </div>
  );
};

export default Design;
