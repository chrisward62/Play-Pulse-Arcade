import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Wordle.css';

function Wordle() {
    return (
      <div className="wordle-container">
        {<TopNavigation />}
        <h1>Wordle</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/wordleHTML/index.html"
          title="Wordle Game"
          width="100%"
          height="800"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default Wordle;
