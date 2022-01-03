import { useQuery } from "@apollo/react-hooks";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_ABOUT_US } from "../../../queries/content";
import Image from "next/image";
// import { AboutUs } from "../../../_data/VMI_content";
import AboutUs from '../../../public/about-us.jpg';
import theme from "../../theme";

function AboutUsSection({ aboutUs }: any) {
  return (
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
        About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid className="about-col-1" item xs={12} md={4}>

          <Typography
            className="about-description"
            component="p"
          >
            {aboutUs && aboutUs.aboutUs}
          </Typography>
        </Grid>
        <Grid
          // visibility={{ xs: "hidden", md: "visible" }}
          // display={{ xs: "none", md: "block" }}
          className="about-col-2"
          item
          xs={12}
          md={8}
        >
          {AboutUs && (
            // <Image className="about-us-img" width={100} layout="responsive" height={100} src={AboutUs}></Image>
            <img className="about-us-img" src={AboutUs.src}/>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsSection;
