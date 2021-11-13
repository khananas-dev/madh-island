import React, { useEffect, useState } from "react";
import { Nav, NavMenu, NavBtn, Bars } from "./NavbarElements";
import Link from "./Navlink";
import NavLink from "./Navlink";
import { SidebarProps } from "../props";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

function Navigation(sideBarProps: SidebarProps) {
// const [navState, setNavState] = useState([]);

// // ON INIT
// useEffect(() => {
//   setNavState([])
// }, [])

  return (
    <>
      <Nav>
        <NavLink href="/">
          <Image
            src={logo}
            width="250"
            height="80"
            alt="Logo of Visit Madh Island"
          />
        </NavLink>
        <Bars onClick={sideBarProps.toggleSidebar} />
        <NavMenu>
          <NavLink href="/recee">Recee</NavLink>
          <NavLink
            href={{
              pathname: "/propertieslist/FilmLocation",
              query: {
                service: `FilmLocation`,
              },
            }}
          >
            Film Location
          </NavLink>
          {/* <NavLink href="/shoot-permissions">Shoot Permissions</NavLink> */}

          <NavLink
            href={{
              pathname: "/propertieslist/EventVenues",
              query: {
                service: `EventVenues`,
              },
            }}
          >
            Event Venues
          </NavLink>
          
          <NavLink
            href={{
              pathname: "/propertieslist/VillasandBunglow",
              query: {
                service: `VillasandBunglow`,
              },
            }}
          >
            Villas & Bungalows

          </NavLink>
          <NavLink href="#">Search</NavLink>
          <NavLink href="/History"><ProfileAvatar/></NavLink>
        </NavMenu>
        <NavBtn></NavBtn>
      </Nav>
    </>
  );
}

export default Navigation;
