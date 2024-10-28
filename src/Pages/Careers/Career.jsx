import React from "react";
import "./Career.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import career from "/assets/images/career.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import sec from "/assets/images/career-sec.jpeg";
import image from "/assets/images/career-sec2.jpeg";
import icon1 from "/assets/images/SVGicon1.png";
import icon2 from "/assets/images/SVGicon2.png";
import icon3 from "/assets/images/SVGicon3.png";
import icon4 from "/assets/images/SVGicon4.png";
import image1 from "/assets/images/career-img1.jpeg";
import image2 from "/assets/images/career-img2.jpeg";
import image3 from "/assets/images/career-img3.jpeg";

const Career = () => {
  return (
    <div>
      <Nav />
      <div className="career-top">
        <img
          className="career-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={career}
          alt=""
        />
        <div className="career-cont">
          <div className="career-info">
            <h2>
              Create solutions you
              <br /> can be proud of
            </h2>
            <p>
              Join a team driven by passion. Craft innovative solutions for
              leading global brands, and elevate your skills while you grow.
            </p>
          </div>
        </div>
      </div>

      <div className="career-sec-one">
        <div className="career-sec-img">
          <img src={sec} alt="" />
        </div>
        <div className="career-sec-cont">
          <h2>Who we are</h2>
          <p>
            Anchor Informatics Ltd is a dynamic IT services and consulting
            company dedicated to delivering cutting-edge solutions to a diverse
            range of global clients. Our expertise spans software development,
            digital transformation, and innovative technology solutions. We are
            committed to excellence, driven by a passion for quality, agility,
            and continuous improvement. Our collaborative approach ensures that
            we build strong partnerships with clients, leveraging our top-tier
            expertise to create impactful solutions that drive success and
            growth. At Anchor Informatics, we’re not just about meeting today’s
            needs—we’re shaping the future of technology.
          </p>
        </div>
      </div>

      <div className="career-sec-btm">
        <h2>Our capabilities include:</h2>
        <div className="career-sec-items-container">
          <div className="career-sec-items">
            <img src={icon1} alt="" />
            <p>Artificial intelligence, machine learning and big data</p>
          </div>
          <div className="career-sec-items">
            <img src={icon2} alt="" />
            <p>Embedded systems and the Internet of Things</p>
          </div>
          <div className="career-sec-items">
            <img src={icon3} alt="" />
            <p>Virtual reality, augmented reality and mixed reality</p>
          </div>
          <div className="career-sec-items">
            <img src={icon4} alt="" />
            <p>Intelligent business automation</p>
          </div>
        </div>
      </div>

      <div className="career-sec-two">
        <div className="career-sec-cont">
          <h2>Who’s a Good Fit</h2>
          <p>
            This isn’t for everyone. If you're just looking for a paycheck and
            don't care about the quality of your projects, you might not find
            this environment fulfilling. If you prefer to hide behind policies
            and processes out of fear of taking ownership of ideas or decisions,
            this probably isn’t the place for you. We’re seeking individuals who
            are passionate about their work, eager to take ownership, and ready
            to contribute to meaningful, high-quality projects. If you thrive on
            creativity, responsibility, and making a real impact, you'll thrive
            here.
          </p>
        </div>
        <div className="career-sec-img">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="career-section-one-image">
        <div className="career-section-one-cont">
          <h2>Adaptability and Harmony</h2>
          <p>
            We value dedication, which means putting forth your best effort. It
            doesn’t mean working around the clock; it means working smart and
            effectively.
          </p>
        </div>
        <div className="career-section-image-one-top"></div>
      </div>

      <div className="career-section-bottom">
        <h2>Opportunity and growth</h2>
        <p>
          We expect you to tackle challenging tasks with dedication, supported
          by a team of experienced professionals. You'll face tough decisions
          but will have the freedom to make mistakes and learn from them. With
          the right attitude, you'll rapidly advance your skills and take pride
          in your growth. Additionally, we provide language classes and career
          development opportunities to further support your progress.
        </p>
      </div>
      <div className="career-section-bottom2">
        <p>
          Embark on a new adventure and build a fulfilling life in a dynamic
          city. Discover fresh opportunities and experiences that await you in
          your new home.
        </p>
        <h2>Start a new chapter in a vibrant city.</h2>
      </div>
      <div className="career-section-images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <div className="career-text">
        <div className="career-text-one">
        <h2>Many say they want this</h2>
        <p>
          Some even mean it. <br />If you feel like you’d thrive at ITRex, we’d love
          to hear from you. Please browse through our vacancies and see if
          anything suits you.
        </p>
        </div>
          <div className="career-text-two" style={{backgroundColor:'#F4F4F4', padding:'50px'}}>
            <h2>Still searching for the right opportunity?</h2>
            <button type="submit" className="career-text-btn">Send a CV anyway  <FaLongArrowAltRight style={{ marginBottom: "-5px" }} /></button>
          </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Career;
