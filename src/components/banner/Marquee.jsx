import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.module.css';

const variants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
};

export const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div className="track" variants={variants} animate="animate">
          <h1>
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
