import React from 'react';
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div>
  

      {/* Key Features Section */}
      <section id='Herosec' className="py-12 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p>Get the latest information on ongoing disasters to stay informed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p>Get the latest information on ongoing disasters to stay informed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p>Get the latest information on ongoing disasters to stay informed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p>Get the latest information on ongoing disasters to stay informed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Emergency Tips</h3>
              <p>Learn how to stay safe during emergencies with our expert tips.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Resource Center</h3>
              <p>Access critical resources and contact information for disaster response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
      <div className='rounded-3xl w-full py-8 bg-red-600 overflow-hidden relative'>
        <div className='flex whitespace-nowrap gap-5'>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10}}
            className='text-[10vw] leading-none uppercase font-semibold text-white whitespace-nowrap'
          >Emergency Alerts
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='text-[10vw] leading-none uppercase font-semibold text-white whitespace-nowrap'
          >Emergency Alerts
          </motion.h1>
          {/* <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='text-[10vw] leading-none uppercase font-semibold text-white whitespace-nowrap'
          >
            Disaster Info
          </motion.h1> */}
        </div>
      </div>
    </section>



      {/* Latest News/Alerts Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Latest News and Alerts</h2>
          <div className="bg-zinc-500 p-6 rounded-lg shadow-lg">
            <p className="text-lg">Hurricane Alert: The storm is expected to hit the coast by Thursday.</p>
          </div>
        </div>
      </section>
      </div>
  
)
};

export default HeroSection;
