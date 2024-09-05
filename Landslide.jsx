import React from 'react';
import { motion } from 'framer-motion';

const Landslide = () => {
  return (
    <section className="relative bg-gray-800 text-gray-100 py-12 px-6 md:px-12">
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
                src="https://th.bing.com/th/id/OIP.BOYg30CD5KrDiMPX4PQDowHaE8?rs=1&pid=ImgDetMain"
                alt="Landslide"
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
                src="https://sa.kapamilya.com/absnews/abscbnnews/media/2018/news/09/17/20180917_benguet5.jpg"
                alt="Landslide Effects"
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
                src="https://static.toiimg.com/thumb/msid-85292849,imgsize-463933,width-1000,height-562,resizemode-8/85292849.jpg"
                alt="Landslide Safety"
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
              Landslide Safety Tips
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-lg mb-6"
            >
              Landslides can be extremely dangerous and can occur suddenly. It's important to be aware of the signs of a potential landslide and know what to do to stay safe.
            </motion.p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                  Be alert to any changes in your surroundings, such as cracks in walls or the ground, or sudden increases in soil moisture.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                >
                  Move to higher ground if you live in an area prone to landslides, especially during heavy rain or seismic activity.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                >
                  Avoid areas at risk of landslides, such as slopes and steep hills, during heavy rainfall or after an earthquake.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                  If you are caught in a landslide, try to stay on top of the debris and move to the side to avoid being buried.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              Landslide Preparedness
            </motion.h2>
            <p className="text-lg mb-4">
              Proper preparedness can help you stay safe and minimize the impact of a landslide. Here are some steps you can take:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
                >
                  Identify if you live in a landslide-prone area and take necessary precautions to secure your property.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
                >
                  Create an emergency plan that includes evacuation routes and safe locations away from potential landslides.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
                >
                  Assemble an emergency kit with essentials such as food, water, a flashlight, and a first-aid kit.
                </motion.span>
              </li>
            </ul>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
              className="text-3xl font-bold mt-8 mb-4"
            >
              After a Landslide
            </motion.h2>
            <p className="text-lg mb-4">
              After a landslide, it's important to follow these steps to ensure safety and aid in recovery:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.2 }}
                >
                  Check for injuries and provide first aid if needed. Seek medical attention for serious injuries.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
                >
                  Inspect your property for damage and avoid areas where there is a risk of further landslides.
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 2.6 }}
                >
                  Follow local authorities' advice on evacuation and recovery procedures.
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
                href="https://www.ready.gov/landslides"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Learn More About Landslide Safety
              </a>
              <a
                href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/landslide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 ml-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Red Cross Landslide Safety Guide
              </a>
              <a
                href="https://www.usgs.gov/centers/geology-sciences/science/landslides"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white ml-4 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                USGS Landslide Information
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landslide;
