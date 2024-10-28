import React from 'react'
import './Scroll.css'
import Marquee from 'react-fast-marquee'

const Scroll = () => {
  return (
    <div className='Scroll'>
        <Marquee speed="100" direction="left" height="100px" width="100%" >
            <div className="Scroll-text">
            <div className="Scroll-text text1">
                <span>This is a Sample Text</span>
                <span>We are a global experience digital agency</span>
                <span>& digital strategies</span>
            </div>
            <div className="Scroll-text text2">
                <span>This is a Sample Text</span>
                <span>We are a global experience digital agency</span>
                <span>& digital strategies</span>
            </div>
            </div>
        </Marquee>
    </div>
  )
}

export default Scroll