import React, { useEffect, useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import enIN from "date-fns/locale/en-IN";
import { format, compareAsc } from "date-fns";

import { DatePicker } from "@mui/lab";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { InputWrapper, SearchBarWrapper } from "./SearchBarElements";
import { width } from "@mui/system";
import router, { useRouter } from "next/router";
import { SearchBarProps } from "../props";
import { DEFAULT_FILTER } from "../../constants";
import moment from "moment";

function SearchBar(searchBarProps: SearchBarProps) {
 const router = useRouter();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [checkInState, setCheckInState] = useState<Date>();
  const [checkOutState, setCheckOutState] = useState<Date>();
  const [serviceType, setServiceType] = React.useState(
    searchBarProps.serviceType || 'FilmLocation'
  );
  console.log(checkInState,checkOutState,serviceType)

  const handleChange = (type: any) => {
    switch (type) {
      case "submit":
        router.push({
          pathname: `/propertieslist/${serviceType}`,
          query: {
            service: serviceType,
            checkin: checkInState?.toString(),
            checkout: checkOutState?.toString(),
          },
        });

        break;

      default:
        break;
    }
  };

useEffect(() => {
  console.log(searchBarProps,"searchBarProps")
  setCheckInState(searchBarProps.checkInDate || DEFAULT_FILTER.checkInDate)
  setCheckOutState(searchBarProps.checkOutDate || DEFAULT_FILTER.checkOutDate)
  setServiceType((searchBarProps.serviceType || DEFAULT_FILTER.serviceType))
  console.log(location,window.history,'Router changed');

}, [router])

  return (
    <SearchBarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={enIN}>
        <InputWrapper>
          <DatePicker
            minDate={today}
            inputFormat="dd/MMM/yyyy"
            mask='__/__/____'
            label="Check-in Date"
            value={checkInState?.toString()}
            orientation="portrait"
            onChange={(newValue) => {
              newValue && setCheckInState(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </InputWrapper>
        <InputWrapper>
          <DatePicker
            minDate={checkInState}
            label="Check-out Date"
            mask='__/__/____'
            value={checkOutState?.toString()}
            inputFormat="dd/MMM/yyyy"
            orientation="portrait"
            onChange={(newValue) => {
              newValue && setCheckOutState(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </InputWrapper>
        <InputWrapper>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Service</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={serviceType}
              label="Service"
              onChange={(event) => setServiceType(event.target.value as string)}
            >
              <MenuItem value={`FilmLocation`}>Film Location</MenuItem>
              <MenuItem value={`EventVenues`}>Event Venues</MenuItem>
              <MenuItem value={`VillasandBunglow`}>Villas and Bunglow</MenuItem>
            </Select>
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <Button
            sx={{ width: `150px` }}
            onClick={() => handleChange("submit")}
            variant="contained"
            
          >
            Search
          </Button>
        </InputWrapper>
      </LocalizationProvider>
    </SearchBarWrapper>
  );
}

export default SearchBar;
