import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Account.css';

const Account = () => {
  console.log("Account is mounting");
  return (
      <div className="account-container">
          <TopNavigation /> {/* Updated component name */}
          <h1>Accounts Page</h1>
          {/* The rest of your dashboard content will go here */}
      </div>
  );
}

export default Account;
