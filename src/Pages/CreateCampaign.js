import React from "react";
import CampaignForm from "../Components/Campaign/CampaignForm";
import { server } from "../utils";
function CreateCampaign() {
  const onSubmit = async (campaign) => {
    const data = new FormData();
    data.set("name", campaign.name);
    data.set("description", campaign.description);
    data.set("phone", campaign.phoneNumber);
    data.set("goal", campaign.goal);
    data.set("holder", campaign.bankDetails.accountHolderName);
    data.set("bankName", campaign.bankDetails.bankName);
    data.set("accNumber", campaign.bankDetails.accountNumber);
    data.set("swift", campaign.bankDetails.swiftCode);
    data.set("img", campaign.campaignImage);
    data.set("proof", campaign.proofLetter);
    await fetch(server + "campaign", {
      method: "POST",
      credentials: "include",
      body: data,
    })
      .then((res) => {
        if (res.status === 201) {
          alert("Campaign created successfully");
        } else {
          alert("Failed to create campaign");
        }
      })
      .catch((e) => alert("Failed to create campaign"));
  };
  return (
    <div>
      <CampaignForm onSubmit={onSubmit} />
    </div>
  );
}

export default CreateCampaign;
