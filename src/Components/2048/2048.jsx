import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './2048.css';

function Game2048() {
    return (
      <div className="d2048-container">
        {<TopNavigation />}
        <h1>2048</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/2048HTML/index.html"
          title="2048"
          width="40%"
          height="900"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default Game2048;
