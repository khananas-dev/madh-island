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
  const [propertyList, setPropertyList] = useState<any[]>([
    {
      _id: "61bfce8ff9552e100d65d7fb",
      title: "Test Mansion",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 91.123,
      latitude: -123.123,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 20000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 35000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 4,
      images: [
        {
          _id: "61c2317bb9ec27217e70c228",
          propertyId: "61bfce8ff9552e100d65d7fb",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61bfce8ff9552e100d65d7fb--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61bfd4fc2ad8a17649970f08",
      title: "New Mansion Dummy",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 91.123,
      latitude: -123.123,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 3,
      images: [
        {
          _id: "61c2314db9ec27217e70c226",
          propertyId: "61bfd4fc2ad8a17649970f08",
          title: "Some new image",
          imageUrl:
            "https://vmi-assets.s3.amazonaws.com/property/61bfd4fc2ad8a17649970f08--0ae4173c-d1c6-4dfa-b262-ec72c76e8e45.webp",
        },
      ],
    },
    {
      _id: "61bfd53ca11408d6b3af1fd2",
      title: "Test Return ID Property",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 91.123,
      latitude: -123.123,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 3,
      images: [
        {
          _id: "61c2318bb9ec27217e70c22a",
          propertyId: "61bfd53ca11408d6b3af1fd2",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61bfd53ca11408d6b3af1fd2--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61c0b3f77eace1a815f3b97a",
      title: "My Mansion 1",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 91.123,
      latitude: -123.123,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 5,
      images: [
        {
          _id: "61c2319db9ec27217e70c22c",
          propertyId: "61c0b3f77eace1a815f3b97a",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61c0b3f77eace1a815f3b97a--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61c0b4047eace1a815f3b97c",
      title: "Nirlon Bunglow",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 19.146638077647513,
      latitude: 72.78988749609002,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 3,
      images: [
        {
          _id: "61c231aab9ec27217e70c22e",
          propertyId: "61c0b4047eace1a815f3b97c",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61c0b4047eace1a815f3b97c--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61c0b40b7eace1a815f3b97e",
      title: "Sukoon Bungalow",
      ownerId: "61bfba54340d747975c21a82",
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 19.148360204126508,
      latitude: 72.78976224016589,
      sizeOfProperty: 1350,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      noOfBedrooms: 3,
      images: [
        {
          _id: "61c231b9b9ec27217e70c230",
          propertyId: "61c0b40b7eace1a815f3b97e",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.us-east-2.amazonaws.com/property/61c0b40b7eace1a815f3b97e--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61d1a347c31c61bdfdbc688d",
      title: "Vailainkani Villa",
      ownerId: "61c880c59e20686bb14df61a",
      amenities: [
        {
          title: "Electricity kW",
          className: "electricity",
          isActive: true,
          createdAt: "2022-01-02T12:53:56.232Z",
          updatedAt: "2022-01-02T12:53:56.232Z",
          id: "61d1a0646626b03dcb3213d4",
        },
      ],
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 19.146322965945338,
      latitude: 72.79081165233225,
      sizeOfProperty: 1350,
      noOfBedrooms: 4,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      images: [
        {
          _id: "61d1a42b36b1dc809f857bd6",
          propertyId: "61d1a347c31c61bdfdbc688d",
          title: "Test Title",
          imageUrl:
            "https://vmi-assets.s3.amazonaws.com/property/61d1a347c31c61bdfdbc688d--5bf5fbbe-ab49-42db-bf43-6634315c3167.webp",
        },
      ],
    },
    {
      _id: "61d2f90ea279107bb5781e64",
      title: "Mount Mansion",
      ownerId: "61c880c59e20686bb14df61a",
      amenities: ["61d1a0646626b03dcb3213d4"],
      addressLine1: "Test 1",
      addressLine2: "Test 2",
      longitude: 91.123,
      latitude: -123.123,
      sizeOfProperty: 1350,
      noOfBedrooms: 4,
      description: "Test description",
      homeRuleTruths: "some text",
      policies: "some policies",
      villaBunglowPrice: 30000,
      additionalChargePerPerson: 500,
      additionalChargeMin: 10,
      additionalChargeMax: 15,
      eventVenuePrice: 45000,
      eventVenueMaxCapacity: 500,
      managerName: "Cadbury",
      managerPhoneNumber: "1231231321",
      managerEmail: "manager@testmansion.com",
      staffName: "Butler",
      staffPhoneNumber: "987654321",
      images: [],
    },
    {
      _id: "61d322ce8c0e4942d5c06964",
      title: "Dummy1",
      ownerId: "61c87983c4b9554011d88151",
      amenities: [],
      addressLine1: "Address line 1",
      addressLine2: "Mumbai",
      longitude: 72.79081165233225,
      latitude: 19.146322965945338,
      sizeOfProperty: 500,
      noOfBedrooms: 5,
      description: "Some description",
      homeRuleTruths: "Some hourse rules",
      policies: "Policies",
      villaBunglowPrice: 5000,
      additionalChargePerPerson: 2000,
      additionalChargeMin: 8,
      additionalChargeMax: 28,
      eventVenuePrice: 60000,
      eventVenueMaxCapacity: 100,
      managerName: "Mahesh",
      managerPhoneNumber: "9988669988",
      managerEmail: "Hitesh@gmail.com",
      staffName: "Hitesh",
      staffPhoneNumber: "6699885566",
      images: [],
    },
    {
      _id: "61d5e82a8c0e4942d5c06c80",
      title: "Property name111",
      ownerId: "61c87983c4b9554011d88151",
      amenities: [],
      addressLine1: "Addressline1 1",
      addressLine2: "",
      longitude: null,
      latitude: null,
      sizeOfProperty: 600,
      noOfBedrooms: 8,
      description: "Description",
      homeRuleTruths: "Omerule",
      policies: "Policies",
      villaBunglowPrice: 500,
      additionalChargePerPerson: 600,
      additionalChargeMin: 10,
      additionalChargeMax: 26,
      eventVenuePrice: 800,
      eventVenueMaxCapacity: 600,
      managerName: "Mname",
      managerPhoneNumber: "9988669988",
      managerEmail: "",
      staffName: "Snamw",
      staffPhoneNumber: "8899669988",
      images: [],
    },
  ]);

  // Variable
  const open = Boolean(anchorEl);
  const router = useRouter();

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

  const handleSort = (isDecending?: boolean, service?: string) => {
    // #1. Setting Price Key Based on Service Type
    let priceKey: string = "";
    switch (service) {
      case "VillasandBunglow":
        priceKey = "villaBunglowPrice";
        break;
      case "EventVenues":
        priceKey = "eventVenuePrice";
        break;
      default:
        break;
    }

    // #2. Sorting using Price Key
    const sortedProperty: any[] = propertyList.sort((a: any, b: any) =>
      isDecending ? b[priceKey] - a[priceKey] : a[priceKey] - b[priceKey]
    );
    setPropertyList(sortedProperty);
    setAnchorEl(null);
  };

  const handlePropertyDetails = (propertyid: any) => {
    router.push({
      // pathname: `/property/${propertyid}`,
      pathname: "/property/" + `${propertyid}`,
      query: { id: `${propertyid}` },
    });
  };

  const searchFilteredData = () => {
    const sortedData = propertyList.filter((item: any) => {
      // const objectKeys = items[0] && Object.keys(items[0]);
      // return items.filter((item: any) =>
      //   objectKeys.some((objectKey: any) =>
      //     item[objectKey].toString().toLowerCase().includes("tes")
      //   )
      // );
      return item.title.toLowerCase().includes("test");
    });

    setPropertyList(sortedData);
  };

  // Effects

  useEffect(() => {
    searchFilteredData();
  }, []);

  return (
    <BodyWrapper>
      <div className="header">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Search Result for ItemfromUrl
          </Link>
        </Breadcrumbs>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {serviceList &&
              serviceList.map((item: any, index: number) => (
                <Tab key={`search-tab-${index}`} label={item?.title} />
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
              <Grid container spacing={2} justifyContent="space-between">
                {propertyList &&
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
                  ))}
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
