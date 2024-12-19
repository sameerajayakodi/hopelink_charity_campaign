import React from 'react'
import CampaignList from '../Components/Campaign/CampaignList'
import CampaignForm from '../Components/Campaign/CampaignForm'
import { useState } from 'react'

function CampaignDetail() {    
    const [campaigns, setCampaigns] = useState([])
    const [campaignToEdit, setCampaignToEdit] = useState(null)

    const addCampaign = (campaign) => {
        if(campaignToEdit !== null) {
            const updateCampaigns = campaigns.map((c, index) => 
                index === campaignToEdit ? campaign : c
            )
            setCampaigns(updateCampaigns)
            setCampaignToEdit(null)
        }else{
            setCampaigns([...campaigns, campaign])
        }
    }

    const editCampaign = (index) => {
        setCampaignToEdit(index)
        
    }

    const deleteCampaign = (index) => {
        const updateCampaigns = campaigns.filter((c, i) => i !== index)
        setCampaigns(updateCampaigns)   
    }


  return (
    <div className="container p-6 mx-auto">
      <CampaignForm 
            onSubmit={addCampaign} 
            campaign={campaignToEdit !== null ? campaigns[campaignToEdit] : null}
      />
      <CampaignList 
            campaigns={campaigns} 
            onEdit={editCampaign} 
            onDelete={deleteCampaign} 
      />
    </div>
  )
}

export default CampaignDetail

