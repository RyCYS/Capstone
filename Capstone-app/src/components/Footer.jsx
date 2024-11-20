// src/components/Footer.jsx
// Simple footer component to make the site footer reusable *DONE*

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

// Footer component to display the site footer
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Cybersecurity Training. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
