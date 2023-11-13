import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Typing.css';

function TypingGame() {
    return (
      <div className="typinggame-container">
        {<TopNavigation />}
        <h1>Typing Game</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/typingHTML/index.html"
          title="Typing Game"
          width="100%"
          height="800"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default TypingGame;
