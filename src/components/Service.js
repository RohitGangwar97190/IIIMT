import React from 'react';
import './Service.css';
import { BsHeadsetVr } from "react-icons/bs";
import { SiChatbot } from "react-icons/si";
import { FaStreetView } from "react-icons/fa"; 
import { SiPandas } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { MdCastForEducation } from "react-icons/md";      


const Service = () => {
  return (
    <div className="service-main">
      <h1 className="service-main-heading">Our Service</h1>
      <div><p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p></div>
      <div className="service-main-box">
        <div className="service-box">
        <BsHeadsetVr />
        <h3>AR/VR Exposure Therapy</h3>
        <p>Face your fears in a safe, controlled virtual environment with the guidance of an experienced therapist</p>
        </div>
        <div className="service-box">
       <SiPandas/>
        <h3>Machine Learning-powered Personalization</h3>
<p>Our ML algorithms personalize your therapy journey, optimizing exposure levels for maximum&nbsp;progres</p>
        </div>
        <div className="service-box">
        <FontAwesomeIcon icon="fa-solid fa-robot" />
        <SiChatbot/>
          <h3>Personalized chatbot</h3>
          <p>Our AI chatbot is here to listen and offer support whenever it's available.  Ask questions, share anxieties, and access a library of resources to manage your fears between&nbsp;AR/VR&nbsp;sessions</p>
        </div>
        <div className="service-box">
     < MdCastForEducation />      
        
          <h3>Provide educational content</h3>
          <p>This could be blog posts, articles, white papers, or infographics that educate your target audience about your industry, products,&nbsp;or&nbsp;services.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
