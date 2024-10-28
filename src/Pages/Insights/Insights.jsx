import React from "react";
import "./Insights.css";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import ingif from "/assets/images/UX.gif";
import Case from "/assets/images/case-study.png";
import Research from "/assets/images/research.png";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";
import { PiClockClockwiseFill } from "react-icons/pi";
import insight_data from "../../data/insight.js";
import Ques from "../Ques/Ques";
import Contact from '../../Components/Contact/Contact.jsx'

const Insights = (data = {insight_data}) => {
 
  return (
    <div>
      <Nav />
      <div className="insights-top">
        <img
          className="insights-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="insights-cont">
          <div className="insights-info">
            <h2>Insights Artificial Intelligence</h2>
            <h3>Lorem ipsum odor amet, consectetuer adipiscing elit.</h3>
            <p>
              vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae donec velit neque
            </p>
          </div>
          <div className="insights-btn">
            <button>
              Talk to our Experts <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="insight-image">
          <img src={ingif} alt="" />
        </div>
      </div>
      <div className="insights-section">
        <div className="insights-section-top">
          <h2>Cloud computing</h2>
          <p>
            Cloud is a computing model where servers, networks, storage,
            development software, and even applications are available over the
            internet. Instead of companies needing to make large investments to
            buy equipment, train personnel and provide ongoing maintenance, a
            cloud service provider manages some or all of those needs.
          </p>
        </div>
        <div className="insights-section-center">
          <div className="insights-section-center-top">
            <h4>Insights Artificial Intelligence</h4>
            <p>
              It is a series of technologies from machine learning to the
              processing of natural languages that enables machines to feel,
              understand, act and learn. Requirements- Artificial intelligence
              can change people-to-tech relationships, charging our imagination
              and abilities. Future promises a new age of innovation and growth,
              in which speed and precision accelerate human creativity.
            </p>
          </div>
          <hr />
          <div className="insights-section-center-center">
            <h4>Software as a Service (SaaS)</h4>
            <p>
              SaaS is the most commonly used cloud computing infrastructure and
              is becoming a primary way of accessing software resources for
              organisations. An enterprise, through SaaS, accesses a particular
              software program that is hosted on a remote server and controlled
              by a third party provider. The program is accessed through a web
              browser on a subscription basis, thus eliminating the need for
              on-device software downloads or updates. Salesforce, Workday, or
              Microsoft Office 365 are common SaaS products.
            </p>
          </div>
          <hr />
          <div className="insights-section-center-bottom">
            <h4>AI-driven process automation</h4>
            <p>
              By adding computer vision, natural language processing, and fuzzy
              logic to digital process automation solutions, we create systems
              that retrieve unstructured data from a host of enterprise apps,
              boil the information down to meaningful insights, act on it, and
              orchestrate workflows across your company — all with little to no
              involvement on your part.
            </p>
          </div>
          <button className="insights-cont-btn">
            Automate to Innovation{" "}
            <FaLongArrowAltRight className="insight-icon" />
          </button>
        </div>
        <div className="insights-section-bottom">
          <h3>AI Innovations at Anchor Informatics</h3>
          <Ques in_data={insight_data} />
        </div>
        <div className="insights-bottom-cont">
          <div className="insights-bottom-cont-title">
            <h3>The Future of AI</h3>
            <p>
              The Future of AI involves advancing technologies like quantum
              computing and edge AI to enhance real-time processing and
              decision-making. It emphasizes ethical development to ensure
              transparency and fairness while leveraging AI for social good,
              such as improving healthcare and environmental sustainability.
              AI's role will increasingly focus on augmenting human capabilities
              and transforming industries through personalized and intelligent
              solutions.
            </p>
          </div>
          <div className="insights-bottom-cont-wrap">
            <div className="bottom-wrap-item" id="item1">
              <h2>Pioneering AI Research</h2>
              <p>
                At Anchor Informatics, we are dedicated to staying at the
                forefront of AI innovation. Our focus is on developing advanced
                machine learning models, exploring the potential of quantum
                computing, and integrating AI with edge computing to bring
                real-time intelligence to devices and systems across industries.
              </p>
            </div>
            <div className="bottom-wrap-item" id="item2">
              <h2>Ethical AI Practices</h2>
              <p>
                We are committed to responsible AI development. This means
                creating AI solutions that are transparent, fair, and unbiased.
                As AI continues to play a more significant role in
                decision-making processes, we prioritize ethical considerations
                to ensure that our technologies contribute positively to
                society.{" "}
              </p>
            </div>
            <div className="bottom-wrap-item" id="item2">
              <h2>AI-Driven Personalization</h2>
              <p>
                We believe that the future of AI lies in its ability to offer
                hyper-personalized experiences. Whether it’s in healthcare,
                education, or customer service, our AI solutions are designed to
                understand and cater to individual needs, providing tailored and
                effective outcomes.
              </p>
            </div>
            <div className="bottom-wrap-item" id="item1">
              <h2>AI for Social Impact</h2>
              <p>
                The future of AI is not just about technological advancements
                but also about making a difference. We are leveraging AI to
                address global challenges, from improving healthcare
                accessibility and educational outcomes to tackling environmental
                issues and enhancing disaster response efforts.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form-section" >
          <div className="contact-form-container" >
          <div className="contact-form-right">
            <h2>Get a personal consultation.</h2>
           <span><TiLocationOutline className='icon'/>Location </span>
           <p>Head-Office :184 Heigham Road LondonE6 2JH U.K. <br />  
            Branch-Office : Vaishnavi's Cynosure,Gachibowli, Hyderabad, Telangana 500032</p>
           <span><IoIosContact  className='icon' />Contact</span> 
           <p>+44 7438 846089<br />  
            rafi@anchorinformatics.com</p>
           <span><PiClockClockwiseFill  className='icon' />Open Hours</span>
           <p>Monday - Friday: 9am - 6pm</p>
          </div>
          <div className="cont-form">
          <form>
          <div className="form-cont">
            <label htmlFor="">Name*</label><br />
            <input
          type="text"
          id="name"
          name="name"
          required
        />
        </div>
        <div className="form-cont">
            <label htmlFor="">Email*</label><br />
            <input
          type="email"
          id="email"
          name="email"
          required
        />
         </div>
         <div className="form-cont">
            <label htmlFor="">Phone.no*</label><br />
            <input
          type="tel"
          id="phone"
          name="phone"

        />
         </div>
         <div className="form-cont">
            <label htmlFor="">How can we help you?</label><br />
            <textarea
          id="projectInfo"
          name="projectInfo"
          required
        ></textarea>
         </div>
          </form>
          <button type='submit' className='form-cont-btn'>Request a call</button>
          </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Insights;
