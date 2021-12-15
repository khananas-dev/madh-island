import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "../src/components/SearchBar/SearchBar";
import styled from "styled-components";
import HeroImage from "../public/demo-2.jpg";
// Graphql
import { useState } from "react";
import Footer from "../src/components/Footer/Footer";
import AboutUsSection from "../src/components/Sections/AboutUsSection";
import TalkToUsSection from "../src/components/Sections/TalkToUsSection";
import OurPropertyMap from "../src/components/Sections/OurPropertyMap";
import OurServiceSection from "../src/components/Sections/OurServiceSection";
import TopLocations from "../src/components/Sections/TopLocations";
import { DEFAULT_FILTER } from "../src/constants";
import { GetServerSideProps } from "next";
import axios from 'axios';

// axios.get('http://3.111.11.219:3000/').then(response => {
//   console.log(response);
// });

export default function Index({ props }: any) {
  console.log(props)
  const [cached, setCached] = useState(true);
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
        <OurServiceSection />
        <TopLocations />
        <AboutUsSection />
        {/* <OurClients /> */}
      </BodyWrapper>
      <OurPropertyMap />
      <TalkToUsSection />
      <Footer />
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
`;
