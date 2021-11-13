import { Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { PropertyCardFactory } from "../../../@types";
import PropertyCard from "../PropertyCard/PropertyCard";
import router from "next/router";
import { TOP_PROPERTIES } from "../../constants";

function TopLocations() {
    const [topLocations, setTopLocations] = useState(TOP_PROPERTIES);

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
          margin: "48px 0px 48px 0px",
        }}
      >
        Top Locations
      </Typography>
      <Grid container spacing={2}>
        {topLocations.map((property: PropertyCardFactory) => (
          <Grid item xs={12} md={4} key={property.id}>
            <PropertyCard
              id={property.id}
              key={property.id}
              img={property.img}
              area={property.area}
              amminityList={property.amminityList}
              propertyName={property.propertyName}
              serviceType={property.serviceType}
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
