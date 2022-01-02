import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useAxios } from "use-axios-client";
import axios from 'axios';

function Footer(props:any) {

    return (
    <BodyWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`24px`}}

          >
            Visit Madh Island
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`12px`}}

          >
            @2021 Visit MadhIsland 
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`12px`}}

          >
            All Rights Reserved 
          </Typography>
      
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`24px`}}

          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
          >
            103-Sicily, 
First Floor, Raheja Exotica
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`24px`}}
          >
            Site Map
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`12px`}}

          >
            Talk to us
          </Typography>
          {/* <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{marginBottom:`12px`}}

          >
            About Us
          </Typography> */}
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            sx={{marginBottom:`12px`}}

            textAlign="left"
          >
            Terms and Condition
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            sx={{marginBottom:`12px`}}

            textAlign="left"
          >
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </BodyWrapper>
  );
}
 



export default Footer;
const BodyWrapper = styled(Box)`
  padding-left: 60px;
  padding-right: 60px;
  background-color: #e6e6e6;
  /* background-color:'#E6E6E6'; */
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
 

