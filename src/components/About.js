
import React from 'react';
import './About.css';
import { FcAdvance } from "react-icons/fc";
import { CgBorderStyleSolid } from "react-icons/cg";

const About = () => {
  return (
    <div className="About-main">
      <li>
      
      <h1 className="About-heading">About Us</h1>
      </li>
      <div className="About-main-box">
        <div className="About-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <ul>
          <li>
     <FcAdvance />
Ullamco laboris nisi ut aliquip ex ea commodo consequat
</li>
<li>
<FcAdvance />
Duis aute irure dolor in reprehenderit in voluptate velit
</li>
<li>
<FcAdvance />
Ullamco laboris nisi ut aliquip ex ea commodo consequat
</li>
</ul>
        </div>
        <div className="About-box">Many phobias start because of a bad experience or panic attack related to a specific object or situation. Sometimes even seeing or hearing about a bad experience can be enough to trigger a phobia</div>
        
      </div>
    </div>
  );
};

export default About;
