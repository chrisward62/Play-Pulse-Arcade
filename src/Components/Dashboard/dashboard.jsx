import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Dashboard.css';

const teamMembers = [
    { name: 'Chris Ward', title: 'Website developer and game developer', image: '/pics/member1.jpg' },
    { name: 'Trent Nguyen', title: 'Position', image: '/pics/member1.jpg' },
    { name: 'Thomas Cuevas', title: 'Position', image: '/pics/member1.jpg' },
    { name: 'Duc Ngo', title: 'Position', image: '/pics/member1.jpg' }
];

const featured = [
    { name: 'Card Matching', image: '/cardsHTML/cards.png' },
    { name: 'Futuristic Snake', image: '/snakeHTML/snake.png' },
    { name: 'Sliding Game', image: '/slideHTML/slide.png' },
    { name: 'Ghetto Whack-a-Mole', image: '/wamHTML/wam.png' }
];

const Dashboard = () => {
    console.log("Dashboard is mounting");

    return (
        <div className="dashboard-container">
            <TopNavigation />
            <img src="/pics/Logo.png" alt="Logo" />
            <h1>Welcome back!</h1>
            <h2>Featured games</h2>
            <h3>Find more in the games section!</h3>

            <div className="featured">
                {featured.map(feature => (
                    <div key={feature.name} className="feature">
                        <img src={feature.image} alt={feature.name} />
                        <h3>{feature.name}</h3>
                    </div>
                ))}
            </div>

            {/* Horizontal line */}
            <hr />

            <h2>Meet our team!</h2>
            <div className="team-section">
                {teamMembers.map(member => (
                    <div key={member.name} className="team-member">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
