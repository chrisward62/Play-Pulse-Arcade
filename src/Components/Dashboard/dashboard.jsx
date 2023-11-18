import React, { useState, useEffect } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Dashboard.css';
import { auth } from '../firebase';

const teamMembers = [
    { name: 'Chris Ward', title: 'Website Developer and Game Developer', image: '/pics/member1.jpg' },
    { name: 'Trent Nguyen', title: 'Website Developer and Game Developer', image: '/pics/member2.jpg' },
    { name: 'Thomas Cuevas', title: 'Game Developer', image: '/pics/member3.jpg' },
    { name: 'Duc Ngo', title: 'Game Developer', image: '/pics/member4.jpg' }
];

const featured = [
    { name: 'Card Matching', image: '/cardsHTML/cards.png' },
    { name: 'Futuristic Snake', image: '/snakeHTML/snake.png' },
    { name: 'Sliding Game', image: '/slideHTML/slide.png' },
    { name: 'Ghetto Whack-a-Mole', image: '/wamHTML/wam.png' }
];

const Dashboard = () => {
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        // Check if a user is logged in and set the email
        const user = auth.currentUser;
        if (user) {
            setUserEmail(user.email);
        }
    }, []);

    console.log("Dashboard is mounting");

    return (
        <div className="dashboard-container">
            <TopNavigation />
            <img src="/pics/Logo.png" alt="Logo" />
            <h1>Welcome back{userEmail ? ` ${userEmail}` : ""}!</h1>
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
