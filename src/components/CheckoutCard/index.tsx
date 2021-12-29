import { DateRange, LocalizationProvider, DateRangePicker, TimePicker, DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ClickAwayListener,
} from "@mui/material";
import Card from "@mui/material/Card";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import COLORS from "../../constants/color";
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import { numberOfNights } from "../../utils/utils";

interface SummaryCard {
  // price?: number | string;
  price?: any;
  handleClick: Function;
  serviceType: any;
  detail?: any
}
function index(cardProps: SummaryCard) {
  const [value, setValue] = React.useState<DateRange<Date>>([cardProps?.serviceType?.checkInDate, cardProps?.serviceType?.checkOutDate]);
  const [bookingTime, setBookingTime] = React.useState<Date | null>(null);
  const [noOfGuest, setNoOfGuest] = useState<any | number>(1);
  const [additionalCharge, setAdditionalCharge] = useState<boolean>(false);
  const [selectedDate, handleDateChange] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [reeceBooking, setReeceBooking] = useState<any>(null);

  // Variable
  const { detail } = cardProps;


  // Functions
  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setNoOfGuest(value);
    if (Number(value) < 1) {
      setNoOfGuest(1);
    } else if (Number(value) <= detail?.additionalChargeMin) {
      setAdditionalCharge(false);
    } else if (Number(value) > detail?.additionalChargeMin && Number(value) <= detail?.additionalChargeMax) {
      setAdditionalCharge(true);
    } else if (Number(value) > detail?.additionalChargeMax) {
      setNoOfGuest(detail?.additionalChargeMax);
    }

  };

  /* 
  Calc Logic here
  */
  const noOfNight = () => {
    return numberOfNights(cardProps?.serviceType?.checkInDate, cardProps?.serviceType?.checkOutDate)
  }
  const subTotal = () => {
    return cardProps?.price * noOfNight();
  }

  const gstCalculatedPrice = () => {
    return subTotal() * (18 / 100);
  }

  const grandTotal = () => {
    return subTotal() + gstCalculatedPrice();
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Card
        style={{
          padding: 16,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {
          cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == 'VillasandBunglow' || cardProps?.serviceType?.serviceType == 'EventVenues'
            ?
            cardProps?.price && (
              <div style={{ display: `flex`, alignItems: "baseline" }}>
                <Typography
                  variant="h3"
                  component="p"
                  color="#1F1F1F"
                  textAlign="left"
                >
                  ₹ {cardProps?.price?.toLocaleString("en-IN")}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  color={COLORS.shade2}
                  textAlign="left"
                  sx={{ marginLeft: `8px` }}
                >
                  /night
                </Typography>
              </div>
            )
            : null
        }
        {
          cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType != 'Reece'
            ?
            <Box sx={{ marginTop: 2 }}>
              <DateRangePicker
                startText="Check-in"
                endText="Check-out"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </Box>
            : null
        }
        {`No of Guest: ${noOfGuest} ${JSON.stringify(additionalCharge)}`}
        {
          cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == 'VillasandBunglow'
            ?
            <TextField
              sx={{ marginTop: 2 }}
              id="filled-basic"
              label="No. of Guests"
              variant="filled"
              placeholder="14"
              onInput={handleInputChange}
              value={noOfGuest}
              type="number"
            />
            : null
        }

        {
          cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == 'FilmLocation' || cardProps?.serviceType?.serviceType == 'Reece'
            ?
            <Box>
              {
                cardProps?.serviceType &&
                  cardProps?.serviceType?.serviceType == 'Reece'
                  ?
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Date&Time picker"
                      value={reeceBooking}
                      onChange={(newValue: any) => {
                        setReeceBooking(newValue);
                      }}
                      PopperProps={{
                        placement: 'top'
                      }}
                      renderInput={(params) => <TextField {...params} onClick={(e) => setIsOpen(true)} sx={{ marginTop: 3 }} fullWidth />}
                      open={isOpen}
                      onClose={() => (setIsOpen(false))}
                      onOpen={() => (setIsOpen(true))}
                      views={['day', 'hours']}
                    />
                  </LocalizationProvider>
                  : null
              }
              <TextField sx={{ marginTop: 3 }} id="Production Name" label="Production Name" fullWidth variant="outlined" />
              <FormControl fullWidth sx={{ marginTop: 3 }} >
                <InputLabel id="production-house-type-lable">Production House Type</InputLabel>
                <Select
                  labelId="production-house-type-lable"
                  id="production-house-type"
                  // value={age}
                  label="Production House Type"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {
                cardProps?.serviceType &&
                  cardProps?.serviceType?.serviceType == 'FilmLocation'
                  ?
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ClickAwayListener onClickAway={() => (setIsOpen(false))}>
                      <TimePicker
                        label="Time"
                        views={['hours']}
                        value={bookingTime}
                        onChange={(newValue: any) => {
                          setBookingTime(newValue);
                        }}
                        renderInput={(params) => <TextField
                          onClick={(e) => setIsOpen(true)}
                          sx={{ marginTop: 3 }} fullWidth {...params} />}
                        open={isOpen}
                        onClose={() => (setIsOpen(false))}
                        onOpen={() => (setIsOpen(true))}
                      />
                    </ClickAwayListener>
                  </LocalizationProvider>
                  : null
              }

            </Box>
            : null
        }


        <Button
          onClick={(ev: any) => cardProps.handleClick(ev)}
          sx={{ marginTop: 3 }} size="large" variant="contained">
          {
            cardProps?.serviceType &&
              cardProps?.serviceType?.serviceType == 'VillasandBunglow' || cardProps?.serviceType?.serviceType == 'EventVenues'
              ?
              'Book'
              :
              cardProps?.serviceType?.serviceType == 'FilmLocation' || cardProps?.serviceType?.serviceType == 'Reece'
                ?
                'Reserve'
                : null
          }
        </Button>

        {
          cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == 'VillasandBunglow' || cardProps?.serviceType?.serviceType == 'EventVenues'
            ?
            <Box>
              <Typography
                variant="body2"
                component="p"
                color={COLORS.shade2}
                textAlign="center"
                sx={{ marginTop: `16px` }}
              >
                You wont be charged Yet
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  component="span"
                  color={COLORS.shade2}
                  textAlign="left"
                  sx={{ marginTop: `16px` }}
                >
                  ₹ {cardProps?.price?.toLocaleString("en-IN")} x {noOfNight()} nights
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  color={COLORS.shade2}
                  textAlign="right"
                  sx={{ marginTop: `16px` }}
                >
                  {/* 50,000 */}
                  {
                    (subTotal()).toLocaleString("en-IN")
                  }
                </Typography>
              </Box>
              {
                cardProps?.serviceType &&
                  cardProps?.serviceType?.serviceType == 'VillasandBunglow'
                  ?
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Typography
                      variant="body2"
                      component="span"
                      color={COLORS.shade2}
                      textAlign="left"
                      sx={{ marginTop: `16px` }}
                    >
                      {
                        ` Extra Guests 3 - ${(detail?.additionalChargePerPerson || 0).toLocaleString("en-IN")}/person`
                      }

                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      color={COLORS.shade2}
                      textAlign="right"
                      sx={{ marginTop: `16px` }}
                    >
                      50,000
                    </Typography>
                  </Box>
                  : null
              }
              <Box sx={{ display: "flex", marginBottom: 2, justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  component="span"
                  color={COLORS.shade2}
                  textAlign="left"
                  sx={{ marginTop: `16px` }}
                >
                  GST(18%)
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  color={COLORS.shade2}
                  textAlign="right"
                  sx={{ marginTop: `16px` }}
                >
                  {/* 9,785 */}
                  {(gstCalculatedPrice()).toLocaleString("en-IN")}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", marginBottom: 2, justifyContent: "space-between" }}>
                <Typography
                  variant="h4"
                  component="span"
                  color={COLORS.black}
                  textAlign="left"
                  sx={{ marginTop: `16px` }}
                >
                  Total
                </Typography>
                <Typography
                  variant="h4"
                  component="span"
                  color={COLORS.black}
                  textAlign="right"
                  sx={{ marginTop: `16px` }}
                >
                  {/* 60,785 */}
                  {(grandTotal()).toLocaleString("en-IN")}
                </Typography>
              </Box>
            </Box>
            : null
        }

      </Card>
    </LocalizationProvider>
  );
}

export default index;
