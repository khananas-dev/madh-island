import { Chip } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { ChipFactory } from "../../../@types";


const Chips = (chipProps: ChipFactory) => {
  return (
    <Chip
      key={chipProps.name}
      sx={{ marginRight: `8px`, background: "#EAFCF7" }}
      icon={<FaceIcon />}
      label={chipProps.name}
    />
  );
}

export default Chips;
