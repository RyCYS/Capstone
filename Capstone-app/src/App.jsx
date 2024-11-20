// src/App.jsx
//App component is working as expected *DONE*

import React, { useState, useEffect } from 'react';
import trainingModules from './data/trainingModules';
import LandingPage from './components/LandingPage';
import Module from './components/Module';
import Certificate from './components/Certificate';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import { v4 as uuidv4 } from 'uuid';

// Main component that will be rendered in the index.js file
const CybersecurityTrainingPlatform = () => {
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [uniqueID, setUniqueID] = useState(null);

  useEffect(() => {
    // Check if uniqueID is already in localStorage
    const storedID = localStorage.getItem('uniqueID');
    if (storedID) {
      setUniqueID(storedID);
    }
  }, []);

  useEffect(() => {
    // Check if all modules are completed
    if (
      completedModules.length === trainingModules.length &&
      !uniqueID
    ) {
      // Generate a unique ID
      const newUniqueID = uuidv4();
      setUniqueID(newUniqueID);
      // Save to localStorage
      localStorage.setItem('uniqueID', newUniqueID);
    }
  }, [completedModules, uniqueID]);
  // Function to start a module
  const startModule = (moduleId) => {
    setCurrentModuleId(moduleId);
  };
  // Function to handle the completion of the quiz
  const handleQuizCompletion = (moduleId, passed) => {
    if (passed && !completedModules.includes(moduleId)) {
      setCompletedModules((prevCompleted) => [...prevCompleted, moduleId]);
    }
  };
  // Function to reset the quiz
  const resetQuiz = () => {
    setCurrentModuleId(null);
  };
  // Function to render the Module component
  const renderModule = () => {
    const module = trainingModules.find((m) => m.id === currentModuleId);
    if (!module) return null;

    return (
      <Module
        module={module}
        onCompleteQuiz={handleQuizCompletion}
        resetQuiz={resetQuiz}
      />
    );
  };
  // Function to render the LandingPage component or the Certificate component
  const renderLandingPage = () => {
    // If uniqueID exists, show the Certificate component
    if (uniqueID) {
      return <Certificate uniqueID={uniqueID} />;
    }

    return (
      <LandingPage
        trainingModules={trainingModules}
        completedModules={completedModules}
        startModule={startModule}
      />
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        {currentModuleId === null ? renderLandingPage() : renderModule()}
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default CybersecurityTrainingPlatform;
