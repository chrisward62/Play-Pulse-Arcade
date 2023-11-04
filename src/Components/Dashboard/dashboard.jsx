import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Dashboard.css';

const Dashboard = () => {
    console.log("Dashboard is mounting");
    return (
        <div className="dashboard-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Dashboard</h1>
            {/* The rest of your dashboard content will go here */}
        </div>
    );
}

export default Dashboard;