import React from "react";

const FranchiseesCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800">Total Franchisees Onboard</h2>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-gray-800">14</span>
        <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
          7.4%
        </span>
      </div>
      
      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="-ml-1 first:ml-0">
            <img src={`/avatars/avatar${i}.png`} alt="Franchisee" className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
        ))}
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 -ml-1">+7</div>
      </div>
      
      {/* Progress Bars */}
      <div className="space-y-4 mb-4">
        <div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-blue-600 font-medium">Stage 1 (Initial Inquiry)</span>
            <span className="font-bold text-gray-400">02</span>
          </div>
        </div>
        
        <div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-blue-500 font-medium">Stage 2 (Document Submission)</span>
            <span className="font-bold text-gray-400">07</span>
          </div>
        </div>
        
        <div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-300 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-blue-400 font-medium">Stage 3 (Training)</span>
            <span className="font-bold text-gray-400">05</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseesCard;
