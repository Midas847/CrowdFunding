import React, { useEffect, useState } from "react";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setcampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setisLoading(true);
    const campaigns = await getCampaigns();
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

export default Home;
