import { Typography, Grid } from '@mui/material'
import React from 'react'

function OurClients() {
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
          Our Clients
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
          <Grid item xs={4} md={2}>
            <span>Some Icon</span>
          </Grid>
        </Grid>  
        </>
    )
}

export default OurClients
