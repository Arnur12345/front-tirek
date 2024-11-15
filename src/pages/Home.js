// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="home-title">Tirek Military</h1>
      <p className="home-subtitle">Innovative Solutions for Military Safety</p>
    </motion.div>
  );
}

export default Home;
