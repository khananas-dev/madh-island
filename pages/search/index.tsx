import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  Box,
  Button,
  Grid,
  Link,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CgSortAz } from "react-icons/cg";
import PropertyCard from "../../src/components/PropertyCard/PropertyCard";
import { useRouter } from "next/router";
import { PropertyService } from "../../src/services/property/propertyService";
import { getStoreFilters, setStoreFilters } from "../../src/utils/localStorage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "20px 0px" }}>{children}</Box>}
    </div>
  );
}

function searchResult({ serviceList }: any) {
  // States
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [propertyList, setPropertyList] = useState<any>(null);
  const [serviceTypeId, setServiceTypeId] = useState<any>(
    "61bfb4cc69554cea7ba278c4"
  );

  // Variable
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { keyword } = router.query;
  const propertyService = new PropertyService();

  // Functions

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleSort = (isDecending?: boolean, service?: string) => {
  //   // #1. Setting Price Key Based on Service Type
  //   let priceKey: string = "";
  //   switch (service) {
  //     case "VillasandBunglow":
  //       priceKey = "villaBunglowPrice";
  //       break;
  //     case "EventVenues":
  //       priceKey = "eventVenuePrice";
  //       break;
  //     default:
  //       break;
  //   }

  //   // #2. Sorting using Price Key
  //   const sortedProperty: any[] = propertyList?.sort((a: any, b: any) =>
  //     isDecending ? b[priceKey] - a[priceKey] : a[priceKey] - b[priceKey]
  //   );
  //   setPropertyList(sortedProperty);
  //   setAnchorEl(null);
  // };

  function capitalize(word: any) {
    return word
      ?.split("")
      ?.map((letter: any, index: number) =>
        index ? letter?.toLowerCase() : letter?.toUpperCase()
      )
      .join("");
  }

  const handlePropertyDetails = (propertyid: any) => {
    router.push({
      // pathname: `/property/${propertyid}`,
      pathname: "/property/",
      query: { id: `${propertyid}`, serviceTypeId },
    });
  };

  const _getPropertyByKeyword = (payload: any) => {
    const filteredData = propertyService?.getPropertyByKeyword(payload);
    filteredData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setPropertyList(res?.data?.data);
      } else {
        setPropertyList(null);
      }
    });
  };

  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };

  // Effects

  useEffect(() => {
    // searchFilteredData();
    if (keyword) {
      _getPropertyByKeyword(keyword);
    }
  }, [keyword]);
  useEffect(() => {
    setFilter("VillasandBunglow");
  }, []);

  return (
    <BodyWrapper>
      <div className="header">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Search Result for : <b>{capitalize(keyword)}</b>
          </Link>
        </Breadcrumbs>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile
            aria-label="Search Tabs"
          >
            {serviceList &&
              serviceList.map((item: any, index: number) => (
                <Tab
                  onClick={() => {
                    setFilter(item?.route);
                    setServiceTypeId(item?.id);
                  }}
                  key={`search-tab-${index}`}
                  label={item?.title}
                />
              ))}
          </Tabs>
        </Box>
        {serviceList &&
          serviceList.map((item: any, index: number) => (
            <TabPanel
              key={`search-tab-panel-${index}`}
              value={value}
              index={index}
            >
              <Grid container spacing={2}>
                {propertyList && propertyList ? (
                  propertyList.map((property: any) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      key={`property-card-${property._id}`}
                    >
                      <PropertyCard
                        isPriceDivider
                        id={property._id}
                        key={property._id}
                        img={
                          property.images[0]?.imageUrl ||
                          "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        }
                        area={property?.sizeOfProperty}
                        amminityList={property?.amenities}
                        addressLine1={property.addressLine1}
                        bedroom={property?.noOfBedrooms}
                        propertyName={property.title}
                        buttonsList={property.buttonsList}
                        price={property}
                        serviceType={item?.route}
                        action={handlePropertyDetails}
                      />
                    </Grid>
                  ))
                ) : (
                  <div className="property-not-found">
                    <h5>Nothing Found</h5>
                  </div>
                )}
              </Grid>
            </TabPanel>
          ))}
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

const SortIcon = styled(CgSortAz)`
  width: 24px;
  height: 24px;
  color: #535353;
`;
