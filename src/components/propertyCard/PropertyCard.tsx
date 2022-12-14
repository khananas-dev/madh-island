import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import COLORS from "../../constants/color";
import React from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Chip,
  Divider,
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
  bedroom,
  addressLine1,
  amminityList,
  isPriceDivider,
  buttonsList,
  price,
  action,
}: PropertyCardFactory) => {
  const handleEvent = (propertyId: any) => {
    console.log(propertyId);
    //  Emit Event to Parent
    action(propertyId);
  };
  return (
    <div className="property-card">
      <Card
        sx={{ borderRadius: `8px`, color: COLORS.black }}
        onClick={(ev) => handleEvent(id)}
      >
        <CardMedia sx={{ height: "220px" }} title={propertyName}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image src={`${img}`} layout="fill" objectFit="cover" />
          </div>
        </CardMedia>
        <CardContent>
          {propertyName && (
            <Typography
              style={{ marginBottom: 5 }}
              gutterBottom
              variant="h6"
              component="h3"
              className="property-Name"
            >
              {propertyName}
            </Typography>
          )}

          {addressLine1 && (
            <Typography
              style={{ marginBottom: "20px" }}
              className="property-address"
              component="p"
            >
              {addressLine1 && (
                <span style={{ color: COLORS.shade2 }}> {addressLine1} </span>
              )}
            </Typography>
          )}
          <Typography
            variant="h6"
            component="p"
            className="property-data"
            sx={{ marginBottom: "15px" }}
          >
            {bedroom && <span> {bedroom} Bedrooms </span>}
            <span style={{ color: COLORS.shade2 }}> |</span>
            {area && <span> {area} sq.ft </span>}
          </Typography>

          {amminityList && (
            <AmminityContainer>
              {amminityList?.map((amminity: any) => (
                <Chips
                  key={`amminity-${amminity?.id}`}
                  title={amminity?.title}
                  className={amminity?.className}
                />
              ))}
            </AmminityContainer>
          )}
          {(serviceType && serviceType == "VillasandBunglow") ||
          serviceType == "EventVenues" ? (
            <div>
              {isPriceDivider && <Divider />}
              <Typography className="property-price">
                {/* {JSON.stringify(serviceType)} */}
                {serviceType && serviceType == "VillasandBunglow"
                  ? price?.villaBunglowPrice && (
                      <h5>
                        Rs. {price?.villaBunglowPrice?.toLocaleString("en-IN")}
                        <span> / night</span>
                      </h5>
                    )
                  : // price?.villaBunglowPrice
                  serviceType == "EventVenues"
                  ? price?.eventVenuePrice && (
                      <h5>
                        Rs. {price?.eventVenuePrice?.toLocaleString("en-IN")}
                        <span> / night</span>
                      </h5>
                    )
                  : null}
                {/* {price && <span style={{}}> Rs. {price}/per Night </span>} */}
              </Typography>
              <Typography style={{ fontSize: 12 }} component="div">
                {price && (
                  <span style={{ color: COLORS.shade2 }}>
                    {" "}
                    (excl. Taxes and Charges){" "}
                  </span>
                )}
              </Typography>
            </div>
          ) : null}
        </CardContent>
        {/* <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {propertyName}
        </Typography>
        {bedroom && (
          <MetaTagContainer>
            <Typography gutterBottom variant="body2" component="p">
              Bedrooms
            </Typography>
            <Typography
              gutterBottom
              align="right"
              variant="body1"
              component="p"
            >
              {bedroom}
            </Typography>
          </MetaTagContainer>
        )}
        {serviceType && (
          <MetaTagContainer>
            <Typography gutterBottom variant="body2" component="p">
              Service Type
            </Typography>
            <Typography
              gutterBottom
              align="right"
              variant="body1"
              component="p"
            >
              {serviceType}
            </Typography>
          </MetaTagContainer>
        )}
        {area && (
          <MetaTagContainer>
            <Typography gutterBottom variant="body2" component="p">
              Area Size
            </Typography>
            <Typography
              gutterBottom
              align="right"
              variant="body1"
              component="p"
            >
              {area} Sq. Ft
            </Typography>
          </MetaTagContainer>
        )}
        <AmminityContainer>
          {amminityList?.map((amminity) => (
            <Chips key={amminity.id} name={amminity.name} />
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
      </CardActions> */}
      </Card>
    </div>
  );
};

export default PropertyCard;
