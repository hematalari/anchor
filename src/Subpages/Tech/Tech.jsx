import React from 'react'
import './Tech.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const Tech = ({data}) => {
  return (
    <div>
        <div className="tech-section">
            {data.map((item, i)=>{
                return <div key={i} className="tech-container">
                    <img src={item.src} alt='' />
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <h1>{item.tech}</h1>
                </div>
            })}
        </div>
            <button className='tech-btn' type='submit'>Tell us your Web Development needs <FaLongArrowAltRight  style={{marginBottom:'-5px'}}/></button>
    </div>
  )
}

export default Tech