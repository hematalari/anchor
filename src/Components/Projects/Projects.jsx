import React,{Component}from 'react'
import "./Projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" , borderRadius: "50px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue", borderRadius: "50px" }}
        onClick={onClick}
      />
    );
  }
const Projects = ({slide}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow style={{width:"40px", height:"40px"}}/>,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='case-wrapper'>
        <div className="wrapper-top">
            <h2 className='wrapper-top-title'>Latest Projects</h2>
        </div>
        <div className="swiper-container">
        <Slider {...settings}>
        {slide.map((item,idx)=>{
            return <div className="swiper-box-cont" key={idx}>
                <div  className="swiper-box">
                    <img src={item.src} alt={item.alt} />
                    <h3>{item.title} <FaLongArrowAltRight /> </h3>
                    <p>{item.desc}</p>
                </div>
            </div>
        })}
        </Slider>
        </div>
        <div className="wrapper-bottom">
          <a href='/anchor/Services'>View all cases < IoIosArrowDroprightCircle style={{fontSize:"20px", marginLeft:"10px" }} /></a>
          <button className='wrapper-btn'>Start your innovation journey</button>
        </div>
    </div>
  );
}

export default Projects;