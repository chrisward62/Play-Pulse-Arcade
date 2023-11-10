import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Games.css';

const Games = () => {
    console.log("games is mounting");
    return (
        <div className="games-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Games Page</h1>
            {/* The rest of your dashboard content will go here */}
        </div>
    );
}

export default Games;