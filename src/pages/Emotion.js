// src/pages/Emotion.js
import React from 'react';
import { motion } from 'framer-motion';
import './Page.css';
import videoViolence from '../assets/Emotion.mp4';

function Emotion() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="page-title">Emotion Detection</h1>
      <video controls className="project-video">
        <source src={videoViolence} type="video/mp4" />
      </video>
      <p className="page-description">
        Demonstrating how our system recognises sound emotion and emotion in real-time.
      </p>
    </motion.div>
  );
}

export default Emotion;
