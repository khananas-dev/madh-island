import React from "react";
import { SidebarProps } from "../props";
import {
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";
import { FaTimes } from "react-icons/fa";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import Link from "next/link";
import btnCloseIcon from "../../../public/close.svg";

const Sidebar = (props: SidebarProps): JSX.Element => {
  // States

  // Variables

  // Funtions
  const setFilter = (serviceType: string) => {
    let searchFilters = getStoreFilters();
    searchFilters.serviceType = serviceType;
    setStoreFilters(searchFilters);
  };

  // Effects
  console.log(props.isOpen ? "visible" : "hidden");
  return (
    <aside
      style={{
        position: "fixed",
        zIndex: 999,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0C9B75",
        display: `grid`,
        alignItems: "center",
        top: 0,
        left: 0,
        transition: "0.3 ease-in-out",
        visibility: props.isOpen ? "visible" : "hidden",
        // transition: 0.3 ease-in-out
      }}
      onClick={props.toggleSidebar}
    >
      <Icon onClick={props.toggleSidebar}>
        <img height={35} width={35} src={btnCloseIcon.src} alt="close button" />
      </Icon>
      <SidebarWrapper>
        <ul className="sidebar-link">
          {props?.serviceCategoryList &&
            props?.serviceCategoryList.map((service: any, index: number) => (
              <li>
                <Link
                  key={`sidebar-list-${index}`}
                  href={{
                    pathname: "/propertieslist/",
                    query: {
                      serviceType: service.route,
                    },
                  }}
                >
                  <a onClick={() => setFilter(service.route)}>
                    {service?.title}
                  </a>
                </Link>
              </li>
            ))}
        </ul>

        {/* <SidebarMenu>
          <SidebarLink href="/about">Raccee</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Film Location</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Shoot Permision</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Event Venues Permision</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Villa and Bunglow</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Search</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink href="/about">Profile Name</SidebarLink>
        </SidebarMenu> */}
      </SidebarWrapper>
    </aside>
  );
};

export default Sidebar;
