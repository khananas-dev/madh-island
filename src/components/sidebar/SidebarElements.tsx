import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0c9b75;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
`;
export const Icon = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1ft;
  /* grid-template-rows: repeat(6, 80px); */
  text-align: center;
  @media screen and (max-width: 480px) {
    /* grid-template-rows: repeat(6, 60px); */
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-ease-in-out;
  color: #fff;
  cursor: position;
  &::hover {
    color: red;
    transition: 0.2 ease-ease-in-out;
  }
`;
