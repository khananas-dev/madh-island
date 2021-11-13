import { useQuery } from "@apollo/react-hooks";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_ABOUT_US } from "../../../queries/content";
import Image from "next/image";

function AboutUsSection() {
  const { data, loading, error } = useQuery(GET_ABOUT_US);

  console.log({ data,loading, error });

const [cached, setCached] = useState(true);
useEffect(() => {
    if (loading) setCached(false);
  }, [loading]);

 
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="left"
          sx={{
            margin: "48px 0px 48px 0px",
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
            margin: "48px 0px 48px 0px",
          }}
        >
          {data && data.aboutUs.content}
        </Typography>
      </Grid>
      <Grid
        visibility={{ xs: "hidden", md: "visible" }}
        sx={{
          margin: "48px 0px 48px 0px",
        }}
        item
        xs={12}
        md={4}
      >
        {/* {data && <Image src={data.aboutUs.image}></Image>} */}
      </Grid>
    </Grid>
  );
}

export default AboutUsSection;
