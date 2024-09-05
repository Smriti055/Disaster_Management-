import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-8 py-4 bg-gray-800 text-white flex justify-between items-center'>
      <div className='logo'>
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG path data here */}
          {/* ... */}
        </svg>
      </div>
      <div className='links flex gap-8 relative'>
        {["Home", "Disaster Information", "Resources", "About"].map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase().replace(' ', '-') === 'home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            className={`text-lg capitalize font-light hover:text-gray-400`}
          >
            {item}
          </Link>
        ))}
        {/* Emergency Tips Dropdown */}
        <div className='relative group'>
          <button className='text-lg capitalize font-light hover:text-gray-400'>
            Emergency Tips
          </button>
          <div className='absolute left-0 mt-2 w-48 bg-black text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <ul>
              <li>
                <Link to="/emergency-tips/landslide" className="block px-4 py-2 hover:bg-gray-500">Landslide</Link>
              </li>
              <li>
                <Link to="/emergency-tips/flood" className="block px-4 py-2 hover:bg-gray-500">Flood</Link>
              </li>
              <li>
                <Link to="/emergency-tips/earthquake" className="block px-4 py-2 hover:bg-gray-500">Earthquake</Link>
              </li>
              <li>
                <Link to="/emergency-tips/cyclone" className="block px-4 py-2 hover:bg-gray-500">Cyclone</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Contact Link */}
        <Link
          to="/contact"
          className="text-lg capitalize font-light hover:text-gray-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
