import { Typography, Grid, Box } from "@mui/material";
import React, { useState } from "react";
// import PropertyCard from "../PropertyCard/PropertyCard";
import router from "next/router";
import { TOP_LOCATIONS } from "../../../_data/topLocation";
import theme from "../../theme";
import PropertyCard from "../PropertyCard/PropertyCard";
function TopLocations({ latestLocation }: any) {
  // States
  // const [topLocations, setTopLocations] = useState(TOP_PROPERTIES);
  const [topLocations, setTopLocations] = useState(TOP_LOCATIONS);

  // Variable

  // Functions
  // console.log(topLocations);
  const handleTopLocations = (ev: any, property: any) => {
    console.log(property);
    router.push({
      pathname: `/search`,
      query: { search: property },
    });
  };

  // Effects

  return (
    <>
      <Box
        sx={{
          borderRadius: 8,
          [theme.breakpoints.down("md")]: {
            marginTop: `40px`,
          },
          [theme.breakpoints.up("md")]: {
            marginTop: `80px`,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="left"
          sx={{
            margin: "0px 0px 20px 0px",
          }}
        >
          Latest Locations
        </Typography>
        <Grid container spacing={4}>
          {latestLocation &&
            latestLocation.map((property: any) => (
              <Grid item xs={12} md={4} key={`latest-location-${property._id}`}>
                <PropertyCard
                  // isPriceDivider
                  id={property?._id}
                  key={property?._id}
                  img={
                    property?.images[0]?.imageUrl ||
                    "http://www.exoticamadhisland.com/img/2.jpg"
                  }
                  area={property?.sizeOfProperty}
                  amminityList={property?.amenities}
                  addressLine1={property?.addressLine1}
                  bedroom={property?.noOfBedrooms}
                  propertyName={property?.title}
                  // buttonsList={property.buttonsList}
                  // price={property.price}
                  action={(ev: any) => handleTopLocations(ev, property?.title)}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default TopLocations;
