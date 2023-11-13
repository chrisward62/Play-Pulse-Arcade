import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Dashboard.css';

const teamMembers = [
    { name: 'Chris Ward', title: 'Website developer and game developer', image: '/pics/member1.jpg' },
    { name: 'Trent Nguyen', title: 'Position', image: '/pics/member1.jpg' },
    { name: 'Thomas Cuevas', title: 'Position', image: '/pics/member1.jpg' },
    { name: 'Duc Ngo', title: 'Position', image: '/pics/member1.jpg' }
];

const Dashboard = () => {
    console.log("Dashboard is mounting");

    return (
        <div className="dashboard-container">
            <TopNavigation />
            <img src="/pics/Logo.png" alt="Logo" />
            <h1>Dashboard</h1>
            <h2>Welcome back!</h2>
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
