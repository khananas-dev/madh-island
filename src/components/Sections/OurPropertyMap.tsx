import { Typography, Box } from "@mui/material";
import React from "react";
import { DEFAULT_MAP_PROPS } from "../../constants";
import GoogleMapReact from "google-map-react";
import Marker from "../../utils/marker";
import styled from "styled-components";


function OurPropertyMap({ latestLocation }: any) {
  
  // const DEFAULT_MAP_PROPS = {
  //   center: {
  //     lat: latestLocation && latestLocation[0]?.longitude, 
  //     lng: latestLocation && latestLocation[0]?.longitude,
  //   },
  //   zoom: 14,
  // };
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
      <Box style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: `AIzaSyDLSXets8Lb-32VYPDYj-vEtKhDXBIBiy0` }}
          defaultCenter={DEFAULT_MAP_PROPS.center}
          defaultZoom={DEFAULT_MAP_PROPS.zoom}
        >
          {/* <AnyReactComponent
            lat={19.16249680843635}
            lng={72.78985200327892}
            text="My Marker"
          /> */}
          {
            latestLocation &&
            latestLocation.map((item: any, index: number) => (
              <Marker
                key={`property-marker-${index}`}
                lat={item?.longitude}
                lng={item?.latitude}
                text={item?.title}
              />
            ))
          }
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
