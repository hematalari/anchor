import React, { useState } from 'react'
import './Content.css'
import { FaLongArrowAltDown , FaLongArrowAltUp , FaArrowCircleRight } from "react-icons/fa";


const Content = ({data}) => {

    const [selected, setSelected] = useState(null)
    
    const toggle = (i)=>{
        if(selected === i){
            return setSelected(null)
        }
        else{
            setSelected(i)
        }
    }
  return (
    <div className='block yellow'>
        <div className="content-wrap">
                <h1 className='content-title'>How we can help you</h1>
            {data.map((item, i)=>{
                return <div className="content-cont" key={i}>
                <div  className="content-cont-item" onClick={()=>toggle(i)} >
                    <div className="content-cont-header">
                    <img src={item.src} alt={item.alt} />
                    </div>
                    <div className="content-cont-text">
                    <h2>{item.itenary}</h2>
                    <h3>{item.title}</h3>
                    <div className="content-cont-indicator">
                    <FaLongArrowAltDown />
                    </div>
                    </div>
                </div>
                <div className={selected === i ? "cont-para-show" : "cont-para"}>
                   <p> {item.content}</p>
                   <a href='/anchor/Contact'><FaArrowCircleRight style={{color:"#4861fc" , width:"40px", height:"30px"}}/></a>
                 </div>   
            </div>
            })}
            <button className='content-cont-btn'>Discuss My Projects</button>
            </div>
        </div>
  )
}

export default Content