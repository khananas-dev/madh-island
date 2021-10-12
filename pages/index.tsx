import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import SearchBar from "../src/components/searchBar/SearchBar";
import styled from "styled-components";
import BackgroundImage from "../public/backgroundImage.png";
import { Button, Grid } from "@mui/material";
import PropertyCard from "../src/components/propertyCard/PropertyCard";
import Image from "next/image";
import GoogleMapReact from "google-map-react";

// Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_PROPERTIES } from "../queries/property";

// const AnyReactComponent = ({ text : any }) => <div>{text}</div>;
export default function Index() {
  const getAllProperties = useQuery(GET_ALL_PROPERTIES);
  // console.log(getAllProperties)
  // const { data, loading, error } = useQuery(QUERY_PROPERTY);
  // if (error) {
  //   return <p>:( an error happened</p>;
  // }

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const Hero = styled(Box)`
    background-image: url(${BackgroundImage.src});
    height: calc(100vh - 300px);
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
  const UspWrapper = styled(Box)`
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
  const TalkToUsContainer = styled(Box)`
    background: #eafcf7;
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 40px;
    margin: 40px 0px;
    @media screen and (max-width: 768px) {
      padding-top: 40px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 40px;
    }
  `;
  return (
    <>
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
      <UspWrapper>
        {/* All Services */}
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="center"
          sx={{
            margin: "0px 0px 48px 0px",
          }}
        >
          Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
        </Grid>
        {/* Top Location */}
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="center"
          sx={{
            margin: "48px 0px 48px 0px",
          }}
        >
          Top Locations
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <PropertyCard></PropertyCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <PropertyCard></PropertyCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <PropertyCard></PropertyCard>
          </Grid>
        </Grid>
        {/* About Us */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              textAlign="left"
              sx={{
                margin: "48px 0px 48px 0px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              component="h2"
              color="#1F1F1F"
              textAlign="left"
              sx={{
                margin: "48px 0px 48px 0px",
              }}
            >
              Visitmadhisland is the official Website of Madhisland related to
              Tourism and its Business opportunity on the internet. Also,
              Visitmadhisland provides helpful services related to the Film
              industry, Travel, and Information etc. to become the most
              preferred island of Mumbai (India) on its mission to promote
              quality and sustainable growth in the local tourism industry to
              deliver long term economic, social and cultural benefits in the
              Madhisland.
            </Typography>
          </Grid>
          <Grid
            visibility={{ xs: "hidden", md: "visible" }}
            sx={{
              margin: "48px 0px 48px 0px",
            }}
            item
            xs={12}
            md={4}
          >
            <Image src={BackgroundImage}></Image>
          </Grid>
        </Grid>
        {/* Our Clients */}
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="center"
          sx={{
            margin: "48px 0px 48px 0px",
          }}
        >
          Our Clients
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
        </Grid>
      </UspWrapper>
      {/* Explore Locations */}
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        textAlign="center"
        sx={{
          margin: "48px 0px 48px 0px",
        }}
      >
        Explore Our Locations
      </Typography>
      <Box style={{ height: "600px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAP_KEY}` }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </Box>
      {/* Talk to us */}
      <TalkToUsContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={10}>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              textAlign="left"
            >
              Have a specific location requirement?
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              color="primary"
              textAlign="left"
            >
              Talk to us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Button variant="outlined">Tell Us</Button>
          </Grid>
        </Grid>
      </TalkToUsContainer>
    </>
  );
}
