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
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/backgroundImage.png";
import { CgGym } from "react-icons/cg";
import { PropertyCardFactory } from "../../../@types";
import Chips from "../Chips/Chips";
import { MetaTagContainer, AmminityContainer } from "./RaceeCardElements";
import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const RaceeCard = ({
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
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ borderRadius: `8px`, marginBottom: "30px" }}>
      <CardMedia sx={{ height: "150px" }} title={"Card Tittle"}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={Logo.src} layout="fill" objectFit="cover" />
        </div>
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ marginBottom: "15px" }}
        >
          Property Name
        </Typography>
        <MetaTagContainer>
          <Typography gutterBottom variant="body2" component="p">
            Area Size
          </Typography>
          <Typography gutterBottom align="right" variant="body1" component="p">
            122 SqFt
          </Typography>
        </MetaTagContainer>
        <AmminityContainer>
          <Chips name="Gym" />
          <Chips name="Gym" />
          <Chips name="Gym" />
        </AmminityContainer>
      </CardContent>
      <Box sx={{ padding: "15px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Select Date & Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: `flex-end;`,
          marginBottom: "15px",
        }}
      >
        <Button variant="contained">BOOK RACEE</Button>
      </CardActions>
    </Card>
  );
};
export default RaceeCard;
