'use client';
import React from "react";
import Sidebar from "@/components/Sidebar";
import HamburgerMenu from "@/components/HamburgerMenu";
import AccountProgress from "@/components/AccountProgress";
import FranchiseesCard from "@/components/FranchiseesCard";
import FeedbackCard from "@/components/FeedbackCard";
import FinancialWellbeing from "@/components/FinancialWellbeing";
import ProspectLeads from "@/components/ProspectLeads";
import ChatAssistant from "@/components/ChatAssistant";
import PendingQuestions from "@/components/PendingQuestions";
import { useSidebar } from "./context/SidebarContext";

export default function Home() {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className="flex h-screen">
      <Sidebar />
      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={() => useSidebar().toggleSidebar()}
        />
      )}
      <HamburgerMenu />
      <div className="flex-1 p-6 pt-16 md:pt-6 overflow-y-auto space-y-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AccountProgress/>
          <FranchiseesCard />
          <FeedbackCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FinancialWellbeing />
          <ProspectLeads />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PendingQuestions />
          <ChatAssistant />
        </div>
      </div>
    </main>
  );
}