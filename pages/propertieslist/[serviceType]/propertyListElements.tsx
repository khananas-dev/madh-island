
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Box } from '@mui/material';
import { CgSortAz } from 'react-icons/cg';

export const SearchWrapper = styled(Box)`
background: #FFFFFF;
box-shadow: 0px 8px 16px rgba(110, 110, 110, 0.16);
backdrop-filter: blur(24px);
padding: 24px;
max-width:1100px;
width: min-content;`

export const BodyWrapper = styled(Box)`
 padding-top: 80px;
 margin-left: 60px;
 margin-right: 60px;
 @media screen and (max-width: 768px) {
   padding-top: 40px;
   margin-left: 30px;
   margin-right: 30px;
 }
`;
export const SortIcon = styled(CgSortAz)`
  width:24px;
  height: 24px;
  color:#535353;
`;