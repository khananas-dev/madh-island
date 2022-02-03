import { Box } from "@mui/system";
import React, { useContext, useEffect, useRef, useState } from "react";
import ImageGallery from "../../src/components/imageGallery/ImageGallery";
import styled from "styled-components";
import {
  Breadcrumbs,
  Button,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter } from "next/router";
import { isUserLoggedIn } from "../../src/utils/utils";
import Login from "../../src/components/Login/Login";
import { Modal } from "@mui/material";
import Chips from "../../src/components/Chips/Chips";
import { getStoreFilters } from "../../src/utils/localStorage";
import moment from "moment";
import { PropertyFilter } from "../../@types";
import CheckoutCard from "../../src/components/CheckoutCard";
import { PropertyService } from "../../src/services/property/propertyService";
import AuthContext from "../../src/context/AuthContext";
import { BookingService } from "../../src/services/booking";
import BookingSuccessIcon from "../../public/success-booking.png";
import { userData, xAccessToken } from "../../src/utils/getAccessToken";
import axios from "axios";
import { BASE_URL } from "../../src/constants/apiConfig";

function PropertyDetails() {
  // interface
  interface customerType {
    firstName: string;
    lastName: string;
    emailId: string;
  }

  // States
  const [propertyFilter, setPropertyFilter] = useState({} as PropertyFilter);
  const [propertyDetail, setPropertyDetail] = React.useState<any>();
  const [bookingData, setBookingData] = useState<any>();
  const [checkInDateFooter, setCheckInDateFooter] = useState<any>();
  const [checkOutDateFooter, setCheckOutDateFooter] = useState<any>();
  const [updateFilter, setUpdateFilter] = useState<any>();
  const [successBookingPopup, setSuccessBookingPopup] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<any>();
  const [formDisableControl, setFormDisableControl] = useState<any>();
  const [bookingError, setBookingError] = useState<any>();

  // Variable
  const router = useRouter();
  const customerData = userData();
  const UserXAccessToken = xAccessToken();
  // const customerData = JSON.parse(customerDataJson);
  const propertyService = new PropertyService();
  const bookingService = new BookingService();
  const { id, serviceTypeId } = router?.query;

  // Context
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  // Functions
  const handleCheckoutCard = (value: any) => {
    if (localStorage.getItem("jwt")) {
      let user = localStorage.getItem("jwt");
      let customerId;
      if (user) {
        customerId = JSON.parse(user)?.id;
      }
      const {
        checkInDate,
        checkOutDate,
        totalAmount,
        numberOfGuests,
        productionName,
        productionHouseType,
        bookingTime,
        reeceBooking,
      } = value;
      setAuthenticated(false);
      let bookingDataObject: any;

      switch (propertyFilter.serviceType) {
        case "VillasandBunglow":
          bookingDataObject = {
            propertyId: id,
            serviceCategoryId: serviceTypeId,
            customerId,
            checkInDate,
            checkOutDate,
            numberOfGuests,
          };
          break;

        case "EventVenues":
          bookingDataObject = {
            propertyId: id,
            serviceCategoryId: serviceTypeId,
            customerId,
            checkInDate,
            checkOutDate,
          };
          break;

        case "FilmLocation":
          bookingDataObject = {
            propertyId: id,
            serviceCategoryId: serviceTypeId,
            customerId,
            checkInDate,
            checkOutDate,
            productionName,
            productionHouseType,
            bookingTime,
          };
          break;
        case "Reece":
          bookingDataObject = {
            propertyId: id,
            serviceCategoryId: serviceTypeId,
            customerId,
            reeceBooking,
            productionName,
            productionHouseType,
          };
          break;

        default:
          break;
      }

      console.log(bookingDataObject);
      setBookingData(bookingDataObject);
    } else {
      setAuthenticated(true);
    }
  };
  // const handleClose = () => setLoginModel(false);

  // Razorpay
  const loadScript = (src: any) => {
    return new Promise((resolve: any) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // ConfirmBooking
  const confirmBooking = (payment?: any, payload?: any) => {
    const booking = {
      ...payload,
      payment: payment,
      // Booking Status
      bookingStatusId: "61d2d1685c41f20143cca451", // Confirmed
      paymentStatusId: "61d2b4a248459ec16ee535a7", // Paid
    };

    console.log(booking);
    _bookingAuthorize(booking);
  };

  const showRazorpay = async (payload: any) => {
    setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const RAZORPAY_KEY = "rzp_test_h2on3gnKuJgpt1";
    const customer: customerType = {
      firstName: customerData?.firstName,
      lastName: customerData?.lastName,
      emailId: customerData?.emailId,
      // phoneNumber: customerData?.phoneNumber,
    };
    // apiResponse = await _bookingPayMode(payload);
    setBookingError(null);
    const apiResponse = await axios
      .post(`${BASE_URL}/booking`, payload, {
        headers: {
          "x-access-token": UserXAccessToken,
        },
      })
      .then((res: any) => {
        if (!res?.data?.err) {
          console.log(res?.data);
          setBookingError(null);
        } else {
          setBookingError(res?.data?.err);
          console.log(res?.data?.err);
        }
        return res?.data;
      })
      .catch((error: any) => {
        console.log(error?.request?.response);
        let errorResponse = JSON.parse(error?.request?.response);
        console.log(errorResponse?.message?.error?.description);
        setBookingError(errorResponse?.message?.error?.description);
      });
    setLoading(false);
    if (apiResponse) {
      console.log(apiResponse);
      setLoading(false);

      const { data }: any = apiResponse;
      const options = {
        key: RAZORPAY_KEY,
        currency: data?.currency,
        order_id: data?.id,
        name: "Visit Madh Island - Booking",
        description: "Thank you for booking with us",
        handler: (response: any) => {
          confirmBooking(response, payload);
        },
        prefill: {
          name: `${customer.firstName} ${customer.lastName}`,
          email: customer.emailId,
          // phone_number: customer.phoneNumber.includes("+")
          //   ? `${customer.phoneNumber}`
          //   : `+91${customer.phoneNumber}`,
        },
      };
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    }
  };

  const _getPropertyDetailById = (payload: any) => {
    const singlePropertyDetailData =
      propertyService.getPropertyDetailById(payload);
    singlePropertyDetailData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        // Assigning response the data in the state
        setPropertyDetail(res?.data?.data);
      }
    });
  };

  // Booking api call function

  const _booking = (payload: any) => {
    setBookingError(null);
    const bookingApiCall = bookingService.booking(payload);
    bookingApiCall.then((res: any) => {
      if (!res?.data?.error) {
        // console.log(res?.data?.message);
        setSuccessBookingPopup(true);
        console.log(res?.data);
        setBookingError(null);
      } else {
        setSuccessBookingPopup(false);
        setBookingError(res?.data?.error);
      }
    });
  };

  // Authorize Booking api call function
  const _bookingAuthorize = (payload: any) => {
    const bookingAuthorizeApiCall = bookingService.bookingAuthorize(payload);
    bookingAuthorizeApiCall.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data);
        setSuccessBookingPopup(true);
        setLoading(false);
      } else {
        setSuccessBookingPopup(false);
      }
    });
  };

  const checkoutButton: any = useRef(null);

  function handleClick() {
    // textInput.current.focus();
    // checkoutButton.click();
    checkoutButton?.current.click();
  }

  // Effects
  useEffect(() => {
    const searchFilters = getStoreFilters();

    const service = searchFilters.serviceType;
    const checkInDate = searchFilters.checkInDate || moment();
    const checkOutDate = searchFilters.checkOutDate || moment().add(1, "day");

    const filters: PropertyFilter = {
      serviceType: service as string,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
    // console.log(filters);
    setPropertyFilter(filters);
  }, []);

  useEffect(() => {
    const searchFilters = getStoreFilters();

    const service = searchFilters.serviceType;
    const checkInDate = searchFilters.checkInDate || moment();
    const checkOutDate = searchFilters.checkOutDate || moment().add(1, "day");

    const filters: PropertyFilter = {
      serviceType: service as string,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
    // console.log(filters);
    setPropertyFilter(filters);
  }, [updateFilter]);

  useEffect(() => {
    if (id) {
      _getPropertyDetailById(id);
    }
  }, [id]);

  useEffect(() => {
    if (propertyFilter) {
      setCheckInDateFooter(propertyFilter?.checkInDate);
      setCheckOutDateFooter(propertyFilter?.checkOutDate);
    }
  }, [propertyFilter]);

  useEffect(() => {
    if (bookingData) {
      if (
        propertyFilter?.serviceType == "VillasandBunglow" ||
        propertyFilter?.serviceType == "EventVenues"
      ) {
        showRazorpay(bookingData);
      } else {
        _booking(bookingData);
      }
    }
  }, [bookingData]);
  useEffect(() => {
    console.log(customerData);
  }, []);

  return (
    <Box sx={{ height: `inherit` }}>
      <LayoutWrapper>
        <ImageGallery imageList={propertyDetail?.images} />

        <BodyWrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              className="cursor-pointer"
              // href={{
              //   pathname: "/propertieslist",
              //   query: { serviceType: `${propertyFilter.serviceType}` },
              // }}
              onClick={() => {
                router.push({
                  pathname: "/propertieslist",
                  query: {
                    serviceType: `${propertyFilter.serviceType}`,
                    serviceTypeId,
                  },
                });
              }}
              // href={`/propertieslist?serviceType=${propertyFilter.serviceType}`}
            >
              {propertyFilter.serviceType === "VillasandBunglow" &&
                `Villas & Bungalows`}
              {propertyFilter.serviceType === "EventVenues" && `Event Venue`}
              {propertyFilter.serviceType === "FilmLocation" && `Film Location`}
              {propertyFilter.serviceType === "Reece" && `Reece`}
            </Link>
            <Typography color="text.primary">
              {propertyDetail?.title}
            </Typography>
          </Breadcrumbs>

          <Typography
            variant="h1"
            component="p"
            className="property-title"
            color="#1F1F1F"
            textAlign="left"
            sx={{ marginTop: `10px`, marginBottom: "10px" }}
          >
            {/* {selectedProperty.propertyName} */}
            {propertyDetail?.title}
          </Typography>
          <Grid
            container
            sx={{ flexDirection: { xs: `column-reverse`, md: "row" } }}
            spacing={2}
          >
            {/* /Left */}
            <Grid item xs={12} md={8}>
              {propertyDetail?.addressLine1 && (
                <Typography
                  variant="body1"
                  component="p"
                  color="#1F1F1F"
                  textAlign="left"
                  sx={{ marginTop: `8px` }}
                >
                  {/* {selectedProperty.address} */}
                  {propertyDetail?.addressLine1}
                </Typography>
              )}
              {propertyDetail?.addressLine2 && (
                <Typography
                  variant="body1"
                  component="p"
                  color="#1F1F1F"
                  textAlign="left"
                  sx={{ marginTop: `8px` }}
                >
                  {/* {selectedProperty.address} */}
                  {propertyDetail?.addressLine2}
                </Typography>
              )}

              <Typography
                variant="body2"
                component="p"
                color="#1F1F1F"
                textAlign="left"
                sx={{ marginTop: `16px` }}
              >
                {propertyDetail?.noOfBedrooms &&
                  `${propertyDetail?.noOfBedrooms} Bedrooms `}

                {propertyDetail?.sizeOfProperty &&
                  ` | ${propertyDetail?.sizeOfProperty} Sq ft.`}
                {propertyFilter &&
                propertyFilter.serviceType == "VillasandBunglow"
                  ? propertyDetail?.additionalChargeMax &&
                    ` | Max Guests ${propertyDetail?.additionalChargeMin}`
                  : propertyFilter.serviceType == "EventVenues"
                  ? propertyDetail?.eventVenueMaxCapacity &&
                    ` | Max Guests ${propertyDetail?.eventVenueMaxCapacity}`
                  : null}
              </Typography>
              {propertyDetail?.amenities && (
                <>
                  <Typography
                    variant="h5"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `8px` }}
                  >
                    Amenities
                  </Typography>
                  <Stack
                    sx={{ marginTop: `8px` }}
                    direction="row"
                    spacing={1}
                    justifyContent="flex-start"
                  >
                    {propertyDetail?.amenities.map((amminity: any) => (
                      <Chips
                        key={`amminity-${amminity?.id}`}
                        title={amminity?.title}
                        className={amminity?.className}
                      />
                    ))}
                  </Stack>
                </>
              )}

              {propertyDetail?.description && (
                <Box>
                  <Typography
                    variant="h5"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `16px` }}
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
                    {/* {selectedProperty.details} */}
                    {propertyDetail?.description}
                  </Typography>
                </Box>
              )}

              {propertyDetail?.homeRuleTruths && (
                <Box>
                  <Typography
                    variant="h5"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `16px` }}
                  >
                    House Rules
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `8px` }}
                  >
                    {propertyDetail?.homeRuleTruths}
                  </Typography>
                </Box>
              )}

              {propertyDetail?.policies && (
                <Box>
                  <Typography
                    variant="h5"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `16px` }}
                  >
                    Policies
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="#1F1F1F"
                    textAlign="left"
                    sx={{ marginTop: `8px` }}
                  >
                    {/* {selectedProperty.details} */}
                    {propertyDetail?.policies}
                  </Typography>
                </Box>
              )}
            </Grid>
            {/* Right */}
            <Grid item xs={12} md={4}>
              <CheckoutCard
                bookingError={bookingError}
                handleClick={(handleClick: any) =>
                  handleCheckoutCard(handleClick)
                }
                forwardedRef={checkoutButton}
                setUpdateFilter={setUpdateFilter}
                detail={propertyDetail}
                price={
                  propertyFilter?.serviceType &&
                  propertyFilter?.serviceType == "VillasandBunglow"
                    ? propertyDetail?.villaBunglowPrice
                    : propertyFilter?.serviceType == "EventVenues"
                    ? propertyDetail?.eventVenuePrice
                    : null
                }
                serviceType={propertyFilter}
                loading={loading}
                setFormDisableControl={setFormDisableControl}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}></Grid>
        </BodyWrapper>
      </LayoutWrapper>

      <div className="single-property-footer-bottom">
        <div className="footer-bottom-container">
          <div className="date-and-title">
            {propertyFilter.serviceType &&
            propertyFilter.serviceType != "Reece" ? (
              <h5>
                {`
                ${moment(checkInDateFooter).format("DD MMM YYYY")} - ${moment(
                  checkOutDateFooter
                ).format("DD MMM YYYY")}
                `}
              </h5>
            ) : null}
            {propertyDetail?.title && <h4>{propertyDetail?.title}</h4>}
          </div>
          <div className="cta-btn">
            {propertyFilter.serviceType &&
            propertyFilter.serviceType == "FilmLocation" ? (
              // ? propertyDetail?.catalog && (
              //     <a href={propertyDetail?.catalog} download>
              //       Download PDF
              //     </a>
              //   )
              <a
                className="primary-button"
                href={propertyDetail?.catalog}
                download
              >
                Download PDF
              </a>
            ) : null}
            <Button
              onClick={handleClick}
              disabled={formDisableControl || loading}
            >
              {(propertyFilter?.serviceType &&
                propertyFilter?.serviceType == "VillasandBunglow") ||
              propertyFilter?.serviceType == "EventVenues"
                ? !loading
                  ? "Book Now"
                  : "Booking..."
                : propertyFilter?.serviceType == "FilmLocation" ||
                  propertyFilter?.serviceType == "Reece"
                ? !loading
                  ? "Reserve"
                  : "Reserving..."
                : null}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`success-booking-modal ${
          successBookingPopup ? "active" : ""
        } `}
      >
        <div className="success-booking-card">
          <img src={BookingSuccessIcon.src} alt="" />
          <h3>You’ve sucessfully booked!</h3>
          <p>
            You will be receiving a confirmation on your registered mobile
            number & email.
          </p>
          <a
            onClick={() =>
              router.push({
                pathname: "/",
              })
            }
          >
            Home
          </a>
        </div>
      </div>
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
  // height: calc(100% - 80px);
  padding-bottom: 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    // height: calc(100% - 100px);
    padding-bottom: 170px;
    overflow-y: auto;
    overflow-x: hidden;
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
`;

const LoginWrapper = styled(Box)`
  max-width: 510px;
  margin: 90px auto 0px auto;
  /* padding: 30px 20px; */
  border-radius: 16px;
  box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14),
    0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
  background: white;
`;
