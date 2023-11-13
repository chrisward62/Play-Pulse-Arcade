import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Slide.css';

function SlideGame() {
    return (
      <div className="slidegame-container">
        {<TopNavigation />}
        <h1>Slide Game</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/slideHTML/index.html"
          title="Slide Game"
          width="100%"
          height="800"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default SlideGame;
