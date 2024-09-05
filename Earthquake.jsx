import React from 'react';
import { motion } from 'framer-motion';

const Earthquake = () => {
  return (
    <section className="relative bg-sky-500 text-gray-100 py-12 px-6 md:px-12">
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
                src="https://wallpaperaccess.com/full/2142389.jpg"
                alt="Earthquake Safety"
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
                src="https://www.mnnonline.org/wp-content/uploads/2015/05/earthquake-survivor.jpg"
                alt="Emergency Kit"
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
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230211-turkey-earthquake-rescue-workers-mjf-1046-ca7977.jpg"
                alt="Building Damage"
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
              Earthquake Safety Tips
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-lg mb-6"
            >
              Earthquakes can strike without warning and cause significant damage. Follow these safety tips to protect yourself and others during and after an earthquake.
            </motion.p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                  Drop, Cover, and Hold On during shaking. Drop to your hands and knees, cover your head and neck, and hold on until shaking stops.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                >
                  Stay indoors if you are inside and move away from windows and heavy objects.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                >
                  If outside, move away from buildings, streetlights, and utility wires. Drop to the ground and protect your head and neck.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                  After the shaking stops, check for injuries and hazards. Be prepared for aftershocks.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              Earthquake Preparedness
            </motion.h2>
            <p className="text-lg mb-4">
              Proper preparation can significantly reduce the risk and impact of an earthquake. Here are some steps you can take to prepare:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                >
                  Secure heavy furniture and appliances to the wall to prevent them from falling during an earthquake.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
                >
                  Create an emergency kit with essential supplies, including water, non-perishable food, first-aid items, and a flashlight.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
                >
                  Develop a family emergency plan that includes meeting points and communication methods.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              Post-Earthquake Actions
            </motion.h2>
            <p className="text-lg mb-4">
              After an earthquake, take the following actions to ensure safety and recovery:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.2 }}
                >
                  Inspect your home for damage and make sure it's safe to enter. Turn off utilities if you suspect leaks.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
                >
                  Avoid using the phone except for emergencies. Use text messages to communicate if possible.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.6 }}
                >
                  Follow local news for updates and information about aftershocks and recovery efforts.
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
                href="https://www.fema.gov/emergency-managers/risk-management/earthquake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Learn More About Earthquake Safety
              </a>
              <a
                href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Red Cross Earthquake Safety Guide
              </a>
              <a
                href="https://earthquake.usgs.gov/learn/prepare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-4 py-2 ml-5 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                USGS Earthquake Preparedness
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earthquake;
