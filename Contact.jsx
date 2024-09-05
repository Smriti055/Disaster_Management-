// src/pages/ContactUs.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  // 🟢 Back Button Function
  const handleBack = () => {
    navigate(-1); // ⬅ Go back
  };

  // 🔴 Close Button Function
  const handleClose = () => {
    navigate('/'); // 🏠 Go home
  };

  return (
    <div className="bg-gray-800 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto mt-10 bg-[#f3d2e9] rounded-lg shadow-lg p-6 relative">
        {/* 🟢 Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#8592; {/* Left arrow */}
        </button>
        {/* 🔴 Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-red-500 text-white text-xl font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          &#10006; {/* Cross (X) */}
        </button>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Have any questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;