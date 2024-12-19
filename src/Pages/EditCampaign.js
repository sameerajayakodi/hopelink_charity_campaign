import React, { useEffect } from "react";
import CampaignForm from "../Components/Campaign/CampaignForm";
import { server } from "../utils";
import { useParams } from "react-router-dom";
function EditCampaign() {
  const { id } = useParams();
  const onSubmit = async (campaign) => {
    const data = new FormData();
    data.set("id", id);
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
    await fetch(server + "campaign/" + id, {
      method: "PUT",
      credentials: "include",
      body: data,
    })
      .then((res) => {
        if (res.ok) {
          alert("Campaign updated successfully");
        } else {
          alert("Failed to update campaign");
        }
      })
      .catch((e) => alert("Failed to update campaign"));
  };

  return (
    <div>
      <CampaignForm onSubmit={onSubmit} editCampaign={id} />
    </div>
  );
}

export default EditCampaign;
