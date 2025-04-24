import React from "react";

const ChatAssistant = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-1">Welcome to the AI Chat Assistant</h2>
      </div>
      
      <div className="flex mt-6">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="flex-1 border border-gray-300 text-gray-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;
