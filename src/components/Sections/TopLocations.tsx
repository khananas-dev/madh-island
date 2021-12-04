import { Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { PropertyCardFactory } from "../../../@types";
import PropertyCard from "../PropertyCard/PropertyCard";
import router from "next/router";
import { TOP_PROPERTIES } from "../../constants";
import { propertyFullData } from "../../../_data/propertyListData";
function TopLocations() {
  // const [topLocations, setTopLocations] = useState(TOP_PROPERTIES);
  const [topLocations, setTopLocations] = useState(propertyFullData);
  console.log(topLocations);
  const handleTopLocations = (ev: any, property: any) => {
    router.push({
      pathname: `/property/${property.id}`,
      query: {
        service: property.serviceType,
      },
    });
  };
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        textAlign="center"
        sx={{
          margin: "40px 0px 20px 0px",
        }}
      >
        Top Locations
      </Typography>
        <Grid container spacing={2}>
        {topLocations && topLocations.map((property: any) => (
          <Grid item xs={12} md={4} key={property.id}>
            <PropertyCard
              id={property._id}
              key={property._id}
              img={property.images[0]}
              area={property.area}
              amminityList={property.amenities}
              bedroom={property.bedroom}
              propertyName={property.title}
              buttonsList={property.buttonsList}
              action={handleTopLocations}
            />
          </Grid>
        ))}
      </Grid>  
    </>
  );
}

export default TopLocations;
