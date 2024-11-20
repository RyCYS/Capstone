// src/components/LandingPage.jsx
// LandingPage looks all good and ready to go *DONE*

import React from 'react';
import ModuleCard from './ModuleCard';
import {
  FaShieldAlt,
  FaLock,
  FaGlobe,
  FaUserShield,
  FaQuoteLeft,
  FaStar,
  FaArrowRight,
  FaCogs,
  FaLightbulb,
} from 'react-icons/fa';

// LandingPage component to display the main page content
const LandingPage = ({
  trainingModules,
  completedModules,
  startModule,
}) => {
  const allModulesCompleted = completedModules.length === trainingModules.length;

  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen text-white">
      {/* Decorative Icons */}
      <FaUserShield className="absolute top-10 right-10 text-white opacity-20 w-24 h-24" />
      <FaGlobe className="absolute bottom-10 left-10 text-white opacity-20 w-24 h-24" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Cybersecurity Essentials Training
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Equip yourself with the knowledge and skills to protect your digital life. Our comprehensive modules cover essential cybersecurity topics to keep you and your organization safe in the digital world.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-yellow-400 w-12 h-12 mb-2" />
              <span className="font-semibold">Protect</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLock className="text-yellow-400 w-12 h-12 mb-2" />
              <span className="font-semibold">Secure</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe className="text-yellow-400 w-12 h-12 mb-2" />
              <span className="font-semibold">Learn</span>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => startModule(trainingModules[0].id)} // Starts the first module
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 flex items-center"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center">
            <FaCogs className="text-yellow-400 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Modules</h3>
              <p>Each module is designed to cover all essential aspects of cybersecurity, ensuring a thorough understanding.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLightbulb className="text-yellow-400 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Practical Insights</h3>
              <p>Gain actionable knowledge that you can apply immediately to enhance your security posture.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLock className="text-yellow-400 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Secure Learning Environment</h3>
              <p>Our platform ensures a safe and secure learning experience, protecting your data and privacy.</p>
            </div>
          </div>
        </div>
        {/* Modules Grid */}
        {allModulesCompleted && (
          <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-md text-center">
            Congratulations! You've completed all modules.
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingModules.map((module) => {
            const isCompleted = completedModules.includes(module.id);
            return (
              <ModuleCard
                key={module.id}
                module={module}
                isCompleted={isCompleted}
                startModule={startModule}
              />
            );
          })}
        </div>
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800 max-w-sm">
              <FaQuoteLeft className="text-yellow-400 w-6 h-6 mb-2" />
              <p className="mb-4">"This training has significantly improved my understanding of cybersecurity. The modules are well-structured and engaging!"</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4" />
              </div>
              <p className="mt-4 font-semibold">- Jane Doe</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800 max-w-sm">
              <FaQuoteLeft className="text-yellow-400 w-6 h-6 mb-2" />
              <p className="mb-4">"A comprehensive course that covers all the essential aspects of cybersecurity. Highly recommend to anyone looking to enhance their skills."</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4 mr-1" />
                <FaStar className="text-yellow-400 w-4 h-4" />
              </div>
              <p className="mt-4 font-semibold">- John Smith</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
