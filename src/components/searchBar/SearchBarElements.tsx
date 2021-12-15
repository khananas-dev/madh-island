import styled from "styled-components";
import Box from '@mui/material/Box'
import DatePicker from "@mui/lab/DatePicker";
export const SearchBarWrapper = styled(Box)`
  background: #fff;
  display: flex;
  width:100%;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

`;
export const InputWrapper = styled.div`
  width: 100%;
   margin-right: 16px;
  min-width:200px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

`;
 
