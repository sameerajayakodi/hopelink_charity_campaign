import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../utils";

function Campaigns({ campaign }) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(server+"campaign")
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-10">
      <div className="flex justify-end gap-4 mb-8">
        <Link to="/campaigns/my/create">
          <button className="flex items-center px-4 py-2 text-white transition-all duration-300 bg-red-600 rounded-lg shadow-lg hover:bg-red-700">
            <FaPlus className="mr-2" />
            Create Campaign
          </button>
        </Link>
        <Link to="/campaigns/my">
          <button className="px-4 py-2 text-red-700 transition-all duration-300 bg-white border-2 border-red-600 rounded-lg shadow-lg hover:bg-red-600 hover:text-white">
            My Campaigns
          </button>
        </Link>
      </div>

      <h2 className="mb-6 text-2xl font-bold text-gray-800">Campaign List</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <div
              key={campaign.id}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {campaign.name}
              </h3>
              <p className="mb-2 text-gray-700">{campaign.description}</p>
              <div className="mb-4">
                <p className="mb-1 font-semibold text-gray-900">
                  Goal:
                  <span className="ml-1 text-red-600">${campaign.goal}</span>
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-red-600 rounded-full"
                    style={{
                      width: `${(campaign.raised / campaign.goal) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Raised: ${campaign.raised} (
                  {((campaign.raised / campaign.goal) * 100).toFixed(0)}%)
                </p>
              </div>
              <p className="mb-4 text-gray-500">Contact: {campaign.phone}</p>
              <Link to={"/campaigns/" + campaign.id}>
                <button
                  type="submit"
                  className="px-4 py-2 text-red-600 transition-all duration-300 bg-white border border-red-600 rounded-full hover:bg-red-700 hover:text-white"
                >
                  Donate Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No campaigns available</p>
        )}
      </div>
    </div>
  );
}

export default Campaigns;
