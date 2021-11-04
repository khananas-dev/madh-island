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
import { CgGym } from "react-icons/cg";
import { PropertyCardFactory } from "../../../@types";
import Chips from "../Chips/Chips";
import { MetaTagContainer, AmminityContainer } from "./PropertyCardElements";

const PropertyCard = ({
  id,
  img,
  propertyName,
  serviceType,
  area,
  amminityList,
  buttonsList,
  price,
  action,
}: PropertyCardFactory) => {
  const handleEvent = (event: any, property: any) => {
    //  Emit Event to Parent
    action(event, property);
  };
  return (
    <Card sx={{ borderRadius: `8px` }}>
      <CardMedia sx={{ height: "180px" }} title={"Card Tittle"}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={Logo.src} layout="fill" objectFit="cover" />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {propertyName}
        </Typography>
        <MetaTagContainer>
          <Typography gutterBottom variant="body2" component="p">
            Service Type
          </Typography>
          <Typography gutterBottom align="right" variant="body1" component="p">
            {serviceType}
          </Typography>
        </MetaTagContainer>
        <MetaTagContainer>
          <Typography gutterBottom variant="body2" component="p">
            Area Size
          </Typography>
          <Typography gutterBottom align="right" variant="body1" component="p">
            {area} Sq. Ft
          </Typography>
        </MetaTagContainer>
        <AmminityContainer>
          {amminityList?.map((amminity) => (
            <Chips
              key={amminity.id}
              name={amminity.name}
            />
          ))}
        </AmminityContainer>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: `flex-end;`,
          "@media screen and (max-width: 768px)": {
            justifyContent: `space-between;`,
          },
        }}
      >
        {buttonsList?.map((action, index) => (
          <Button
          key={index}
            onClick={(e) =>
              handleEvent(action.name, {
                id,
                img,
                propertyName,
                serviceType,
                area,
                amminityList,
                buttonsList,
                price,
                action,
              })
            }
            variant={action.variant}
          >
            {action.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
