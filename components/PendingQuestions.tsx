import React from "react";

const PendingQuestions = () => {
  const questions = [
    { 
      name: "Phoenix Baker", 
      handle: "@phoenix", 
      time: "5min ago", 
      text: "What are the requirements for opening a new store?",
      avatar: "/avatars/avatar1.png"
    },
    { name: "Koray Okumus", handle: "@koray", time: "4hr ago", text: "How do I manage inventory effectively?" },
  ];
  
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full flex flex-col">
      <div className="flex items-center mb-6">
        <h2 className="font-semibold text-gray-800">Pending Questions</h2>
        <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">02</span>
        <button className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {questions.map((q, idx) => (
        <div key={idx} className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center mb-2">
            <img src={q.avatar} className="w-8 h-8 rounded-full" alt={q.name} />
            <div className="ml-3">
              <div className="flex items-center">
                <p className="text-sm font-medium text-gray-800">{q.name}</p>
                <span className="text-xs text-gray-500 ml-1">{q.handle}</span>
              </div>
              <p className="text-xs text-gray-400">{q.time}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{q.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PendingQuestions;