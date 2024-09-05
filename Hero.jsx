import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

function Hero() {
  const navigate = useNavigate();

  const handleWeatherButtonClick = () => {
    console.log('Weather button clicked'); // Log message for debugging
    navigate('/weather'); // Navigate to the /weather route
  };

  return (
    <section className="relative z-2 overflow-hidden h-screen flex flex-col justify-center items-center text-center px-6 py-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-[url('https://wallpapercave.com/wp/wp2381600.jpg')]  bg-cover"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Stay Informed and Prepared for Any Disaster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="text-lg mb-6"
        >
          Real-time updates, emergency tips, and resources for natural and man-made disasters.
        </motion.p>
        <div>
          <Link
            to="Herosec" // Scroll to the section with this ID
            smooth={true}
            duration={1000}
            offset={-70} // Adjust offset if needed
          >
            <motion.a
              href="#"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              Get Started
            </motion.a>
          </Link>
          <motion.button
            onClick={handleWeatherButtonClick}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-white text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Browse Weather
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
