import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Link, styled, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function searchResult() {
  const [index, setIndex] = React.useState("VillasandBunglow");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setIndex(newValue);
  };

  return (
    <BodyWrapper>
      <div className="header">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Search Result for ItemfromUrl
          </Link>
        </Breadcrumbs>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={index}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Villa and Bunglow" value="VillasandBunglow" />
            <Tab label="Film Location" value="FilmLocation" />
            <Tab label="Event Venues" value="EventVenues" />
            <Tab label="Recee" value="Recee" />
          </TabList>
        </Box>
        <TabPanel value="VillasandBunglow">Villa and Bunglow</TabPanel>
        <TabPanel value="FilmLocation">Film Location</TabPanel>
        <TabPanel value="EventVenues">Event Venues</TabPanel>
        <TabPanel value="Recee">Recee</TabPanel>
      </TabContext>
    </Box>
      
    </BodyWrapper>
  );
}

export default searchResult;
const BodyWrapper = styled(Box)`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
