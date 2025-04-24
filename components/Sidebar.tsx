'use client';
import React from "react";
import { useSidebar } from "../app/context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar - always visible on large screens */}
      <aside className="hidden md:flex w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex-col p-4 h-screen">
        <ul className="space-y-3">
          <li className="font-semibold bg-blue-900 rounded px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105">Home</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Stages & Checklist</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Upload Docs</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Preferred Vendors</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Tech Stack</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Targets</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Zee Sales Targets</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">MAI Settings</li>
          <li className="flex items-center justify-between px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Pending Questions <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded-full">3</span></li>
        </ul>
        <button className="mt-auto text-sm text-white underline hover:scale-105 transition-transform duration-200">Logout</button>
      </aside>

      {/* Mobile Sidebar - visible only when toggled */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-white text-xl">Menu</span>
          <button 
            onClick={toggleSidebar} 
            className="text-white"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-3">
          <li className="font-semibold bg-blue-900 rounded px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105">Home</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Stages & Checklist</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Upload Docs</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Preferred Vendors</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Tech Stack</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Targets</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Zee Sales Targets</li>
          <li className="px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">MAI Settings</li>
          <li className="flex items-center justify-between px-3 py-2 cursor-pointer transition-all duration-200 hover:border-2 hover:border-white hover:scale-105 rounded">Pending Questions <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded-full">3</span></li>
        </ul>
        <button className="mt-auto text-sm text-white underline hover:scale-105 transition-transform duration-200">Logout</button>
      </aside>
    </>
  );
}

export default Sidebar;
  