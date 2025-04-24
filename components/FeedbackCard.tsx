import React from "react";

const FeedbackCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800">Key Insights & Feedback</h2>
      
      <div className="flex items-center mb-6">
        <span className="text-3xl text-gray-600 font-bold">10%</span>
        <div className="ml-auto">
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-lg">
            Top Performer
          </span>
        </div>
      </div>
      
      <div className="mb-2 text-sm text-gray-600">Sales Growth</div>
      <hr />
      {/* Feedback section */}
      <div className="mt-4 bg-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Feedback</h3>
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
          </div>
          <p className="text-sm text-gray-600">
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;