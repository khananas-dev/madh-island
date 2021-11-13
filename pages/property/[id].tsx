import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ImageGallery from "../../src/components/imageGallery/ImageGallery";
import styled from "styled-components";
import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter } from "next/router";
import { isUserLoggedIn } from "../../src/utils/utils";
import Login from "../../src/components/Login/Login";
import { Modal } from '@mui/material'
import Chips from "../../src/components/Chips/Chips";

const propertyDetailsById = {
  id: `1`,
  images: [],
  propertyName: "BunglowName",
  address: "BunglowName",
  area: "150",
  serviceType: "Film Location",
  details:
    "The apartment is a contemporary collection of cobblestones, rich wooden effect decks, and carefully detailed windows composed to capture light and afford dramatic views. Each flat features full-height windows, doors, some with terraces for poo  ",
  aminities: [],
};
function PropertyDetails() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState(router.query.service);
  const [loginModel, setLoginModel] = React.useState(false);

  const selectedProperty = {
    id: `1`,
    images: [],
    propertyName: "BunglowName",
    address: "Address",
    area: "150",
    serviceType: "Film Location",
    details:
      "The apartment is a contemporary collection of cobblestones, rich wooden effect decks, and carefully detailed windows composed to capture light and afford dramatic views. Each flat features full-height windows, doors, some with terraces for poo  ",
    amminityList: [
      { id: `1`, name: `Gym` },
      { id: `2`, name: `Fire` },
      { id: `3`, name: `Pool` },
    ],
    buttonsList: [
      {
        name: `Download PDF`,
        variant: `outlined`,
      },
      {
        name: `Book Now`,
        variant: `outlined`,
      },
    ],
  };


  const BookProperty = () =>{
  
    // check if user is already logged in
    const userAuthenticationStatus = isUserLoggedIn()
    if(!userAuthenticationStatus){
      OpenLoginForm();
    }
    // if Yes, than open Dialog
    // Else Show toasty  
  }
  const OpenLoginForm = () =>{
    console.log("Here")
    setLoginModel(true)
  }
  const handleClose = () => setLoginModel(false);

  return (

    <Box sx={{ height: `inherit` }}>
    
      <LayoutWrapper>
        <ImageGallery></ImageGallery>
        <BodyWrapper>
          <Typography
            variant="caption"
            component="p"
            color="#1F1F1F"
            textAlign="left"
          >
            {serviceType}
          </Typography>
          <Typography
            variant="h1"
            component="p"
            color="#1F1F1F"
            textAlign="left"
            sx={{ marginTop: `24px` }}
          >
            {selectedProperty.propertyName}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="#1F1F1F"
            textAlign="left"
            sx={{ marginTop: `8px` }}
          >
            {selectedProperty.address}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="left"
                sx={{ marginTop: `24px` }}
              >
                Service Type
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="right"
                sx={{
                  marginTop: `24px`,
                  fontSize: `16px`,
                  fontWeight: `normal`,
                }}
              >
                {selectedProperty.serviceType}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="left"
                sx={{ marginTop: `8px` }}
              >
                Area
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="right"
                sx={{ marginTop: `8x`, fontSize: `16px`, fontWeight: `normal` }}
              >
                {selectedProperty.area} Sq cm
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="left"
                sx={{ marginTop: `8px` }}
              >
                Details
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color="#1F1F1F"
                textAlign="left"
                sx={{ marginTop: `8px` }}
              >
                {selectedProperty.details}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                component="p"
                color="#1F1F1F"
                textAlign="right"
                sx={{ marginTop: `8px` }}
              >
                Amenities
              </Typography>
              <Stack
                sx={{ marginTop: `8px` }}
                direction="row"
                spacing={1}
                justifyContent="flex-end"
              >
                {selectedProperty.amminityList.map((amminity: any) => (
                  <Chips
                    key={amminity.id}
                    name={amminity.name}

                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </BodyWrapper>
      </LayoutWrapper>
  
      <FooterWrapper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              component="h3"
              color="#1F1F1F"
              textAlign="left"
              sx={{}}
            >
              21-Oct-2021 - 30-Oct-2021
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              color="#1F1F1F"
              textAlign="left"
              sx={{}}
            >
              Property Name
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button>Download PDF</Button>
            <Button onClick={BookProperty}>Book Now</Button>
          </Grid>
        </Grid>
      </FooterWrapper>
  
      <Modal
        open={loginModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginWrapper>
        <Login/>
        </LoginWrapper>
      </Modal>
    </Box>
  );
}

export default PropertyDetails;
const BodyWrapper = styled(Box)`
  margin-left: 60px;
  margin-right: 60px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const LayoutWrapper = styled(Box)`
  height: calc(100% - 80px);
  padding-bottom: 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    height: calc(100% - 100px);
    padding-bottom: 40px;
    overflow-y: auto;
  }
`;

const FooterWrapper = styled(Box)`
  padding: 12px 60px;
  background: #ffffff;
  height: 80px;
  box-shadow: 0px -4px 12px rgba(110, 110, 110, 0.16);
  @media screen and (max-width: 768px) {
    padding: 12px 30px;
    height: 100px;
  }
  `

 
const LoginWrapper = styled(Box)`
 max-width: 510px;
margin: 90px auto 0px auto;
/* padding: 30px 20px; */
border-radius: 16px;
box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14), 0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
background: white;

`;
