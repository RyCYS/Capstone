// src/components/ProgressBar.jsx
//ProgressBar very simple component but GOOD *DONE*

import React from 'react';

const ProgressBar = ({ current, total, color = 'bg-blue-500' }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
