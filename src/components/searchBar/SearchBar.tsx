import React, { useEffect } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { SearchBarWrapper } from "./SearchBarElements";
import router from "next/router";
import moment from "moment";
import { SearchProps } from "../../../@types";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";

function SearchBar(searchBarProps: SearchProps) {
   const [value, setValue] = React.useState<DateRange<Date>>([searchBarProps.from,searchBarProps.to]);
    const [serviceType, setServiceType] = React.useState(
     ''
  );
useEffect(() => {
  const searchFilters = getStoreFilters();
  setServiceType(searchFilters?.serviceType)
  setValue([moment(searchFilters.checkInDate).toDate(),moment(searchFilters.checkOutDate).toDate()])
 }, [searchBarProps])
 

  const handleChange = (type: any) => {
    const filter = {
      serviceType: serviceType,
      checkInDate: moment(value[0]).format("YYYY-MM-DD"),
      checkOutDate: moment(value[1]).format("YYYY-MM-DD"),
    }
    setStoreFilters(filter)
    switch (type) {
      case "submit":
        router.push({
          pathname: `/propertieslist/`,

        });

        break;

      default:
        break;
    }
  };
 
  return (
    <SearchBarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          inputFormat="dd/MMM/yyyy"
           onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <Box sx={{flexDirection:{
              md: "row"
            }}}>
              <TextField {...startProps} />
              <TextField sx={{marginLeft:2}} {...endProps} />
            </Box>
          )}
        />

        <FormControl sx={{ width: 150, marginLeft: 2 }}>
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
            <MenuItem value={`Recee`}>Recee</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{ marginLeft: 2 }}
          onClick={() => handleChange("submit")}
          variant="contained"
        >
          Search
        </Button>
      </LocalizationProvider>
     
    </SearchBarWrapper>
  );
}

export default SearchBar;
