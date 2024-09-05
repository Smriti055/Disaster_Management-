import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Footer Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@example.com" className="hover:underline">info@example.com</a></li>
              <li><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
              <li>1234 Main Street, Anytown, USA</li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
