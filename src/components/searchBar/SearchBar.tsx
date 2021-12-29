import React, { useEffect, useState } from "react";
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
import router from "next/router";
import moment from "moment";
import { SearchProps } from "../../../@types";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import { SearchBarWrapper, SearchFormControl, SearchTextField } from "./SearchBarElements";
import { ServiceCategory } from "../../services/serviceCategory/serviceCategory";

function SearchBar(searchBarProps: SearchProps) {

  // States

  const [value, setValue] = React.useState<DateRange<Date>>([searchBarProps.from, searchBarProps.to]);
  const [serviceType, setServiceType] = React.useState('');
  const [serviceList, setServiceList] = useState<any>();

  // Variable
  const serviceCategory = new ServiceCategory();

  // Functions

  const _getAllServiceList = () => {
    const serviceListData = serviceCategory.getServiceCategoryList();
    serviceListData.then((res: any) => {
      if (res.status == 200) {
        console.log(res.data.data);
        // #1. Adding data in state in the for catergoryList
        setServiceList(res.data.data);
      }

    })
  }

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


  // Effects

  useEffect(() => {
    const searchFilters = getStoreFilters();
    setServiceType(searchFilters?.serviceType)
    setValue([moment(searchFilters.checkInDate).toDate(), moment(searchFilters.checkOutDate).toDate()])
  }, [searchBarProps])

  useEffect(() => {
    _getAllServiceList();
  }, []);

  return (
    <SearchBarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          // inputFormat="dd/MMM/yyyy"
          mask='dd/MMM/yyyy'
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <Box sx={{
              flexDirection: {
                md: "row"
              }
            }}>
              <SearchTextField {...startProps} />
              <SearchTextField sx={{ marginLeft: 2 }} {...endProps} />
            </Box>
          )}
        />

        <SearchFormControl sx={{ width: 150, marginLeft: 2 }}>
          <InputLabel id="demo-simple-select-label">Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={serviceType}
            label="Service"
            onChange={(event) => setServiceType(event.target.value as string)}

          >

            {
              serviceList &&
              serviceList.map((service: any, index: number) => (
                <MenuItem value={service.route}> {service.title}</MenuItem>
              ))
            }
            {/* <MenuItem value={`FilmLocation`}>Film Location</MenuItem>
            <MenuItem value={`EventVenues`}>Event Venues</MenuItem>
            <MenuItem value={`VillasandBunglow`}>Villas and Bunglow</MenuItem>
            <MenuItem value={`Recee`}>Recee</MenuItem> */}
          </Select>
        </SearchFormControl>
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
