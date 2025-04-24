import React from "react";

const ProspectLeads = () => {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry", avatar: "/avatars/avatar1.png" },
    { name: "Ava Wright", stage: "Initial Inquiry", avatar: "/avatars/avatar2.png" },
    { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/avatars/avatar3.png" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 text-gray-800">Prospect Leads</h2>
      <div className="space-y-3">
        {leads.map((lead, idx) => (
          <div key={idx} className="bg-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src={lead.avatar} className="w-8 h-8 rounded-full mr-3" alt={lead.name} />
              <div>
                <p className="font-medium text-sm text-gray-800">{lead.name}</p>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              Stage: {lead.stage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProspectLeads;