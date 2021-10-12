import styled from "styled-components";
import Box from '@mui/material/Box'
export const SearchBarWrapper = styled(Box)`
  background: #fff;
  display: flex;
  align-items: center;
  max-width:1100px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

`;
export const InputWrapper = styled.div`
  width: 100%;
  margin-right: 16px;
  min-width:200px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

`;
