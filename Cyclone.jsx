import React from 'react';
import { motion } from 'framer-motion';

const Cyclone = () => {
  return (
    <section className="relative bg-teal-800 text-gray-100 py-12 px-6 md:px-12">
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
                src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/12/cyclone-pic-1670479210.jpg"
                alt="Cyclone"
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
                src="https://media.cnn.com/api/v1/images/stellar/prod/230516092716-04-cyclone-mocha-051623-sittwe-myanmar.jpg?c=16x9&q=h_720,w_1280,c_fill"
                alt="Cyclone Effects"
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
                src="https://images.mid-day.com/images/images/2023/dec/Chennai-rains_d.jpg"
                alt="Cyclone Safety"
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
              Cyclone Safety Tips
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-lg mb-6"
            >
              Cyclones, also known as hurricanes or typhoons, are intense circular storms that originate over warm tropical oceans. Here are essential tips to stay safe during a cyclone.
            </motion.p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                  Stay indoors and away from windows. Secure all doors and windows to prevent them from being damaged.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                >
                  Avoid using electrical appliances during the cyclone to prevent electrocution or fires.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                >
                  Listen to weather updates and follow instructions from local authorities. Keep a battery-powered radio handy.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                  Have an emergency kit prepared with essential items such as water, non-perishable food, medications, and important documents.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              Cyclone Preparedness
            </motion.h2>
            <p className="text-lg mb-4">
              Preparing in advance for a cyclone can help you stay safe and minimize damage. Follow these preparedness tips:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                >
                  Create an emergency plan that includes a safe room, evacuation routes, and a communication plan with family members.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
                >
                  Strengthen your home by reinforcing windows, doors, and roof to withstand strong winds and debris.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
                >
                  Consider purchasing cyclone insurance to protect your property from potential damage.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              After a Cyclone
            </motion.h2>
            <p className="text-lg mb-4">
              After a cyclone, it’s important to follow these steps for recovery and safety:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.2 }}
                >
                  Check for injuries and seek medical attention if needed. Avoid handling downed power lines and report them to authorities.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
                >
                  Inspect your property for damage and avoid entering unsafe areas. Follow local advice on returning home and recovery.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.6 }}
                >
                  Conserve water and power as much as possible until services are fully restored.
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
                href="https://www.ready.gov/cyclones"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Learn More About Cyclone Safety
              </a>
              <a
                href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/cyclone.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 ml-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Red Cross Cyclone Safety Guide
              </a>
              <a
                href="https://www.wmo.int/pages/prog/www/tcp/documents/Cyclone_Information.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white ml-4 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                WMO Cyclone Information
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cyclone;
