import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_ABOUT_US } from "../../../queries/content";
import Image from "next/image";
import { AboutUs } from "../../../_data/VMI_content";

function AboutUsSection({aboutUs}:any) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="left"
          sx={{
            margin: "40px 0px 20px 0px",
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
            margin: "20px 0px 0px 0px",
          }}
        >
          {aboutUs && aboutUs.aboutUs}
        </Typography>
      </Grid>
      <Grid
        visibility={{ xs: "hidden", md: "visible" }}
        sx={{
          margin: "48px 0px 48px 0px",
        }}
        item
        xs={12}
        md={5}
      >
        {AboutUs && (
          <Image width={100} layout="responsive" height={100} src={AboutUs.image}></Image>
        )}
      </Grid>
    </Grid>
  );
}

export default AboutUsSection;
