import React, { useState } from 'react'
import './Ques.css'
import { FaPlus } from "react-icons/fa6";


const Ques = ({in_data}) => {

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
    <div >
         <div className="wrapper">
            {in_data.map((item,i)=>{
              return <div className="insights-wrapper-conatiner" key={i} onClick={() => toggle(i)}>
                <div className="insights-wrapper">
                <h2><img src={item.src} alt={item.alt} />{item.title} </h2>
                <FaPlus className="wrap-icon" /> 
                </div>
                <div
                className={
                  selected === i
                    ? "insights-content-show"
                    : "insights-content"}>
                      <p>{item.content}</p>
                </div>
            </div>
            })}
          </div>
        </div>
  )
}

export default Ques