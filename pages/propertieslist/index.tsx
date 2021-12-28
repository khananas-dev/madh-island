import { Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SearchBarProps } from "../../src/components/props";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Box } from "@mui/material";
import PropertyCard from "../../src/components/PropertyCard/PropertyCard";
import { CgSortAz } from "react-icons/cg";
import { PropertyFilter } from "../../@types";
import moment from "moment";
import { DEFAULT_FILTER } from "../../src/constants";
import { TOP_LOCATIONS } from "../../_data/topLocation";
import { getStoreFilters } from "../../src/utils/localStorage";
import { PropertyService } from "../../src/services/property/propertyService";

const fetchPropertiesByFilter = (filter: PropertyFilter) => {
  console.log(filter, "Filters");
};
function index() {
  // States
  const [propertyFilters, setPropertyFilters] = useState({} as PropertyFilter);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [topLocations, setTopLocations] = useState(TOP_LOCATIONS);
  const [propertyList, setPropertyList] = useState<any>();
  const [latestLocation, setLatesLocation] = useState<any>();

  // Variables
  const open = Boolean(anchorEl);
  const router = useRouter();

  const _propertyService = new PropertyService();


  // Functions

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePropertyDetails = (propertyid: any) => {
    router.push({
      pathname: `/property/${propertyid}`,
    });
  };
  const _getAllPropertyList = () => {
    const propertyListData = _propertyService.getPropertyDetail();

    propertyListData.then((res) => {
      if (res.status == 200) {
        // console.log(res.data.data);
        // #1. Saving data to the state of properList
        setPropertyList(res.data.data);
      }
    })
  }

  const _getLatestLocation = ()=> {
    const latestLocationData = _propertyService.getLastestLocation();
    latestLocationData.then((res:any)=>{
      if(!res?.data?.error){
        console.log(res?.data?.data);
        setLatesLocation(res?.data?.data);
      }
    })
  }



  // const [searchBarObj, setSearchBarObj] = useState<SearchBarProps>();

  // Effects

  // Trigger on Route Change
  useEffect(() => {
    console.log(router.query)
    const searchFilters = getStoreFilters();
    const service = searchFilters.serviceType;
    const checkInDate = moment(searchFilters.checkInDate).toDate();
    const checkOutDate = moment(searchFilters.checkOutDate).toDate();
    const filters: PropertyFilter = {
      serviceType: service as string,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
    setPropertyFilters(filters);
    fetchPropertiesByFilter(propertyFilters);
  }, [router.query]);

  useEffect(() => {
    _getAllPropertyList();
    _getLatestLocation();
  }, []);


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
        <Grid item xs={12} sm={12} md={12}>
          <SearchWrapper sx={{ margin: `32px auto`,width:'fit-content !important' }}>
            {propertyFilters && (
              <SearchBar
                from={propertyFilters.checkInDate}
                to={propertyFilters?.checkOutDate}
                serviceType={propertyFilters?.serviceType}
              />
            )}
          </SearchWrapper>
        </Grid>
      </Grid>
      <BodyWrapper>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={10} sm={10} md={6}>
            {propertyFilters.serviceType && (
              <Typography variant="h2" color="primary" component="h2">
                {propertyFilters.serviceType === "VillasandBunglow" &&
                  `Villas & Bungalows`}
                {propertyFilters.serviceType === "EventVenues" && `Event Venue`}
                {propertyFilters.serviceType === "FilmLocation" &&
                  `Film Location`}
              </Typography>
            )}
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
          {propertyList &&
            propertyList.map((property: any) => (
              <Grid item xs={12} md={4} key={property._id}>
                <PropertyCard
                  isPriceDivider
                  id={property._id}
                  key={property._id}
                  img={property.images[0]?.imageUrl}
                  area={property.area}
                  amminityList={property.amenities}
                  addressLine1={property.addressLine1}
                  bedroom={property.bedroom}
                  propertyName={property.title}
                  buttonsList={property.buttonsList}
                  price={property.price}
                  action={handlePropertyDetails}
                />
              </Grid>
            ))}
        </Grid>
      </BodyWrapper>
    </Box>
  );
}

export default index;
const SearchWrapper = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(110, 110, 110, 0.16);
  backdrop-filter: blur(24px);
  padding: 24px;
  max-width: 1100px;
  width: min-content;
`;

const BodyWrapper = styled(Box)`
  padding-top: 80px;
  padding-bottom: 40px;
  margin-left: 60px;
  margin-right: 60px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    margin-left: 30px;
    margin-right: 30px;
    padding-bottom: 20px;
  }
`;
const SortIcon = styled(CgSortAz)`
  width: 24px;
  height: 24px;
  color: #535353;
`;
