import { Box, Grid, Typography, Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import PropertyCard from '../src/components/PropertyCard/PropertyCard'
import RaceeCard from '../src/components/RaceeCard/RaceeCard'
import SearchBar from '../src/components/SearchBar/SearchBar'
import { SearchWrapper, BodyWrapper, SortIcon } from './propertieslist/[serviceType]/propertyListElements'

function Recee() {
    return (
        <Box>
        <BodyWrapper>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={10} sm={10} md={6}>
              <Typography variant="h2" color="primary" component="h2">
                Racee
              </Typography>
            </Grid>
            
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: `32px` }}
            justifyContent="space-between"
          >
            <Grid item xs={12} md={4}>
              <RaceeCard id={`1`}></RaceeCard>
            </Grid>
          </Grid>
        </BodyWrapper>
      </Box>
    )
}

export default Recee
