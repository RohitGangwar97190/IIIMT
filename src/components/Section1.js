import React from 'react'
import png from "./png.png"
import "./Section1.css"

import Typed from 'typed.js';
import { useRef ,useEffect} from 'react';

const Section1 = () => {
    const element=useRef(null);
   useEffect(()=>{
    const typed=new Typed(element.current,{
        strings:["FEAR","PHOBIA", "STRESS"],
        startDelay:500,
        typespeed:100,
        
        smartBackspace:true,
        showCursor:false,
        loop:true,
      });
          
   });
  return (
    <div>
        <div className='section1'>
        <div className='section1-left'>
            <h1>OvERCoMe</h1>
           <h3>It-s all about <span ref={element}></span></h3> 

        </div>
        <div className='section1-right'>
            <img src={png} alt=""  ></img>
        </div>
        </div>
    </div> 
  )
}

export default Section1
