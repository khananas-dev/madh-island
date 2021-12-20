import { Typography, Box } from "@mui/material";
import React from "react";
import { DEFAULT_MAP_PROPS } from "../../constants";
import GoogleMapReact from "google-map-react";
import Marker from "../../utils/marker";
function OurPropertyMap() {
  return (
    <>
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
