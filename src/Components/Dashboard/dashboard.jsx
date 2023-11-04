import React from 'react';
import Navbar from '/Navbar/Navbar'; // Adjust the path if necessary
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar /> {/* Include the Navbar at the top */}
            <h1>Dashboard</h1>
            {/* The rest of your dashboard content will go here */}
        </div>
    );
}

export default Dashboard;
