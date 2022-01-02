import { useQuery } from "@apollo/react-hooks";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_ABOUT_US } from "../../../queries/content";
import Image from "next/image";
import { AboutUs } from "../../../_data/VMI_content";
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
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
          <Typography
            className="about-description"
            component="p"
          >
            {aboutUs && aboutUs.aboutUs}
          </Typography>
        </Grid>
        <Grid
          visibility={{ xs: "hidden", md: "visible" }}
          // display={{ xs: "none", md: "block" }}
          sx={{
            margin: "0px 0px 48px 0px",
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
    </Box>
  );
}

export default AboutUsSection;
