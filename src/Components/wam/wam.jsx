import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './wam.css';

function wam() {
    return (
      <div className="wamgame-container">
        {<TopNavigation />}
        <h1>Whack-a-Mole Game</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/wamHTML/index.html"
          title="Whack-a-Mole Game"
          width="40%"
          height="900"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default wam;
