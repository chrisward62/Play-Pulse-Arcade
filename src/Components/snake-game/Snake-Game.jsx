import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Snake-Game.css';

function SnakeGame() {
    return (
      <div className="snakegame-container">
        {<TopNavigation />}
        <h1>Snake Game</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/snakeHTML/index.html"
          title="Snake Game"
          width="100%"
          height="800"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default SnakeGame;
