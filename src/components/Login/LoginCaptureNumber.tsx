import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { LoginCard } from "./LoginElements";
import Link from "next/link";
import {
  LoginFormValidationSchema,
  SignupFormValidationSchema,
} from "../../utils/Validations";
import { useState } from "react";
import { AuthenticationService } from "../../services/authentication/authenticationService";

const LoginNumber = ({
  userPhone,
  setSignUpDetail,
  showOtpScreen,
  setErrors,
  setShowOtpScreen,
  error,
  apiGenerateOtp,
}: any) => {
  // States
  const [loginView, setLoginView] = useState(true);

  // Variables
  const loginFormInitialValues = {
    phoneNumber: "",
  };
  const signupFormInitialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
  };
  const loginFormValidationSchema = LoginFormValidationSchema;
  const signupFormValidationSchema = SignupFormValidationSchema;

  // Functions

  const handleSignUpSubmit = (values: any, onSubmitProps: any) => {
    if (error) {
      setShowOtpScreen(true);
    } else {
      setShowOtpScreen(false);
    }
    userPhone(values.phoneNumber);
    onSubmitProps.resetForm();
    console.log(values);
    const singUpdata = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      phoneNumber: Number(values?.phoneNumber),
      emailId: values?.emailId,
    };
    setSignUpDetail(singUpdata);
    setErrors("");
  };

  const handelSingIn = (values: any, onSubmitProps: any) => {
    if (error) {
      setShowOtpScreen(true);
    } else {
      setShowOtpScreen(false);
    }
    userPhone(values.phoneNumber);
    const otpPhoneNumber = {
      phoneNumber: values?.phoneNumber,
    };
    // apiGenerateOtp(otpPhoneNumber);

    // setShowOtpScreen(!error);
    onSubmitProps.resetForm();
    setErrors("");
  };

  // Effects

  return (
    <LoginCard>
      {loginView && (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              textAlign="left"
              sx={{
                margin: "0px 0px 24px 0px",
              }}
            >
              Log In
            </Typography>
            <Typography
              onClick={() => {
                setLoginView(!loginView);
                setErrors("");
              }}
              variant="caption"
              component="caption"
              textAlign="right"
              sx={{
                margin: "0px 0px 24px 0px",
              }}
            >
              New User ?
            </Typography>
          </Box>

          <Typography
            variant="h4"
            component="h4"
            sx={{
              margin: "0px 0px 24px 0px",
            }}
          >
            Enter Mobile Number to receive OTP
          </Typography>
          <Formik
            initialValues={loginFormInitialValues}
            validationSchema={loginFormValidationSchema}
            // onSubmit={(values, onSubmitProps) => {
            //   userPhone(values.phoneNumber);
            //   const otpPhoneNumber = {
            //     phoneNumber: values?.phoneNumber,
            //   };
            //   apiGenerateOtp(otpPhoneNumber);
            //   // setShowOtpScreen(!error);
            //   setErrors("");
            //   onSubmitProps.resetForm();
            // }}
            onSubmit={handelSingIn}
          >
            {(props) => (
              <Form>
                <TextField
                  type="tel"
                  fullWidth
                  label="Mobile Number"
                  name="phoneNumber"
                  value={props.values.phoneNumber}
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{
                    margin: "0px 0px 24px 0px",
                  }}
                />

                <Button
                  variant="contained"
                  type="submit"
                  disabled={!(props.isValid && props.dirty)}
                  // disabled={!isValid}
                  sx={{ display: "table", margin: "0 auto" }}
                >
                  Send OTP
                </Button>
                <span className="error">{error}</span>
              </Form>
            )}
          </Formik>
        </div>
      )}
      {!loginView && (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              textAlign="left"
              sx={{
                margin: "0px 0px 24px 0px",
              }}
            >
              Create New User
            </Typography>
            <Typography
              onClick={() => {
                setLoginView(!loginView);
                setErrors("");
              }}
              variant="caption"
              component="caption"
              textAlign="right"
              sx={{
                margin: "0px 0px 24px 0px",
              }}
            >
              Already have an account ?
            </Typography>
          </Box>

          <Formik
            initialValues={signupFormInitialValues}
            validationSchema={signupFormValidationSchema}
            onSubmit={handleSignUpSubmit}
          >
            {(props) => (
              <Form>
                <TextField
                  type="text"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={props.values.firstName}
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{
                    margin: "0px 0px 24px 0px",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={props.values.lastName}
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{
                    margin: "0px 0px 24px 0px",
                  }}
                />
                <TextField
                  type="tel"
                  fullWidth
                  label="Mobile Number"
                  name="phoneNumber"
                  value={props.values.phoneNumber}
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{
                    margin: "0px 0px 24px 0px",
                  }}
                />
                <TextField
                  type="text"
                  fullWidth
                  label="Email"
                  name="emailId"
                  value={props.values.emailId}
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{
                    margin: "0px 0px 24px 0px",
                  }}
                />

                <Button
                  variant="contained"
                  type="submit"
                  disabled={!(props.isValid && props.dirty)}
                  // disabled={!isValid}
                  sx={{ display: "table", margin: "0 auto" }}
                >
                  Send OTP
                </Button>
                <span className="error">{error}</span>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </LoginCard>
  );
};
export default LoginNumber;
