import React from 'react'
import "./Section2.css"
import chatbot from "./Chatbot.gif";

import { useNavigate } from 'react-router-dom';


const Section2 = () => {
    const  navigate=useNavigate();
    function handleClick() {
        navigate('/Service')
      }
  return (
    <div>
        <div className='section2'>
        <div className='section2-left'>
          
            <h2>Overcome Services</h2>
           
            
        </div>
        <div className='section2-right'>
        
        <button onClick={handleClick}><img src="https://i.pinimg.com/originals/aa/29/c3/aa29c30acb037c359bff34f60f6fb0df.gif" alt="logo"  height="325px"  width="80%"/></button>
        </div>
    </div>
    </div>
  )
}

export default Section2