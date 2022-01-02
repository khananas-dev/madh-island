import { Chip } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { ChipFactory } from "../../../@types";
import SvgIcon from '@mui/material/SvgIcon';


const Chips = ({title, className}:any) => {
  return (
    // <Chip
    //   key={chipProps.name}
    //   sx={{ marginRight: `8px`, background: "#EAFCF7" }}
    //   icon={<FaceIcon />}
    //   label={chipProps.name}
    // />
    <div className="chip">
    <i className={`vmi-icons__${className}`}></i>
      {/* <img src="img_avatar.png" alt="Person" width="96" height="96" /> */}
      {title}
    </div>
  );
}

export default Chips;
