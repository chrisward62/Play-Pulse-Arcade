import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './TTT.css';

function Tic() {
    return (
      <div className="ttt-container">
        {<TopNavigation />}
        <h1>Tic-Tac-Toe</h1>
        {/* The rest of your dashboard content will go here */}
        <iframe
          src="/tttHTML/index.html"
          title="Tic-Tac-Toe Game"
          width="100%"
          height="800"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  export default Tic;
