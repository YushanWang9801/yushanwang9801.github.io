import React from 'react';
import { motion } from 'framer-motion';
import '../css/MePage.css';

const MePage = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-background text-secondary flex items-center justify-center relative">

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        
        {/* English quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-loose text-secondary/80 italic">
            "So play. Learn. Grow up. Follow your passions.
            <br className="hidden sm:block" />
            Find someone to love. Do your best. Be kind when you can, tough when you need to be.
            <br className="hidden sm:block" />
            Hold on to your friends.
            <br className="hidden sm:block" />
            Don't go against the direction of the painted arrows in the floor.
            <br className="hidden sm:block" />
            You'll be just fine."
          </p>
          
          {/* Attribution */}
          <motion.p
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary/30 mt-8 md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            — Fredrik Backman
            <br />
            <span className="normal-case tracking-normal text-secondary/20">
              Things My Son Needs to Know About the World
            </span>
          </motion.p>
        </motion.div>

      </div>

      {/* Decorative quote mark */}
      <motion.div
        className="absolute top-12 md:top-16 left-6 md:left-12 text-[25vw] md:text-[20vw] leading-none text-secondary/[0.02] pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        "
      </motion.div>

    </div>
  );
};

export default MePage;
