import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "../src/components/SearchBar/SearchBar";
import styled from "styled-components";
import HeroImage from "../public/demo-2.jpg";
// Graphql
import { useState, useEffect } from "react";
import Footer from "../src/components/Footer/Footer";
import AboutUsSection from "../src/components/Sections/AboutUsSection";
import TalkToUsSection from "../src/components/Sections/TalkToUsSection";
import OurPropertyMap from "../src/components/Sections/OurPropertyMap";
import OurServiceSection from "../src/components/Sections/OurServiceSection";
import TopLocations from "../src/components/Sections/TopLocations";
import { DEFAULT_FILTER } from "../src/constants";
import { GetServerSideProps } from "next";
import axios from 'axios';
import { PropertyService } from "../src/services/property/propertyService";
import { ServiceCategory } from "../src/services/serviceCategory/serviceCategory";
import { OrgInfoService } from "../src/services/orgInfo/orgInfoService";
import OurClients from "../src/components/Sections/OurClients";
import Aminites from '../public/json/aminites.json'
import Chips from "../src/components/Chips/Chips";


// axios.get('http://3.111.11.219:3000/').then(response => {
//   console.log(response);
// });

export default function Index({ props }: any) {

  // States
  console.log(props)
  const [cached, setCached] = useState(true);
  const [latestLocation, setLatestLocation] = useState<any>();
  const [serviceList, setServiceList] = useState<any>();
  const [aboutUs, setAboutUs] = useState<any>();

  // Variables
  const _propertyService = new PropertyService();
  const serviceCategory = new ServiceCategory();
  const _orgInfoService = new OrgInfoService();

  // Functions
  const _getLatestLocation = () => {
    const latestLocationData = _propertyService.getLastestLocation();
    latestLocationData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setLatestLocation(res?.data?.data);
      }
    })
  }

  const _getAllServiceList = () => {
    const serviceListData = serviceCategory.getServiceCategoryList();
    serviceListData.then((res: any) => {
      if (res.status == 200) {
        console.log(res.data.data);
        // #1. Adding data in state in the for catergoryList
        setServiceList(res.data.data);
        
      }

    })
  }

  const _getOrgInfo = () =>{
    const orgInfoData = _orgInfoService.getOrgInfo();
    orgInfoData.then((res:any) =>{
      if(!res?.data?.error){
        console.log(res?.data?.data);
        setAboutUs(res?.data?.data);

      }
    })
  }




  // Effects

  useEffect(() => {
    _getLatestLocation();
    _getAllServiceList();
    _getOrgInfo();
  }, []);

  return (
    <AppWrapper>
      <Hero>
        <WhiteContainer
          sx={{
            padding: "24px",
            borderRadius: `4px`,
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              margin: "0px 0px 24px 0px",
            }}
          >
            Looking for a Location in Madh Island?
          </Typography>
          <SearchBar
            from={DEFAULT_FILTER.checkInDate}
            to={DEFAULT_FILTER?.checkOutDate}
            serviceType={DEFAULT_FILTER?.serviceType}
          />
        </WhiteContainer>
      </Hero>

      <BodyWrapper>
        <OurServiceSection serviceList={serviceList} />
        <TopLocations latestLocation={latestLocation} />
        <AboutUsSection aboutUs={aboutUs} />
        <OurClients />
        {/* {
          Aminites && 
          Aminites.map((item:any)=>(
            <Chips title={item.title} className={item.className}/>
          ))
        } */}
      
      </BodyWrapper>
      <OurPropertyMap latestLocation={latestLocation} />
      <TalkToUsSection />
      <Footer about={aboutUs} />
    </AppWrapper>
  );
}



const AppWrapper = styled(Box)`
  background: radial-gradient(
    circle,
    rgba(215, 224, 222, 1) 0%,
    rgba(239, 250, 247, 1) 50%,
    rgba(202, 244, 232, 1) 100%
  );
`;
const Hero = styled(Box)`
  background: url(${HeroImage.src})  ;

  height: calc(100vh - 80px);
  background-repeat: no-repeat;
  object-fit: contain;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  ::after {
    content: "";
    background: "linear-gradient(180deg,rgba(42,43,48,.3) 0%,rgba(42,43,48,0) 11.78%)";
  }
  @media screen and (max-width: 768px) {
    /* padding-top: 40px; */
  }
`;
const BodyWrapper = styled(Box)`
  margin-left: 60px;
  margin-right: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const WhiteContainer = styled(Box)`
  background: white;
  max-width: fit-content;
  margin: auto;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    @media (max-width: 768px) {
      max-width: calc(100% - 30px)!important;
    }
`;
