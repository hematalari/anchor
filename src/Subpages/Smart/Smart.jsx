import React, { useState } from "react";
import "./Smart.css";
import Nav from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Insight from "/assets/images/insights.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "/anchor/assets/images/smart.png";

const Smart = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav />
      <div className="smart-top">
        <img
          className="smart-bg-img"
          style={{ width: "100%", height: "550px" }}
          src={Insight}
          alt=""
        />
        <div className="smart-cont">
          <div className="smart-info">
            <h2>Smart contract development services</h2>
            <p>
              With a decade of experience in creating cutting-edge software, we
              specialize in developing reliable smart contract solutions for
              enterprises across various sectors and assist smart contract
              startups in bridging expertise gaps.
            </p>
          </div>

          <div className="smart-btn">
            <button>
              Build embedded solutions
              <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
            </button>
          </div>
        </div>
        <div className="smart-image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="smart-section">
        <div className="smart-section-top">
          <h2>
            Embedded software development services tailored to meet your
            specific requirements.
          </h2>
          <p>
            As a software engineering firm with over 5 years of experience,
            we've handled numerous electronic product designs and embedded
            software development projects. Whether you're looking for device
            drivers or a comprehensive operating system that processes data at
            the network edge, we have the expertise to deliver. Our capabilities
            include:
          </p>
        </div>
      </div>

      <div className="smart-tech-list">
        <ul>
          <li>
            Our team of embedded software engineers can help you quickly
            prototype and test your ideas, develop bare-metal firmware,
            real-time operating systems (RTOS), and board support packages, and
            manage over-the-air (OTA) firmware updates. Reach out to us for your
            firmware development needs!
          </li>
          <li>
            Anchor informatics ltd experts specialize in building custom
            middleware that bridges the gap between hardware components,
            devices, and software systems. Our experience includes creating
            reliable device drivers, SDKs, APIs, and connectivity solutions
            powered by AI.
          </li>
          <li>
            Work with us to develop intuitive human-machine interfaces (HMI) for
            a range of applications, including medical devices, industrial
            machinery, consumer electronics, vehicles, and POS systems. We can
            also assist with integrating your devices with voice assistants. As
            part of our embedded software development services, we dive deep
            into operating system customization, tailoring Linux Kernel, AOSP,
            and RTOS to meet your specific needs.
          </li>
          <li>
            Our team will design efficient embedded solutions for connectivity
            and proximity, enabling devices to handle sensor data exchange while
            conserving battery life. We excel in Bluetooth, iBeacon, NFC, and
            RFID technology development.
          </li>
          <li>
            Anchor informatics ltd consultants will thoroughly analyze your
            project, assess the performance requirements, and recommend the best
            technology stack for your embedded software. We also offer
            optimization and code review services to enhance your firmware and
            middleware, ensuring no flaws are left unchecked.
          </li>
        </ul>
      </div>
      <button className="smart-button">
        Hire embedded software engineers
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />
      </button>

      <div className="smart-section-one-image">
        <div className="smart-section-image-one-top">
          <h2>Our procedure for creating smart contracts</h2>
        </div>
        <div className="smart-section-one-cont">
          <p>
            We make sure your company benefits fully from our relationship by
            utilizing field-tested workflows while remaining attentive to your
            demands. Our working relationship follows the following schedule:
          </p>
        </div>
      </div>

      <div className="smart-tabs-container">
        <div className="smart-tabs-section">
          <div className="smart-line">
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
          <div className="smart-tabs">
            <button
              className={
                activeTab === "Tab1"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab1")}
            >
              Strategy & Design
            </button>
            <button
              className={
                activeTab === "Tab2"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab2")}
            >
              Development
            </button>
            <button
              className={
                activeTab === "Tab3"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab3")}
            >
              Audit & Optimization
            </button>
            <button
              className={
                activeTab === "Tab4"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab4")}
            >
              DApp Implementation
            </button>
            <button
              className={
                activeTab === "Tab5"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab5")}
            >
              DEX Implementation
            </button>
            <button
              className={
                activeTab === "Tab6"
                  ? "smart-tab-title active"
                  : "smart-tab-title"
              }
              onClick={() => handleTabClick("Tab6")}
            >
              Digital Wallet Integration
            </button>
          </div>
        </div>
        <div className="smart-tab-content">
          {activeTab === "Tab1" && (
            <div>
              We start by developing a smart contract rollout strategy, defining
              the business logic, and designing a scalable, secure, and
              efficient architecture tailored to your needs.
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              We build a smart contract solution customized to your industry
              requirements, supporting you through the entire process from setup
              to development and final deployment on the appropriate blockchain.
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              We review and analyze your existing smart contracts, optimizing
              the code for better performance and cost-efficiency while
              identifying and addressing any vulnerabilities.
            </div>
          )}
          {activeTab === "Tab4" && (
            <div>
              We create decentralized applications (DApps) that operate on smart
              contracts, ensuring high performance and seamless interaction
              between users.
            </div>
          )}
          {activeTab === "Tab5" && (
            <div>
              We develop decentralized exchanges (DEXs) for blockchain
              platforms, focusing on privacy, data integrity, and efficient
              transaction handling.
            </div>
          )}
          {activeTab === "Tab6" && (
            <div>
              We design and implement digital wallets to facilitate secure
              transactions, integrating them with your smart contract solutions
              to create a comprehensive digital ecosystem.
            </div>
          )}
        </div>
      </div>
      <button type="button" className="smart-button">
        Let’s build your smart contract solution
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="smart-section-two-image">
        <div className="smart-section-image-two-top">
          <h2>Technologies We Use for Smart Contract Development</h2>
        </div>
        <div className="smart-section-two-cont">
          <p>
            As a blockchain consulting firm, we at Anchor informatics ltd stay
            updated on the latest advancements in blockchain technology to
            provide top-tier smart contract solutions. Share your idea with us,
            and we’ll recommend the perfect technology blend to bring it to
            life.
          </p>
        </div>
      </div>

      <div className="smart-cont-bottom">
        <p>
          In smart contract development, we use platforms like{" "}
          <span>
            Ethereum, Binance Smart Chain, Polkadot, Solana, Cardano, and Tezos.
          </span>{" "}
          For programming, we rely on Solidity, Vyper, and Rust, with frameworks
          like <span>Truffle and Hardhat </span>to streamline development and
          testing.
        </p>
      </div>

      <button
        type="button"
        className="smart-button"
        style={{ marginLeft: "100px" }}
      >
        Let’s build your smart contract solution
        <FaLongArrowAltRight style={{ marginBottom: "-5px" }} />{" "}
      </button>

      <div className="smart-section-three-image">
        <div className="smart-section-image-three-top">
          <h2>Smart contract development for diverse industries</h2>
        </div>
        <div
          className="smart-section-three-cont"
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

      <div className="smart-tech-bottom">
        <div className="smart-tech-cont">
          <h2>Healthcare</h2>
          <p>
            Smart contracts can streamline patient data management, automate
            billing and claims processing, and enhance data security and
            interoperability between different healthcare systems.
          </p>
        </div>
        <div className="smart-tech-cont">
          <h2>Supply Chain</h2>
          <p>
            In supply chain management, smart contracts ensure transparency and
            traceability of goods, automate procurement processes, and manage
            supplier agreements, reducing fraud and inefficiencies.
          </p>
        </div>
        <div className="smart-tech-cont">
          <h2>Financial Services</h2>
          <p>
            Smart contracts facilitate automated transactions, improve
            compliance and reporting, and enable secure and transparent trading
            and investment processes in the financial sector.
          </p>
        </div>
        <div className="smart-tech-cont">
          <h2>Legal Sector</h2>
          <p>
            In the legal industry, smart contracts can automate legal
            agreements, streamline contract execution, and manage legal
            documentation, reducing administrative overhead and enhancing
            contract enforcement.
          </p>
        </div>
        <div className="smart-tech-cont">
          <h2>Insurance Industry</h2>
          <p>
            Smart contracts in insurance can automate claims processing, manage
            policy underwriting, and ensure accurate and transparent coverage
            and payouts, improving efficiency and reducing fraud.
          </p>
        </div>
        <div className="smart-tech-cont">
          <h2>Government Agencies</h2>
          <p>
            Governments can use smart contracts for transparent voting systems,
            efficient public records management, and automated compliance with
            regulations, enhancing public trust and operational efficiency.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
      </div>
  )
}

export default Smart;
