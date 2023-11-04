import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup'; // Adjust the path if necessary
import Dashboard from './Components/Dashboard/dashboard';
import Games from './Components/Games/Games'; // Make sure the path is correct
import Account from './Components/Account/Account'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/account" element={<Account />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;