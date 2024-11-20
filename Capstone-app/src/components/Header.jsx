// src/components/Header.jsx
// Header has no working navingation links but looks cool   *DONE*

import React from 'react';
import { FaBook, FaUserCircle } from 'react-icons/fa'; // Example icons
//import { Link } from 'react-router-dom'; // If using react-router for navigation

// Header component to display the site header
const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaBook className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Cybersecurity Training</h1>
        </div>
        <nav className="flex space-x-4">
          {/* Example navigation links */}
          <a href="#" className="hover:text-gray-200 flex items-center">
            <FaUserCircle className="w-5 h-5 mr-1" />
            Profile
          </a>
          <a href="#" className="hover:text-gray-200 flex items-center">
            <FaBook className="w-5 h-5 mr-1" />
            Courses
          </a>
          {/* Add more links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;