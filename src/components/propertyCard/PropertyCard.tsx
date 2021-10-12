import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/backgroundImage.png";
import { AmminityContainer, MetaTagContainer } from "./PropertyCardElements";
import { CgGym } from "react-icons/cg";

function PropertyCard() {
  return (
    <Card sx={{borderRadius: `8px`}}>
      <CardMedia sx={{ height: "180px" }} title={"Card Tittle"}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={Logo.src} layout="fill" objectFit="cover" />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Property Name
        </Typography>
        <MetaTagContainer>
          <Typography gutterBottom variant="body2" component="p">
            Service Type
          </Typography>
          <Typography gutterBottom align="right" variant="body1" component="p">
            Property Name
          </Typography>
        </MetaTagContainer>
        <MetaTagContainer>
          <Typography gutterBottom variant="body2" component="p">
            Area Size
          </Typography>
          <Typography gutterBottom align="right" variant="body1" component="p">
            122 SqFt
          </Typography>
        </MetaTagContainer>
        <AmminityContainer>
          <Chip
            sx={{ marginRight: `8px` }}
            color="info"
            icon={<CgGym />}
            label="Gym"
          />
          <Chip
            sx={{ marginRight: `8px` }}
            color="info"
            icon={<CgGym />}
            label="Gym"
          />
          <Chip
            sx={{ marginRight: `8px` }}
            color="info"
            icon={<CgGym />}
            label="Gym"
          />
        </AmminityContainer>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: `flex-end;`, 
      '@media screen and (max-width: 768px)': {
      justifyContent: `space-between;`,
    },}}>
        <Button  variant="outlined">VIEW DETAILS</Button>
        <Button  variant="contained">BOOK NOW</Button>
      </CardActions>
    </Card>
  );
}

export default PropertyCard;
