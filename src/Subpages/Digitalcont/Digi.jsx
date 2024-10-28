import React from 'react'
import './Digi.css'

const Digi = ({digital_data}) => {
  return (
    <div className='digi'>
        <div className="digi-wrap">
            {digital_data.map((item, id)=>{
                return <div key={id} className="digi-cont">
                    <div className="digi-top">
                        <img src={item.src} alt={item.alt} />
                        <h2>{item.title}</h2>
                    </div>
                    <div className="digi-bottom">
                        <p>{item.desc}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Digi