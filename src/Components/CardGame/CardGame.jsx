import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './CardGame.css';

function CardGame() {
    return (
      <div className="cardgame-container">
        {<TopNavigation />}
        <h1>Card Game</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/cardsHTML/index.html"
          title="Card Game"
          width="40%"
          height="900"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default CardGame;
