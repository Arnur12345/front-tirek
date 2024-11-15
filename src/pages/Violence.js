// src/pages/Violence.js
import React from 'react';
import { motion } from 'framer-motion';
import './Page.css';
import videoViolence from '../assets/violencee.mp4';

function Violence() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="page-title">Violence Detection</h1>
      <video controls className="project-video" loop autoPlay muted>
        <source src={videoViolence} type="video/mp4" />
      </video>
      <p className="page-description">
        Demonstrating how our system detects violence in real-time.
      </p>
    </motion.div>
  );
}

export default Violence;
