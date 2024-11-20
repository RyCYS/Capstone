// src/components/Certificate.jsx
//Version 2.0 plz work  *DONE*

import React from 'react';
import { FaDownload, FaCopy, FaCheckCircle } from 'react-icons/fa';

// Certificate component to display the certificate after completion
const Certificate = ({ uniqueID }) => {
  const downloadCertificate = () => {
    const data = {
      certificateID: uniqueID,
      date: new Date().toLocaleDateString(),
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificate-${uniqueID}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  // Function to copy the Certificate ID to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(uniqueID)
      .then(() => {
        alert('Certificate ID copied to clipboard!');
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-16 max-w-md w-full">
        <div className="text-center">
          <FaCheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
          <p className="text-gray-600 mb-6">You've successfully completed the Cybersecurity Essentials Training.</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Certificate ID:</h3>
          <p className="text-lg font-mono text-blue-600">{uniqueID}</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={downloadCertificate}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download Certificate
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              <FaCopy className="mr-2" />
              Copy ID
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Please keep this Certificate ID safe. You can use it to verify your completion status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
