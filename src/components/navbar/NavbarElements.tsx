
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Link from './Navlink'
import { Box, Grid } from '@mui/material';
export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding:0.5rem  60px;
  z-index: 10;
  box-shadow: 0px 6px 16px rgba(110, 110, 110, 0.16);
 
  @media screen and (max-width: 900px) {
    padding: 10px 20px;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const Bars = styled(FaBars)`
    color: #1F1F1F;
    display:none;
    @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
 
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const SearchBoxContainer = styled(Box)`
display:flex;
align-items:center;
max-width:100%;
`

export const StartGrid = styled(Grid)`
display:flex;
justify-content:start;
 a{
   padding:0px 1rem 0px 0px
 }
`

export const CenterGrid = styled(Grid)`
display:flex;
justify-content:center;
@media (max-width:1100px ) {
  a{
    font-size:14px;
  }
}  
@media (max-width:900px){
  justify-content:end;
}

`

export const EndGrid = styled(Grid)`
display:flex;
justify-content:end;
@media (max-width:900px){
  display:none;
}
`

export const NavbarGridContainer = styled(Grid)`

`