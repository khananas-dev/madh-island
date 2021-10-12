import { Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SearchBarProps } from "../../../src/components/props";
import SearchBar from "../../../src/components/searchBar/SearchBar";
import { SearchWrapper, SortIcon } from "./propertyListElements";
import { BodyWrapper } from "./propertyListElements";
import { CgSortAz } from "react-icons/cg";
import PropertyCard from "../../../src/components/propertyCard/PropertyCard";

function index() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const router = useRouter();
  let SearchObj: SearchBarProps = {} as SearchBarProps;
  const [state, setState] = useState(SearchObj);


  if (router.query.checkin && router.query.checkout) {
    SearchObj.checkInDate = new Date(router.query.checkin.toString());
    SearchObj.checkOutDate = new Date(router.query.checkout.toString());
  }
  if (!router.query.checkin || !router.query.checkout) {
    SearchObj.checkInDate = today;
    SearchObj.checkOutDate = tomorrow;
  }
  if (router.query.service) {
    SearchObj.serviceType = router.query.service.toString();
  }
 


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Grid
        sx={{
          background: `linear-gradient(270.44deg, rgba(196, 221, 222, 0.59) 0.19%, rgba(217, 232, 228, 0.64) 76.63%, rgba(230, 230, 230, 0.95) 100.76%);`,
        }}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          sx={{ paddingTop: `32px`, paddingBottom: `32px` }}
          item
          xs={12}
          sm={12}
          md={12}
        >
          <SearchWrapper sx={{ margin: `auto` }}>
            <SearchBar
              checkInDate={SearchObj.checkInDate}
              checkOutDate={SearchObj.checkOutDate}
              serviceType={SearchObj.serviceType}
            />
          </SearchWrapper>
        </Grid>
      </Grid>
      <BodyWrapper>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={10} sm={10} md={6}>
            <Typography variant="h2" color="primary" component="h2">
              {SearchObj.serviceType === "VillasandBunglow" &&
                `Villas & Bungalows`}
              {SearchObj.serviceType === "EventVenues" && `Event Venue`}
              {SearchObj.serviceType === "FilmLocation" && `Film Location`}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} sx={{ textAlign: `right` }}>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <SortIcon />
              <Typography color="#1f1f1f" component="h2">
                SORT
              </Typography>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Price Low To High</MenuItem>
              <MenuItem onClick={handleClose}>Price High To Low</MenuItem>
              <MenuItem onClick={handleClose}>Area Low To High</MenuItem>
              <MenuItem onClick={handleClose}>Area High To Low</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: `32px` }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
            <PropertyCard></PropertyCard>
          </Grid>
        </Grid>
      </BodyWrapper>
    </Box>
  );
}

export default index;
