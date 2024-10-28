import React from 'react'
import './Hero.css'
import Video from '/assets/images/video.mp4'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
        words:['New' , 'Future', 'Value', 'Big'],
        loop:{},
        typeSpeed:250,
        deleteSpeed:150
    });
   
  return (
    <div className='Hero'>
      <video autoPlay loop muted className="bg-vid"><source src={Video} type="video/mp4" /> </video>
      <div className="Hero-content">
        <div className="Hero-title">
            <h1>We are a global experience digital agency.</h1>
            <p>that creates innovative digital strategies</p>
         </div>
         <div className="Hero-text">
                <div className="Hero-wrap">
                    <h2 style={{color:'white', fontSize:"26px"}}>
                    We think {' '}
                    <span style={{fontWeight:"bold", color:"#ffdb3b"}}>
                     {text}
                    </span>
                    <span style={{color:"#ffdb3b"}}>
                     <Cursor cursorStyle= "" />
                    </span>
                    </h2>
                   <button type="submit" className='btn'>Let's Talk</button>
                </div>
         </div>
        </div>
    </div>
  )
}

export default Hero