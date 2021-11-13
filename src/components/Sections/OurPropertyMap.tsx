import { Typography, Box } from '@mui/material'
import React from 'react'
import { DEFAULT_MAP_PROPS } from '../../constants'
import GoogleMapReact from "google-map-react";
 function OurPropertyMap() {
    return (
        <>
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
          defaultCenter={DEFAULT_MAP_PROPS.center}
          defaultZoom={DEFAULT_MAP_PROPS.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </Box>  
        </>
    )
}

export default OurPropertyMap
