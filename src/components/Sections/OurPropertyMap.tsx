import { Typography, Box } from "@mui/material";
import React from "react";
import { DEFAULT_MAP_PROPS } from "../../constants";
import GoogleMapReact from "google-map-react";
import Marker from "../../utils/marker";
import styled from "styled-components";
function OurPropertyMap() {
  return (
    <>
    <BodyWrapper>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        textAlign="left"
        sx={{
          margin: "40px 0px 20px 0px",
        }}
      >
        Explore Our Locations
      </Typography>
      </BodyWrapper>
      <Box style={{ height: "600px", width: "100%" }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: `AIzaSyDLSXets8Lb-32VYPDYj-vEtKhDXBIBiy0` }}
          defaultCenter={DEFAULT_MAP_PROPS.center}
          defaultZoom={DEFAULT_MAP_PROPS.zoom}
        >
          {/* <Marker lat={DEFAULT_MAP_PROPS.center} lng={DEFAULT_MAP_PROPS.center} text="My Marker" />   */}
        </GoogleMapReact>
      </Box>
    </>
  );
}

export default OurPropertyMap;

const BodyWrapper = styled(Box)`
  margin-left: 60px;
  margin-right: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
