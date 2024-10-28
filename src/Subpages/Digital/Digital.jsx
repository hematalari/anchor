import React from "react";
import "./Digital.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import digital from "/anchor/assets/images/digital-banner.png";
import Digi from "../Digitalcont/Digi";
import digital_data from "../../data/digital";
import Sideimage from "/anchor/assets/images/digital-side-img.png";
import Projects from "../../Components/Projects/Projects.jsx";
import slider_info from "../../data/slider.js";

const Digital = () => {
  return (
    <div>
      <Nav />
      <div className="digital-top">
        <img
          className="digital-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="digital-cont">
          <div className="digital-info">
            <h2>Digital Marketing</h2>
            <p>
              We design impactful digital marketing strategies that amplify your
              brand, increase engagement, and drive measurable results.
            </p>
          </div>

          <div className="digital-btn">
            <button>
              Drop Us a Line
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="digital-image">
          <img src={digital} alt="" />
        </div>
      </div>

      <div className="digital-section">
        <div className="digital-section-top">
          <h2>
            Distinctive Digital Marketing Strategies Designed for Your Brand’s
            Growth
          </h2>
          <p>
            We create impactful digital marketing strategies and campaigns
            tailored to meet your business goals. Our approach transforms
            initial ideas into comprehensive solutions that drive engagement and
            growth, reaching and resonating with millions of users.
          </p>
        </div>
      </div>
      <Digi digital_data={digital_data} />
      <button className="digital-button">
        Drop us a Line
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="digital-section-one-image">
        <div className="digital-section-image-one-top">
          <h2>
            Expert support at every stage of your{" "}
            <span>web development journey.</span>
          </h2>
          <img src={Sideimage} alt="" />
        </div>
        <div className="digital-section-one-cont">
          <p>
            Anchor Informatics Ltd. is a leading digital marketing agency. Our
            team of skilled strategists, content creators, social media
            managers, and analytics experts work together to deliver outstanding
            digital marketing solutions. We offer comprehensive services,
            including targeted ad campaigns, engaging content creation, and
            data-driven insights to drive brand growth and maximize online
            presence
          </p>
        </div>
      </div>

      <div className="digital-tech-bottom">
        <div className="digital-tech-cont">
          <h2>Research & Discovery</h2>
          <p>
            In the Research & Discovery phase, we delve into understanding the
            client's goals, target audience, and key performance indicators
            (KPIs). We conduct thorough market analysis to assess industry
            trends, competitor strategies, and audience behavior, uncovering
            opportunities and challenges. Additionally, we gather insights into
            the target audience's preferences, demographics, and online
            behaviors to tailor our approach effectively.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2>Strategy Development</h2>
          <p>
            In the Strategy Development phase, we establish clear and measurable
            objectives for the digital marketing campaign, focusing on goals
            like enhancing brand awareness, generating leads, or driving sales.
            We select the most appropriate digital channels—such as social
            media, email, and search engines—based on the target audience and
            campaign goals. Additionally, we craft a content strategy that
            outlines how to create and distribute engaging content that
            resonates with the audience and aligns with the brand's messaging.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2>Campaign Creation</h2>
          <p>
            In the Content Creation phase, we produce engaging materials
            tailored to each digital channel, such as blog posts, social media
            updates, videos, and infographics. We also design impactful
            advertisements with compelling graphics, persuasive copy, and clear
            calls-to-action (CTAs) to connect with the target audience.
            Additionally, we develop optimized landing pages that align with
            campaign objectives and effectively drive conversions.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2> Implementation</h2>
          <p>
            During the Campaign Launch phase, we execute the digital marketing
            strategy by scheduling posts, launching advertisements, and
            distributing content across selected channels. We also focus on SEO
            optimization to enhance the visibility of all digital content,
            improve search engine rankings, and drive organic traffic.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2> Monitoring & Optimization</h2>
          <p>
            In the Performance Tracking phase, we use analytics tools such as
            Google Analytics and social media insights to monitor key metrics,
            including traffic, engagement, and conversions. We conduct A/B
            testing to compare various strategies, ad variations, or content
            types to identify the most effective approaches. Based on these
            insights, we make data-driven adjustments to refine the campaign and
            enhance overall results.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2> Reporting & Analysis</h2>
          <p>
            In the Data Analysis phase, we evaluate the collected data to assess
            how well the campaign met its objectives. We then create detailed
            reports that outline campaign performance, provide insights, and
            offer recommendations for future improvements. Finally, we present
            these findings to the client, highlighting key achievements and
            identifying areas for enhancement.
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2>Continuous Improvement</h2>
          <p>
            During Feedback Collection, we gather input from the client and
            stakeholders to understand their perspectives and expectations.
            Using this feedback and performance data, we refine and enhance
            digital marketing strategies to optimize future campaigns and better
            meet objectives. 4o mini
          </p>
        </div>
        <div className="digital-tech-cont">
          <h2>Ongoing Support</h2>
          <p>
            In Campaign Management, we offer continuous support for digital
            marketing activities, including updating content, optimizing ads,
            and resolving any issues that may arise. We also engage in Trend
            Monitoring to stay informed about the latest digital marketing
            trends and best practices, ensuring that our strategies remain
            current and effective.
          </p>
        </div>
      </div>
      <button className="digital-button">
        Get inTouch
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="digital-slider-bottom">
        <h2>Technologies We Utilize</h2>
      </div>

      <div className="digital-tech-list">
        <ul>
          <li>
            <b>Search Engine Optimization (SEO) Tools:</b> Platforms like Google
            Analytics, SEMrush, and Ahrefs for keyword research, site audits,
            and performance tracking.
          </li>
          <li><b>Content Management Systems (CMS):</b> Systems
            like WordPress, HubSpot, and Drupal for creating, managing, and
            optimizing digital content</li>
          <li><b>Social Media Management Tools: </b>Tools
            like Hootsuite, Buffer, and Sprout Social for scheduling,
            monitoring, and analyzing social media campaigns.</li>
          <li><b>Email Marketing
            Platforms: </b>Services like Mailchimp, SendGrid, and Constant Contact
            for creating and managing email marketing campaigns</li>
          <li><b>Pay-Per-Click
            (PPC) Advertising Tools: </b>Platforms like Google Ads, Facebook Ads
            Manager, and Bing Ads for managing paid search and social media
            advertising.</li>
          <li><b>Customer Relationship Management (CRM) Systems:</b> Systems
            like Salesforce, HubSpot CRM, and Zoho CRM for managing customer
            interactions and data.</li>
          <li><b>Marketing Automation Software:</b> Tools like
            Marketo, HubSpot, and Pardot for automating marketing tasks and
            workflows.</li>
          <li><b>Analytics and Reporting Tools:</b> Platforms like Google
            Analytics, Tableau, and Adobe Analytics for tracking and analyzing
            marketing performance data.</li>
          <li><b>A/B Testing Tools: </b>Tools like
            Optimizely, Unbounce, and VWO for testing different versions of
            marketing content and strategies.</li>
          <li><b>Video Marketing Tools:</b>Platforms
            like Wistia, Vimeo, and YouTube for creating, hosting, and
            distributing video content.</li>
        </ul>
      </div>
      <div className="web-section-image-bottom">
        <Projects slide={slider_info}/>
      </div>
      <button type="button" className="web-tech-button" style={{borderRadius:'4px', marginBottom:"30px"}}>
      Talk to web development experts <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <Contact />
      <Footer />
    </div>
  );
};

export default Digital;
