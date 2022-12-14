import styled from "styled-components";
import Box from '@mui/material/Box'
import DatePicker from "@mui/lab/DatePicker";
import { FormControl, TextField } from "@mui/material";
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

export const SearchTextField = styled(TextField)`
@media (max-width: 900px) {
    width: 100%;
    margin: 0px 0px 15px 0px !important;
}
`

export const SearchFormControl = styled(FormControl)`
@media (max-width: 900px) {
  width: 100%;
  margin: 0px 0px 15px 0px !important;
}
`
 
