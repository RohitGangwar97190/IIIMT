import React from 'react';

import { useState } from 'react';
import './Goal.css';

const Goal = () => {
  
    const [activeIndex, setActiveIndex] = useState(null);
    const questions = [
     
      {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        question: 'Why use React?',
        answer: 'React allows developers to create reusable UI components and manage the application state efficiently.',
      },
      {
        question: 'How to install React?',
        answer: 'You can install React using npm or yarn by running "npm install react" or "yarn add react".',
      },
    ];
    
    const handleQuestionClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <div className="Goal-main">
      <h1 className="goal-main-heading">OUR Goal</h1>
      <div className="goal-main-box">
        <div className="goal-box">
        {questions.map((q, index) => (
        <div key={index}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => handleQuestionClick(index)}
          >
            <strong>{q.question}</strong>
            {activeIndex === index ? '  -' : '  +'}
          </div>
          {activeIndex === index && <div>{q.answer}</div>}
        </div>
      ))}
        </div>
        <div className="goal-box">
          <img src="https://i.pinimg.com/originals/96/c6/2e/96c62e6662af988acd3668bf3c2b014f.gif" height="380px" width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default Goal;
