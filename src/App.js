import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import Option1 from './Components/Option1/Option1'; // Replace with your actual component
import Option2 from './Components/Option2/Option2'; // Replace with your actual component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/option1" element={<Games />} /> {/* Define these components */}
        <Route path="/option2" element={<Account />} /> {/* Define these components */}
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;
