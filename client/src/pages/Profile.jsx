import React, { useEffect, useState } from "react";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useStateContext } from "../context";

const Profile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setcampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setisLoading(true);
    const campaigns = await getUserCampaigns();
    setcampaigns(campaigns);
    setisLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
