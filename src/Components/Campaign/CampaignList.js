import React from "react";

function CampaignList({campaigns, onEdit, onDelete}) {
  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold">Campaign List</h2>
      <ul className="space-y-4">
        {campaigns.map((campaign, index) => (
          <li
            key={index}
            className="p-4 bg-white border rounded-lg shadow-lg"
          >
            {/* Campaign Details */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Name: {campaign.name}</h3>
              <p className="">Description: {campaign.description}</p>
              <p className="">Goal Amount: ${campaign.goal}</p>
              <p className="">
                Proof Letter:{' '}
                {campaign.proofLetter ? campaign.proofLetter.name : 'Not uploaded'}
              </p>

              {/* Bank Details */}
              <div>
                <p><strong>Bank Details:</strong></p>
                <ul className="list-disc list-inside">
                  <li>Account Holder:{campaign.bankDetails.accountHolderName}</li>
                  <li>Bank Name:{campaign.bankDetails.bankName}</li>
                  <li>Account Number: {campaign.bankDetails.accountNumber}</li>
                  <li>SWIFT Code: {campaign.bankDetails.swiftCode}</li>
                </ul>
              </div>
              <p>
                Campaign Image:{' '}
                {campaign.campaignImage ? campaign.campaignImage.name : 'Not uploaded'}
              </p>
              <p>Phone Number:{campaign.phoneNumber}</p>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
