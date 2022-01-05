import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useAxios } from "use-axios-client";
import axios from "axios";
import PhoneIcon from "../../../public/phone.svg";
import locationIcon from "../../../public/location.svg";
import emailIcon from "../../../public/email.svg";
import instagramIcon from "../../../public/instagram.svg";
import facebookIcon from "../../../public/facebook.svg";
import twitterIcon from "../../../public/twitter.svg";
import Link from "next/link";

function Footer({ about }: any) {
  // States

  // Variables

  // Functions

  // Effects

  return (
    <BodyWrapper className="site-footer">
      {/* {JSON.stringify(about)} */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{ marginBottom: `24px` }}
          >
            Visit Madh Island
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{ marginBottom: `12px` }}
          >
            &copy; 2021 Visit MadhIsland
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{ marginBottom: `12px` }}
          >
            All Rights Reserved
          </Typography>
          <ul className="social-link">
            <li>
              <a href={about?.instagramUrl}>
                <img src={instagramIcon.src} alt="instagram" />
              </a>
            </li>
            <li>
              <a href={about?.facebookUrl}>
                <img src={facebookIcon.src} alt="facebook" />
              </a>
            </li>
            <li>
              <a href={about?.youtubeUrl}>
                <img src={twitterIcon.src} alt="twitter" />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{ marginBottom: `24px` }}
          >
            Get in Touch
          </Typography>
          <ul className="footer-links">
            <li>
              <a href={`tel: ${about?.phoneNumber}`}>
                <img src={PhoneIcon.src} alt="" />
                {about?.phoneNumber}
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={locationIcon.src} alt="" />
                {about?.addressLine1} {about?.addressLine2}
              </a>
            </li>
            <li>
              <a href={`mailto: ${about?.emailId}`}>
                <img src={emailIcon.src} alt="" />
                {about?.emailId}
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography
            variant="h6"
            component="h3"
            color="#535353"
            textAlign="left"
            sx={{ marginBottom: `24px` }}
          >
            Site Map
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="/contact-us">
                <a>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="#535353"
                    textAlign="left"
                  >
                    Talk to us
                  </Typography>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition">
                <a>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="#535353"
                    textAlign="left"
                  >
                    Terms and Condition
                  </Typography>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <a>
                  <Typography
                    variant="body1"
                    component="h3"
                    color="#535353"
                    textAlign="left"
                  >
                    Privacy Policy
                  </Typography>
                </a>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </BodyWrapper>
  );
}

export default Footer;
const BodyWrapper = styled("footer")`
  padding-left: 60px;
  padding-right: 60px;
  background-color: #e6e6e6;
  /* background-color:'#E6E6E6'; */
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
