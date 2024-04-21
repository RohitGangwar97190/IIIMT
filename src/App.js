import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Home from './components/Home'
import Section1 from './components/Section1'
import Acrophobia from './components/Acrophobia'
import Stage from './components/Stage'
import {Route,Routes} from "react-router-dom"
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import LoginPage from './components/Login'
import Goal from './components/Goal'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<><Navbar/>
      
      <Section1/>
      <About/>
      <Goal/>
      <Service/>
      
     
      {/* <Section4/> */}
      

      </>
    }></Route>
        {/* <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
        <Route path="/" element={<Home/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
