import { Grid, Typography, Button } from "@mui/material";
import { styled, Box } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";

function TalkToUsSection() {
  // States

  // Variables
  const router = useRouter();

  // Functions

  // Effects
  return (
    <TalkToUsContainer>
      <Grid container spacing={2} className="talk-to-us-wrapper">
        <Grid item xs={12} sm={8} md={10}>
          <Typography
            variant="h2"
            component="h2"
            color="#191919"
            textAlign="left"
          >
            Have a specific location requirement?
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            textAlign="left"
          >
            Talk to us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => router.push("/contact-us")} variant="outlined">
            Tell Us
          </Button>
        </Grid>
      </Grid>
    </TalkToUsContainer>
  );
}
const TalkToUsContainer = styled(Box)`
  background: #eafcf7;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 40px;
  margin: 40px 0px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
  }
`;

export default TalkToUsSection;
