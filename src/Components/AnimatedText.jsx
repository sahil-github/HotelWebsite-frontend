import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

/**
 * AnimatedText Component
 * Provides a smooth fade-up reveal effect for text.
 * 
 * @param {Object} props
 * @param {string|React.ReactNode} props.children - The text or elements to animate
 * @param {number} [props.delay=0] - Delay before the animation starts (in seconds)
 * @param {number} [props.duration=0.8] - Duration of the animation (in seconds)
 * @param {string} [props.variant="h1"] - MUI Typography variant
 * @param {Object} [props.sx={}] - MUI Sx props
 * @param {boolean} [props.staggerChildren=false] - Whether to stagger children
 */
const AnimatedText = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  variant = "body1", 
  sx = {},
  once = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for smooth motion
      }}
    >
      <Typography variant={variant} sx={sx} {...props}>
        {children}
      </Typography>
    </motion.div>
  );
};

export default AnimatedText;
