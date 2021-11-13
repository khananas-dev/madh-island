import { Box } from "@mui/system";
import styled from "styled-components";

export const Bars = styled(Box)`
    color: #1F1F1F;
    visibility:hidden;
    @media screen and (max-width: 768px) {
      display: block;
      visibility:visible;
      color: #1F1F1F;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  `;