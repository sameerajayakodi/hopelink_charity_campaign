import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { server } from "../../utils";

const ViewCampaignModal = ({ isOpen, onClose, campaign, onAccept,onDeclain }) => {
  const [name, setName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [description, setDescription] = useState("");
  const [donationValue, setDonationValue] = useState("");

  useEffect(() => {
    if (campaign) {
      setName(campaign.name);
      setOrganizer(campaign.organizer);
      setDescription(campaign.description);
      setDonationValue(campaign.donationValue);
    }
  }, [campaign]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="View Campaign"
      className="w-1/3 p-8 mx-auto mt-20 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center"
    >
      <h2 className="mb-6 text-3xl font-bold text-center text-[#a31622]">
        {" "}
        Campaign Details
      </h2>

      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-[#a31622]">Campaign Name</h3>{" "}
        <p className="mt-1 text-gray-700">{name}</p>
      </div>

      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-[#a31622]">Organizer</h3>{" "}
        <p className="mt-1 text-gray-700">{organizer}</p>
      </div>

      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-[#a31622]">Description</h3>{" "}
        <p className="mt-1 text-gray-700">{description}</p>
      </div>

      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-[#a31622]">Donation Value</h3>{" "}
        <p className="mt-1 text-gray-700">{donationValue}</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={onClose}
          className="px-5 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          {" "}
          Close
        </button>
        <button
          onClick={onDeclain}
          className="px-5 py-2 text-white bg-[#a31622] rounded hover:bg-[#8f1420]"
        >
          {" "}
          Declain
        </button>
        <button
          onClick={onAccept}
          className="px-5 py-2 text-white bg-[#18a316] rounded hover:bg-[#148f16]"
        >
          {" "}
          Accept
        </button>
      </div>

      <div className="mt-6 text-center">
        <a
          href={server + "uploads/" + campaign.proof}
          target="_blank"
          className="text-[#a31622] underline hover:text-[#8f1420]"
        >
          {" "}
          Download Campaign Details pdf
        </a>
      </div>
    </Modal>
  );
};

export default ViewCampaignModal;
