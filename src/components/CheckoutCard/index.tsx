import {
  DateRange,
  LocalizationProvider,
  DateRangePicker,
  TimePicker,
  DateTimePicker,
} from "@mui/lab";
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
  FormHelperText,
} from "@mui/material";
import Card from "@mui/material/Card";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/color";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import { numberOfNights } from "../../utils/utils";
import moment from "moment";
import { getStoreFilters, setStoreFilters } from "../../utils/localStorage";
import { ProductionService } from "../../services/production/productionService";
import { BookingService } from "../../services/booking";
import { Formik } from "formik";
import { bookingFormInitialValues } from "../Login/form-initial-values";
import { bookingFormValidation } from "../../utils/Validations";

interface SummaryCard {
  // price?: number | string;
  price?: any;
  handleClick: Function;
  serviceType: any;
  detail?: any;
  setUpdateFilter?: any;
  loading?: any;
  setFormDisableControl?: any;
}
function index(cardProps: SummaryCard) {
  // const [value, setValue] = React.useState<DateRange<Date>>([
  //   cardProps?.serviceType?.checkInDate,
  //   cardProps?.serviceType?.checkOutDate,
  // ]);
  const [value, setValue] = React.useState<DateRange<Date>>([
    cardProps?.serviceType?.checkInDate,
    cardProps?.serviceType?.checkOutDate,
  ]);
  const [bookingTime, setBookingTime] = React.useState<Date | null>(
    new Date("2020-01-01 12:00")
  );
  const [noOfGuest, setNoOfGuest] = useState<any | number>(1);
  const [additionalCharge, setAdditionalCharge] = useState<boolean>(false);
  const [selectedDate, handleDateChange] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [reeceBooking, setReeceBooking] = useState<Date | null>(new Date());
  const [bookingDetail, setBookingDetail] = useState<any>();
  const [productionName, setProductionName] = useState<any>("");
  const [productionHouseType, setProductionHouseType] = useState<any>("");
  const [productionHouseTypeList, setProductionHouseTypeList] =
    useState<any>("");
  const [productionNameError, setProductionNameError] = useState<any>();
  const [productionTypeError, setProductionTypeError] = useState<any>();
  const [datePickerError, setdatePickerError] = useState<any>();
  const [formError, setFormError] = useState<any>(null);
  // const [formErrorDection, setF]

  const [reservedDate, setReservedDate] = useState<any[]>();
  // Variable
  const { detail } = cardProps;
  const productinService = new ProductionService();
  const bookingService = new BookingService();
  const { setUpdateFilter, loading, setFormDisableControl } = cardProps;

  // Functions
  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setNoOfGuest(value);
    if (Number(value) < 1) {
      setNoOfGuest(1);
    } else if (Number(value) <= detail?.additionalChargeMin) {
      setAdditionalCharge(false);
    } else if (
      Number(value) > detail?.additionalChargeMin &&
      Number(value) <= detail?.additionalChargeMax
    ) {
      setAdditionalCharge(true);
    } else if (Number(value) > detail?.additionalChargeMax) {
      setNoOfGuest(detail?.additionalChargeMax);
    }
  };

  const _reservedDate = (payload: any) => {
    const reservedData = bookingService.reservedDate(payload);
    reservedData.then((res: any) => {
      if (!res?.data?.error) {
        setReservedDate(res?.data?.data);
      }
    });
  };

  /* 
  Calc Logic start
  */
  const noOfNight = () => {
    return numberOfNights(value[0], value[1]);
  };
  const subTotalNight = () => {
    return cardProps?.price * noOfNight();
  };
  const subTotal = () => {
    return subTotalNight() + Number(additionalCharge && guestTotalPrice());
  };

  const gstCalculatedPrice = () => {
    return subTotal() * (18 / 100);
  };

  const guestTotalPrice = () => {
    return noOfGuest * detail?.additionalChargePerPerson;
  };

  const grandTotal = () => {
    return subTotal() + gstCalculatedPrice();
  };
  /* 
  Calc Logic end
  */

  const handleClick = () => {
    const payload = {
      propertyId: detail?._id,
      serviceCategoryId: "sd",
      checkInDate: cardProps?.serviceType?.checkInDate || moment(),
      checkOutDate:
        cardProps?.serviceType?.checkOutDate || moment().add(1, "day"),
      totalAmount: grandTotal(),
      noOfGuest,
      productionName,
      productionHouseType,
      bookingTime,
      reeceBooking,
    };
    cardProps.handleClick(payload);
  };

  const initialFormValidation = () => {
    // console.log("outside working..");

    if (
      cardProps?.serviceType?.serviceType == "VillasandBunglow" ||
      cardProps?.serviceType?.serviceType == "EventVenues"
    ) {
      setFormError(null);
      // console.log("working..");
    } else {
      if (productionName.length > 3 && productionHouseType) {
        setFormError(null);
      } else {
        setFormError("Error");
      }
    }
  };

  const handleProdcutionName = (ev: any) => {
    setProductionName(ev.target.value);
    // console.log(ev?.target?.value?.length);

    if (ev?.target?.value?.length > 3) {
      setProductionNameError(null);
    } else {
      setProductionNameError("To short");
    }
  };

  const handleBlurProductionName = (ev: any) => {
    if (ev?.target?.value?.length > 3) {
      setProductionNameError(null);
    } else {
      setProductionNameError("This field is required");
    }
  };
  const handleProdcutionHouseType = (ev: any) => {
    setProductionHouseType(ev.target.value);
    if (ev.target.value) {
      setProductionTypeError(null);
    } else {
      setProductionTypeError("This field is required");
    }
  };

  const handleProdcutionHouseTypeBlur = (ev: any) => {
    if (ev.target.value) {
      setProductionTypeError(null);
    } else {
      setProductionNameError("This field is required");
    }
  };

  const handleOnChange = (newValue: any) => {
    setValue(newValue);
    const filter = {
      serviceType: cardProps?.serviceType?.serviceType,
      checkInDate: newValue[0],
      checkOutDate: newValue[1],
    };
    setStoreFilters(filter);
    // console.log("working");
  };

  const _getAllProductionService = () => {
    const productionList = productinService.getProductionType();
    productionList.then((res: any) => {
      if (!res?.data?.error) {
        // console.log(res?.data?.data);
        // #1. Assing the response in the state for use
        setProductionHouseTypeList(res?.data?.data);
      }
    });
  };

  const reservedDates = (event: any) => {
    // let date = ["2022-01-30", "2022-01-31"];
    const dateInt: any[] = [];
    reservedDate?.map((item: any) => {
      dateInt.push(moment(item).format());
    });
    return dateInt.includes(moment(event).format());
  };

  const handleDisableButton = () => {
    if (
      cardProps?.serviceType?.serviceType == "VillasandBunglow" ||
      cardProps?.serviceType?.serviceType == "EventVenues"
    ) {
      return loading;
    } else {
      return formError;
    }
  };
  //  Effects

  useEffect(() => {
    initialFormValidation();
  }, [cardProps]);
  useEffect(() => {
    initialFormValidation();
  }, [productionName, productionHouseType]);

  useEffect(() => {
    if (cardProps) {
      setValue([
        cardProps?.serviceType?.checkInDate || value[0],
        cardProps?.serviceType?.checkOutDate || value[1],
      ]);
    }
  }, [cardProps]);

  useEffect(() => {
    _getAllProductionService();
  }, []);

  useEffect(() => {
    if (detail) {
      _reservedDate(detail?._id);
    }
  }, [detail]);

  useEffect(() => {
    setFormDisableControl(formError);
  }, []);

  useEffect(() => {
    setFormDisableControl(formError);
    // console.log("working...");
  }, [formError]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <Formik
        initialValues={bookingFormInitialValues}
        validationSchema={bookingFormValidation}
        onSubmit={bookingFormSubmit}
        >
           {(props) => (
             
           )}
        </Formik> */}
      <Card
        style={{
          padding: 16,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {(cardProps?.serviceType &&
          cardProps?.serviceType?.serviceType == "VillasandBunglow") ||
        cardProps?.serviceType?.serviceType == "EventVenues"
          ? cardProps?.price && (
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
          : null}
        {cardProps?.serviceType &&
        cardProps?.serviceType?.serviceType != "Reece" ? (
          <Box className="check-in-and-out-date-picker" sx={{ marginTop: 2 }}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              disablePast
              shouldDisableDate={reservedDates}
              value={value}
              // onChange={(newValue: any) => {
              //   setValue(newValue);
              // }}
              onChange={(newValue: any) => {
                handleOnChange(newValue);
                setUpdateFilter(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField className="date-input" {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField className="date-input" {...endProps} />
                </React.Fragment>
              )}
            />
          </Box>
        ) : null}
        {/* {`No of Guest: ${noOfGuest} ${JSON.stringify(additionalCharge)}`} */}
        {cardProps?.serviceType &&
        cardProps?.serviceType?.serviceType == "VillasandBunglow" ? (
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
        ) : null}

        {(cardProps?.serviceType &&
          cardProps?.serviceType?.serviceType == "FilmLocation") ||
        cardProps?.serviceType?.serviceType == "Reece" ? (
          <Box>
            {/* {JSON.stringify(formError)} */}
            {cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == "Reece" ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Date&Time picker"
                  disablePast
                  inputFormat="do MMMM yyyy hh:00 a"
                  value={reeceBooking}
                  onChange={(newValue: any) => {
                    setReeceBooking(newValue);
                    if (newValue) {
                      setdatePickerError(null);
                    } else {
                      setdatePickerError("This field is required");
                    }
                  }}
                  // onChange={handleOnChange(newValue)}
                  PopperProps={{
                    placement: "top",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onClick={(e) => setIsOpen(true)}
                      sx={{ marginTop: 3 }}
                      fullWidth
                      error={datePickerError}
                      helperText={datePickerError && datePickerError}
                    />
                  )}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  onOpen={() => setIsOpen(true)}
                  views={["day", "hours"]}
                />
              </LocalizationProvider>
            ) : null}
            <TextField
              sx={{ marginTop: 3 }}
              id="Production Name"
              value={productionName}
              onInput={handleProdcutionName}
              onBlur={handleBlurProductionName}
              error={productionNameError}
              label="Production Name"
              fullWidth
              variant="outlined"
              helperText={productionNameError && productionNameError}
            />

            <FormControl
              fullWidth
              sx={{ marginTop: 3 }}
              error={productionTypeError}
            >
              <InputLabel id="production-house-type-lable">
                Production House Type
              </InputLabel>
              <Select
                labelId="production-house-type-lable"
                id="production-house-type"
                value={productionHouseType}
                label="Production House Type"
                onBlur={handleProdcutionHouseTypeBlur}
                // onChange={handleChange}
                onChange={handleProdcutionHouseType}
              >
                {productionHouseTypeList &&
                  productionHouseTypeList.map((item: any, index: number) => (
                    <MenuItem
                      key={`productionTypeKey-${index}`}
                      value={item?.id}
                    >
                      {item?.title}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText>
                {productionTypeError && productionTypeError}
              </FormHelperText>
            </FormControl>
            {cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == "FilmLocation" ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                  <TimePicker
                    label="Time"
                    views={["hours"]}
                    value={bookingTime}
                    onChange={(newValue: any) => {
                      setBookingTime(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        onClick={(e) => setIsOpen(true)}
                        sx={{ marginTop: 3 }}
                        fullWidth
                        {...params}
                      />
                    )}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onOpen={() => setIsOpen(true)}
                  />
                </ClickAwayListener>
              </LocalizationProvider>
            ) : null}
          </Box>
        ) : null}

        <Button
          onClick={handleClick}
          // onClick={(ev: any) => cardProps.handleClick(ev)}
          // disabled={formError}
          disabled={handleDisableButton()}
          sx={{ marginTop: 3 }}
          size="large"
          variant="contained"
        >
          {(cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == "VillasandBunglow") ||
          cardProps?.serviceType?.serviceType == "EventVenues"
            ? loading
              ? "Booking"
              : "Book"
            : cardProps?.serviceType?.serviceType == "FilmLocation" ||
              cardProps?.serviceType?.serviceType == "Reece"
            ? "Reserve"
            : null}
        </Button>

        {(cardProps?.serviceType &&
          cardProps?.serviceType?.serviceType == "VillasandBunglow") ||
        cardProps?.serviceType?.serviceType == "EventVenues" ? (
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
                ₹ {cardProps?.price?.toLocaleString("en-IN")} x {noOfNight()}{" "}
                nights
              </Typography>
              <Typography
                variant="body2"
                component="span"
                color={COLORS.shade2}
                textAlign="right"
                sx={{ marginTop: `16px` }}
              >
                {/* 50,000 */}
                {subTotalNight().toLocaleString("en-IN")}
              </Typography>
            </Box>
            {cardProps?.serviceType &&
            cardProps?.serviceType?.serviceType == "VillasandBunglow"
              ? additionalCharge && (
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body2"
                      component="span"
                      color={COLORS.shade2}
                      textAlign="left"
                      sx={{ marginTop: `16px` }}
                    >
                      {` Extra Guests ${
                        noOfGuest - detail?.additionalChargeMin
                      } - ${(
                        detail?.additionalChargePerPerson || 0
                      ).toLocaleString("en-IN")}/person`}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      color={COLORS.shade2}
                      textAlign="right"
                      sx={{ marginTop: `16px` }}
                    >
                      {/* 50,000 */}
                      {guestTotalPrice()?.toLocaleString("en-IN")}
                    </Typography>
                  </Box>
                )
              : null}
            <Box
              sx={{
                display: "flex",
                marginBottom: 2,
                justifyContent: "space-between",
              }}
            >
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
                {gstCalculatedPrice().toLocaleString("en-IN")}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                marginBottom: 2,
                justifyContent: "space-between",
              }}
            >
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
                {grandTotal().toLocaleString("en-IN")}
              </Typography>
            </Box>
          </Box>
        ) : null}
      </Card>
    </LocalizationProvider>
  );
}

export default index;
