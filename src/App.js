// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Violence from './pages/Violence';
import Emotion from './pages/Emotion';
import Questionnaire from './pages/Questionnaire';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/violence" element={<Violence />} />
          <Route path="/emotion" element={<Emotion />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
