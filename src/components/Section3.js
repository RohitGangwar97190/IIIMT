import React from 'react'
import "./Section3.css"
import { useNavigate } from 'react-router'

const Section3 = () => {
  const navigate=useNavigate();
  const clickhandler=()=>{
    navigate("/Acrophobia")
  }
  const clickhandler1=()=>{
    navigate("/Stage")
  }
  return (
    <div className='section3'>
        <div className='section3-left'>
            <h1 className='section3-left-head'>Acrophobia's</h1>
            {/* <button onClick={clickhandler}> */}
            <img src="https://media1.tenor.com/m/mbaqRHcJgmMAAAAd/oh-my-gosh-omg.gif"></img>
            {/* </button> */}

        </div>
        <div className='section3-right'>
         
         <h1 className='section3-right-head'>Performance anxiety</h1>
         {/* <button onClick={clickhandler1}> */}
       <img src="https://media.istockphoto.com/id/1193392391/photo/businessman-with-fear-of-public-speaking.jpg?s=2048x2048&w=is&k=20&c=W99i2G0M1cW4UTL-tW2QSuxyZ1q7NI_FlJguYe9I2Yo="></img>
      {/* </button> */}
        </div>
    </div>
  )
}

export default Section3