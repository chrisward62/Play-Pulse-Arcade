import React, { useState, useEffect } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import './Account.css';
import { auth } from '../firebase';
import { updatePassword } from 'firebase/auth';

const Account = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const handleChangePassword = () => {
    // You can implement a modal or redirect to a password change form
    // For simplicity, let's just ask for the new password via a prompt
    const newPassword = prompt("Please enter your new password:");
    if (newPassword) {
      const user = auth.currentUser;
      updatePassword(user, newPassword).then(() => {
        alert("Password updated successfully!");
      }).catch((error) => {
        alert("Error updating password:", error.message);
      });
    }
  };

  return (
    <div className="account-container">
      <TopNavigation />
      <h1>Accounts Page</h1>
      <h2>{userEmail ? `Email: ${userEmail}` : 'No user is currently logged in.'}</h2>
      {/* Change Password Button */}
      <button onClick={handleChangePassword} className="change-password-button">
        Change Password
      </button>
    </div>
  );
}

export default Account;
