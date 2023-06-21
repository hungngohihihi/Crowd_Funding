import React, { useEffect, useContext, useState } from "react";

//INTERAL IMPORT
import { CrowdFundingContext } from "@/Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components"

const index = () => {
  const {
    titleData,
    createCampaign,
    getCampaigns,
    getUserCampaigns,
    donate,
    getDonations,
  } = useContext(CrowdFundingContext)

  const [allCampaign, setAllCampaign] = useState()
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();

    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaign(allData);
      setUsercampaign(userData)
    }
  }, [])

  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All Listed Campaign"
        allcampaign={allCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Created Campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  )
}

export default index