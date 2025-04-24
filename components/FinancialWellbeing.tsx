import React from "react";

const FinancialWellbeing = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800">Financial Wellbeing</h2>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-800">20</span>
        <div className="text-sm text-gray-600 mt-1">Total Franchisees</div>
        <div className="mt-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-200 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            2.1%
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-sm text-gray-600 mb-2">Target</div>
          <div className="font-bold text-gray-900">$500,000</div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-sm text-gray-600 mb-2">Current</div>
          <div className="font-bold text-gray-900">$450,000</div>
        </div>
      </div>
    </div>
  );
}

export default FinancialWellbeing;
