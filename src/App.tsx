import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import TipCalculator from './pages/TipCalculator/TipCalculator.tsx';

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/tips">Tip Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<TipCalculator />} />
      </Routes>
    </div>
  );
}

export default App;