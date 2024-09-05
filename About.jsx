import React from 'react';
import { motion } from 'framer-motion';

// Example images, replace with actual URLs
const missionImage = 'https://thumbs.dreamstime.com/z/natural-disaster-text-composition-combined-doodle-style-images-calamities-gradient-background-vector-illustration-165198505.jpg';
const teamImage = 'https://wallpaperaccess.com/full/1907174.jpg';
const valuesImage = 'https://thumbs.dreamstime.com/z/values-word-brick-wall-background-44902449.jpg';

function About() {
  const cardVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, opacity: 1.2 },
    tap: { scale: 0.95, opacity: 1 },
  };

  return (
    <div className="bg-[#9e76ed] text-gray-800 min-h-screen py-12 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mt-10 mb-4">About Us</h1>
        <p className="text-lg mb-8 mt-10">
          Welcome to our disaster management platform. Our mission is to provide timely and accurate information to help you stay safe and prepared during emergencies.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto mb-12"
      >
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        >
          <img src={missionImage} alt="Our Mission" className="w-full h-80 object-cover" />
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to offer real-time updates, emergency tips, and resources for both natural and man-made disasters. We aim to empower communities with the knowledge they need to stay informed and safe.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto mb-12"
      >
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        >
          <img src={teamImage} alt="Our Team" className="w-full h-64 object-cover" />
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg">
              Our team consists of dedicated professionals with extensive experience in disaster management and emergency response. We work tirelessly to ensure that our platform delivers accurate and timely information to all users.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto mb-12"
      >
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        >
          <img src={valuesImage} alt="Our Values" className="w-full h-64 object-cover" />
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-lg">
              We believe in transparency, reliability, and community support. Our values guide us in providing the best possible service and ensuring that our users have the resources they need during emergencies.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center"
      >
        <p className="text-lg">
          For more information or to get involved, feel free to contact us at <a href="mailto:info@disastermanagement.com" className="text-blue-600 hover:underline">info@disastermanagement.com</a>. Together, we can make a difference.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
