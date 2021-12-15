import React, { useEffect, useState } from "react";
import { Nav, NavMenu, NavBtn, Bars } from "./NavbarElements";
import Link from "./Navlink";
import NavLink from "./Navlink";
import { SidebarProps } from "../props";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Autocomplete } from "@mui/lab";
import { IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];
function Navigation(sideBarProps: SidebarProps) {
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };
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
          <NavLink
            onClick={() => setFilter("Recee")}
            href={{
              pathname: "/propertieslist/",
              query: {
                serviceType: `Recee`,
              },
            }}
          >
            Recee
          </NavLink>
          <NavLink
            onClick={() => setFilter("FilmLocation")}
            href={{
              pathname: "/propertieslist/",
              query: {
                serviceType: `FilmLocation`,
              },
            }}
          >
            Film Location
          </NavLink>
 
          <NavLink
            onClick={() => setFilter("EventVenues")}
            href={{
              pathname: "/propertieslist/",
              query: {
                serviceType: `EventVenues`,
              },
            }}
          >
            Event Venues
          </NavLink>

          <NavLink
            onClick={() => setFilter("VillasandBunglow")}
            href={{
              pathname: "/propertieslist/",
              query: {
                serviceType: `VillasandBunglow`,
              },
            }}
          >
            Villas & Bungalows
          </NavLink>

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
            <Search  style={{width:24}}/>
          </IconButton>
          {/* <NavLink href="/History">
            <ProfileAvatar />
          </NavLink> */}
        </NavMenu>
        <NavBtn></NavBtn>
      </Nav>
    </>
  );
}

export default Navigation;
