
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Link from './Navlink'
import { Box } from '@mui/material';
export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1440px) / 2);
  z-index: 10;
  box-shadow: 0px 6px 16px rgba(110, 110, 110, 0.16);
 
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const Bars = styled(FaBars)`
    color: #1F1F1F;
    display:none;
    @media screen and (max-width: 768px) {
      display: block;
      color: #1F1F1F;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  `;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchBoxContainer = styled(Box)`
display:flex;
align-items:center;
`
