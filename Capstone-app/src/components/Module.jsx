// src/components/Module.jsx
// Module component functions well *DONE*

import React, { useState } from 'react';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import Quiz from './Quiz';

//Module component that will be rendered in the App component
const Module = ({
  module,
  onCompleteQuiz,
  resetQuiz,
}) => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizCompletion = (passed, score) => {
    setQuizResult({ passed, score });
    onCompleteQuiz(module.id, passed);
  };

  if (quizResult) {
    const passingScore = Math.ceil(module.questions.length * 0.6); // Updated to 60%
    const { passed, score } = quizResult;
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Quiz Completed!</h2>
        <p className="text-lg mb-4">
          Your score: {score} out of {module.questions.length}
        </p>
        {passed ? (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
            Congratulations! You've passed this module with a score of {score}/
            {module.questions.length}.
          </div>
        ) : (
          <div className="mb-6 p-4 bg-yellow-100 text-yellow-700 rounded-md">
            You've completed this module, but a score of {passingScore}/
            {module.questions.length} or higher is needed to pass. Feel free to try again!
          </div>
        )}
        <button
          onClick={resetQuiz}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Back to Modules
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">{module.title}</h2>
      <p className="text-lg mb-6">{module.content}</p>
      {module.id === 3 && <PasswordStrengthChecker />}
      <Quiz module={module} onComplete={handleQuizCompletion} />
    </div>
  );
};

export default Module;
