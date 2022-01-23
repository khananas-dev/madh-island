import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ContactService } from "../src/services/contact";
import BookingSuccessIcon from "../public/success-booking.png";
import { useRouter } from "next/router";

export default function ContactUs() {
  // States
  const [contactData, setContactData] = useState<any>();
  const [successBookingPopup, setSuccessBookingPopup] =
    useState<boolean>(false);

  // Variables
  const router = useRouter();
  const contactService = new ContactService();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValue = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validation = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field cannot be blank"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Field cannot be blank"),
    message: Yup.string()
      .min(2, "Too Short!")
      .required("Field cannot be blank"),
  });

  // Functions

  const handleSubmit = (value: any, { resetForm }: any) => {
    console.log(value);
    setContactData(value);
    resetForm();
  };

  const _contactUs = (payload: any) => {
    const contactUsApiCall = contactService.contactUs(payload);
    contactUsApiCall.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.message);
        setSuccessBookingPopup(true);
      } else {
        setSuccessBookingPopup(false);
      }
    });
  };

  // Effects

  useEffect(() => {
    if (contactData) {
      _contactUs(contactData);
    }
  }, [contactData]);

  return (
    <section className="contact-us-section">
      <div className="contact-us-wrapper">
        <h3>Tell Us</h3>
        <Formik
          initialValues={initialValue}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {(props: any) => (
            <Form>
              <div className="input-wrapper">
                <TextField
                  id="fullName"
                  required
                  name="fullName"
                  autoComplete={"" + Math.random()}
                  value={props.values.fullName}
                  error={Boolean(
                    props.errors.fullName && props.touched.fullName
                  )}
                  helperText={
                    props.errors.fullName &&
                    props.touched.fullName &&
                    String(props.errors.fullName)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  required
                  name="phone"
                  autoComplete={"" + Math.random()}
                  value={props.values.phone}
                  error={Boolean(props.errors.phone && props.touched.phone)}
                  helperText={
                    props.errors.phone &&
                    props.touched.phone &&
                    String(props.errors.phone)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  type="number"
                  fullWidth
                  label="Phone Number"
                  id="phone"
                  InputProps={{
                    endAdornment: <img src={PhoneIcon.src} />,
                  }}
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  required
                  name="email"
                  autoComplete={"" + Math.random()}
                  value={props.values.email}
                  error={Boolean(props.errors.email && props.touched.email)}
                  helperText={
                    props.errors.email &&
                    props.touched.email &&
                    String(props.errors.email)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  type="email"
                  fullWidth
                  label="Email"
                  id="email"
                  InputProps={{
                    endAdornment: <img src={EmailIcon.src} />,
                  }}
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  required
                  name="message"
                  autoComplete={"" + Math.random()}
                  value={props.values.message}
                  error={Boolean(props.errors.message && props.touched.message)}
                  helperText={
                    props.errors.message &&
                    props.touched.message &&
                    String(props.errors.message)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  fullWidth
                  id="message"
                  label="What’s your Requirement"
                  multiline
                  rows={4}
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  size="large"
                  disabled={!(props.isValid && props.dirty)}
                  variant="contained"
                >
                  Send Query
                </Button>
              </div>
            </Form>
          )}
        </Formik>
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
    </section>
  );
}
