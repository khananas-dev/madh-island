import React from "react";
import { SidebarProps } from "../props";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from "./SidebarElements";




const  Sidebar = (props: SidebarProps) : JSX.Element => {
  return (
    <SidebarContainer  isOpen={props.isOpen} onClick={props.toggleSidebar} >
      <Icon onClick={props.toggleSidebar}>
        <CloseIcon></CloseIcon>
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
    </SidebarContainer>
  );
}

export default Sidebar;
