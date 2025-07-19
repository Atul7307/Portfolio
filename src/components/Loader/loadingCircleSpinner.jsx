"use client";
import { motion } from 'framer-motion';

const LoadingCircleSpinner = () => {
  return (
    <div className="flex justify-center items-center h-32 w-32">
      <motion.div
        className="h-12 w-12 border-4 border-accent border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  );
};

export default LoadingCircleSpinner;
