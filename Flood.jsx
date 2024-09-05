import React from 'react';
import { motion } from 'framer-motion';

const Flood = () => {
  return (
    <section className="relative bg-blue-800 text-gray-100 py-12 px-6 md:px-12">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Images Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full"
            >
              <img
                src="https://wallpaperbat.com/img/572873-sally-slams-gulf-coast-with-life-threatening-flooding.jpg"
                alt="Flood"
                className="w-full h-60 mb-20 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="w-full"
            >
              <img
                src="https://im.indiatimes.in/facebook/2016/Aug/a21dcdad-02fb-4d4b-80cf-85417c4d8f59_1470649971_1470649977.jpg"
                alt="Flood Effects"
                className="w-full h-60 mb-20 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="w-full"
            >
              <img
                src="https://i.cbc.ca/1.3593822.1463835651!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/srilanka-floods.jpg"
                alt="Flood Safety"
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-8">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-4xl font-bold mb-4"
            >
              Flood Safety Tips
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-lg mb-6"
            >
              Flooding can cause significant damage and pose serious risks to health and safety. Here’s how you can stay safe during a flood.
            </motion.p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                  Move to higher ground and stay away from floodwaters. Avoid walking or driving through flooded areas.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                >
                  Listen to weather updates and follow local authorities' instructions.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                >
                  Prepare an emergency kit with essential items such as medications, a flashlight, batteries, and important documents.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                  If you are caught in floodwaters, move to the roof or a higher location if possible and signal for help.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              Flood Preparedness
            </motion.h2>
            <p className="text-lg mb-4">
              Being prepared for a flood can greatly improve your safety and response during an emergency. Consider these steps:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                >
                  Develop an emergency plan that includes evacuation routes and a family communication plan.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
                >
                  Elevate electrical appliances and utilities to prevent damage from floodwaters.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
                >
                  Purchase flood insurance if you live in an area prone to flooding.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              After a Flood
            </motion.h2>
            <p className="text-lg mb-4">
              After a flood, it’s crucial to follow proper steps for recovery and ensure continued safety:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.2 }}
                >
                  Avoid contact with floodwater, which may be contaminated. Clean and disinfect your home as needed.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
                >
                  Check for structural damage to your home and avoid entering if it’s unsafe.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.6 }}
                >
                  Follow local authorities' guidance on recovery efforts and rebuilding.
                </motion.span>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2.8 }}
              className="space-y-4"
            >
              <a
                href="https://www.ready.gov/floods"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Learn More About Flood Safety
              </a>
              <a
                href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/flood.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 ml-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Red Cross Flood Safety Guide
              </a>
              <a
                href="https://www.noaa.gov/education/resource-collections/weather-atmosphere/floods"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white ml-4 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                NOAA Flood Information
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flood;
