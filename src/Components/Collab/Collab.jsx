import React from 'react'
import './Collab.css'

const Collab = ({info}) => {
  return (
    <div className='collab-container'>
        <h1 className='collab-top'>How we collaborate with you</h1>
        <div className="collab-wrap">
            {info.map((item,idx)=>{
                return <div key={idx} className="collab-cont">
                    <div className="collab-cont-item">
                        <div className="collab-cont-image">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        <div className="collab-cont-text">
                            <h2>{item.title}</h2>
                            <br />
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    </div>
            })}
        </div>
        <div className="collab-bottom">
                <button type="button" >Let's Collabrate</button>
            </div>
    </div>

  )
}

export default Collab