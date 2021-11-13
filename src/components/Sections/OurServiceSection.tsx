import { Typography, Grid } from '@mui/material'
import React from 'react'

function OurServiceSection() {
    return (
        <>
            <Typography
          variant="h2"
          component="h2"
          color="primary"
          textAlign="center"
          sx={{
            margin: "0px 0px 48px 0px",
          }}
        >
          Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h5"
              color="primary"
              textAlign="center"
            >
              Services
            </Typography>
          </Grid>
        </Grid>  
        </>
    )
}

export default OurServiceSection
