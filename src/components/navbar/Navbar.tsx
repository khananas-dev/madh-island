import React, { useEffect, useState } from "react";
import { Nav, NavMenu, NavBtn, Bars } from "./NavbarElements";
import Link from "./Navlink";
import NavLink from "./Navlink";
import { SidebarProps } from "../props";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Autocomplete } from "@mui/lab";
import { IconButton, TextField, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import { ServiceCategory } from "../../services/serviceCategory/serviceCategory";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];
function Navigation(sideBarProps: SidebarProps) {
  // States
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [serviceList, setServiceList] = useState<any>();

  // Variable
  const serviceCategory = new ServiceCategory();

  // Funciton
  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };

  const _getAllServiceList = () => {
    const serviceListData = serviceCategory.getServiceCategoryList();
    serviceListData.then((res: any) => {
      if (res.status == 200) {
        console.log(res.data.data);
        // #1. Adding data in state in the for catergoryList
        setServiceList(res.data.data);
      }

    })
  }

  // Effects
  useEffect(() => {
    _getAllServiceList();
  }, []);


  return (
    <>
      <Nav style={{ height: 80 }}>
        <NavLink href="/">
          <Image
            src={logo}
            width="175"
            height="60"
            alt="Logo of Visit Madh Island"
          />
        </NavLink>
        <Bars onClick={sideBarProps.toggleSidebar} />
        <NavMenu>
          {
            serviceList &&
            serviceList.map((service:any, index:number) => (
              <NavLink
                key={index}
                onClick={() => setFilter(service.route)}
                href={{
                  pathname: "/propertieslist/",
                  query: {
                    serviceType: service.route,
                  },
                }}
              >
                {service.title}
              </NavLink>
            ))
          }
          
          {/* <NavLink href="/History">
            <ProfileAvatar />
          </NavLink> */}
        </NavMenu>
        <Box>
        {showAutocomplete && (
            <Autocomplete
              style={{}}
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Search Property" />
              )}
            />
          )}
          <IconButton
            color="primary"
            aria-label="Search Property"
            onClick={() => setShowAutocomplete(!showAutocomplete)}
          >
            <Search style={{ width: 24 }} />
          </IconButton>
          </Box>
        <NavBtn></NavBtn>
      </Nav>
    </>
  );
}

export default Navigation;
