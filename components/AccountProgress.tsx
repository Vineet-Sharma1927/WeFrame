import React from "react";

const AccountProgress = () => {
  const progressPercentage = 85; // 85% progress as shown in the image
  
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800">Account Progress</h2>
      <div className="flex justify-center mb-6">
        {/* Circular Progress Indicator */}
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle 
              className="text-gray-200" 
              strokeWidth="10" 
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
            {/* Progress circle */}
            <circle 
              className="text-blue-500" 
              strokeWidth="10" 
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progressPercentage / 100)}`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">{progressPercentage}%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-200 rounded-lg p-4 mb-3">
        <h3 className="text-sm font-semibold mb-2 text-gray-800">Steps Completed</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2 w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            Profile Setup
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2 w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            Initial Training
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2 w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            Legal Documents
          </li>
        </ul>
      </div>
      
      <div className="bg-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-800">Steps Remaining</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2 w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
            </span>
            Financial Integration
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="mr-2 w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
            </span>
            Final Review
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountProgress;
