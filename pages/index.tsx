import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "../src/components/SearchBar/SearchBar";
import styled from "styled-components";
import BackgroundImage from "../public/backgroundImage.png";
import HeroImage from "../public/demo1.jpg";
import { Button, Grid } from "@mui/material";
import PropertyCard from "../src/components/PropertyCard/PropertyCard";
import Image from "next/image";
// Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_PROPERTIES } from "../queries/property";
import { GET_ABOUT_US } from "../queries/content";
import IconSvg from "../src/components/icon/IconSvg";
import { PropertyCardFactory } from "../@types";
import { useEffect, useState } from "react";
import router from "next/router";
import Footer from "../src/components/Footer/Footer";
import { getDataFromTree } from "@apollo/client/react/ssr";
import AboutUsSection from "../src/components/Sections/AboutUsSection";
import TalkToUsSection from "../src/components/Sections/TalkToUsSection";
import OurPropertyMap from "../src/components/Sections/OurPropertyMap";
import OurServiceSection from "../src/components/Sections/OurServiceSection";
import OurClients from "../src/components/Sections/OurClients";
import TopLocations from "../src/components/Sections/TopLocations";
export default function Index({ props }: any) {
  const [cached, setCached] = useState(true);
  const getAllProperties = useQuery(GET_ALL_PROPERTIES);
  const aboutUsData = useQuery(GET_ABOUT_US, { ssr: true });
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
          <SearchBar />
        </WhiteContainer>
      </Hero>
      <BodyWrapper>
        {/* All Services */}
        <OurServiceSection />
        {/* Top Location */}
        <TopLocations />
        {/* About Us */}
        <AboutUsSection />
        {/* Our Clients */}
        <OurClients />
      </BodyWrapper>
      {/* Explore Locations */}
      <OurPropertyMap />
      {/* Talk to us */}
      <TalkToUsSection />
      <Footer />
    </AppWrapper>
  );
}
const AppWrapper =  styled(Box)`
background: radial-gradient(circle, rgba(215,224,222,1) 0%, rgba(239,250,247,1) 50%, rgba(202,244,232,1) 100%);
`;
const Hero = styled(Box)`
  background-image: url(${HeroImage.src});
  
  height: calc(100vh - 100px);
  background-repeat: no-repeat;
  object-fit: contain;
  width: 100%;
  justify-content: center;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;
const BodyWrapper = styled(Box)`
  padding-top: 80px;
  margin-left: 60px;
  margin-right: 60px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const WhiteContainer = styled(Box)`
  background: white;
  max-width: fit-content;
  margin: auto;
`;
