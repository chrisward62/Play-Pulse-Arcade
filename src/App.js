import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup'; // Adjust the path if necessary
import Dashboard from './Components/Dashboard/dashboard';
import Games from './Components/Games/Games'; // Make sure the path is correct
import Account from './Components/Account/Account'; // Make sure the path is correct
import SnakeGame from './Components/snake-game/Snake-Game';
import Wam from './Components/wam/wam';
import TypingGame from './Components/Typing/Typing';
import SlideGame from './Components/Slide/Slide';
import CardGame from './Components/CardGame/CardGame';
import Game2048 from './Components/2048/2048';
import Tic from './Components/TTT/TTT';
import Wordle from './Components/Wordle/Wordle';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/account" element={<Account />} />
        <Route path="/snake-game" element={<SnakeGame />} />
        <Route path="/wam" element={<Wam />} />
        <Route path="/Typing" element={<TypingGame />} />
        <Route path="/Slide" element={<SlideGame />} />
        <Route path="/CardGame" element={<CardGame />} />
        <Route path="/2048" element={<Game2048 />} />
        <Route path="/TTT" element={<Tic />} />
        <Route path="/Wordle" element={<Wordle />} />





        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;