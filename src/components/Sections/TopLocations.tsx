import { Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { PropertyCardFactory } from "../../../@types";
import PropertyCard from "../PropertyCard/PropertyCard";
import router from "next/router";
import { TOP_PROPERTIES } from "../../constants";
import { propertyFullData } from "../../../_data/propertyListData";
import { TOP_LOCATIONS } from "../../../_data/topLocation";
function TopLocations({ latestLocation }: any) {
  // States
  // const [topLocations, setTopLocations] = useState(TOP_PROPERTIES);
  const [topLocations, setTopLocations] = useState(TOP_LOCATIONS);

  // Variable

  // Functions
  // console.log(topLocations);
  const handleTopLocations = (ev: any, property: any) => {
    console.log(property)
    router.push({
      pathname: `/search/${property._id}`,

    });
  };

  // Effects


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
        Top Locations
      </Typography>
      <Grid container spacing={4}>
        {topLocations && topLocations.map((property: any) => (
          <Grid item xs={12} md={4} key={property._id}>
            <PropertyCard
              // isPriceDivider
              id={property._id}
              key={property._id}
              img={property.images[0]}
              area={property.area}
              amminityList={property.amenities}
              addressLine1={property.addressLine1}
              bedroom={property.bedroom}
              propertyName={property.title}
              // buttonsList={property.buttonsList}
              // price={property.price}
              action={(ev: any) => handleTopLocations(ev, property)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TopLocations;
