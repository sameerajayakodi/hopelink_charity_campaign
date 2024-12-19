import React, { useEffect, useState } from "react";
import ViewCampaignModal from "./ViewCampaignModal"; // Updated import
import { server } from "../../utils";

const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    fetch(server + "campaign/admin", { method: "GET", credentials: "include" })
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.log(err));
  }, []);

  const handleViewCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setIsViewModalOpen(true);
  };

  const handlePayCampaignCreator = (campaignId) => {
    alert(`Paid campaign creator for campaign ID: ${campaignId}`);
  };

  const sendstatus = async (status) => {
    await fetch(server + "campaign/admin/" + selectedCampaign.id, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => {
        const updatedCampaigns = campaigns.map((campaign) => {
          return {
            ...campaign,
            status:
              campaign.id === selectedCampaign.id ? status : campaign.status,
          };
        });
        setCampaigns(updatedCampaigns);
        setIsViewModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Campaigns</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-red-600 bg-red-100">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Campaign Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Organizer
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {campaign.organizer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {campaign.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleViewCampaign(campaign)}
                    className="px-4 py-2 mr-2 font-semibold text-red-600 bg-white border border-red-600 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handlePayCampaignCreator(campaign.id)}
                    disabled={campaign.status === "Active"}
                    className={`px-4 py-2 font-semibold ${
                      campaign.status === "Active"
                        ? "text-white bg-gray-400 cursor-not-allowed"
                        : "text-white bg-green-500"
                    } rounded`}
                  >
                    Pay Campaign Creator
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {selectedCampaign && (
        <ViewCampaignModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
<<<<<<< Updated upstream
          campaign={selectedCampaign} // Pass the selected campaign for viewing
          onAccept={() => sendstatus("accepted")} // Add any accept logic here
          onDeclain={() => sendstatus("rejected")} // Add any decline logic here
=======
          campaign={selectedCampaign} 
          onAccept={() => alert("Campaign Accepted")} 
>>>>>>> Stashed changes
        />
      )}
    </div>
  );
};

export default ManageCampaigns;
