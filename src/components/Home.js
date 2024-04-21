// src/components/InfiniteScrollingText.js
import React, { useState, useEffect } from 'react';
import './Scroll.css';

const InfiniteScrollingText = ({ text }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setOffset((prevOffset) => prevOffset - 1);
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="infinite-scrolling-text">
      <div className="text-container" style={{ transform: `translateY(${offset}px)` }}>
        {text}
      </div>
    </div>
  );
};

export default InfiniteScrollingText;
