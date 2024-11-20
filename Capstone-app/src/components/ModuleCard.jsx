// src/components/ModuleCard.jsx
// ModuleCard simple yet effective component to display module information *DONE*

import React from 'react';
import { FaUserSecret, FaLock, FaGlobe } from 'react-icons/fa'; // Import relevant icons

// ModuleCard component to display module information
const ModuleCard = ({ module, isCompleted, startModule }) => {
  // Function to select icon based on module title
  const getIcon = (title) => {
    switch (title) {
      case 'Social Engineering':
        return <FaUserSecret className="text-blue-600 w-8 h-8 mb-4" />;
      case 'Secure Browsing':
        return <FaGlobe className="text-blue-600 w-8 h-8 mb-4" />;
      case 'Password Management':
        return <FaLock className="text-blue-600 w-8 h-8 mb-4" />;
      default:
        return <FaGlobe className="text-blue-600 w-8 h-8 mb-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800 hover:shadow-xl transition duration-300">
      <div className="flex flex-col items-center">
        {getIcon(module.title)}
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          {module.title}
        </h2>
      </div>
      <p className="mb-6 text-gray-600">{module.summary}</p>
      {isCompleted && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-md">
          Module Completed
        </div>
      )}
      <button
        onClick={() => startModule(module.id)}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
      >
        Start Module
      </button>
    </div>
  );
};

export default ModuleCard;
