import React from "react";
import { SidebarProps } from "../props";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";
import { FaTimes } from "react-icons/fa";

const Sidebar = (props: SidebarProps): JSX.Element => {
  console.log(props.isOpen ? "visible" : "hidden")
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
        
        <FaTimes/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
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
        </SidebarMenu>
      </SidebarWrapper>
    </aside>
  );
};

export default Sidebar;
