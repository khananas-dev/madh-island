import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { AuthenticationService } from "../../services/authentication/authenticationService";
import {
  LoginFormValidationSchema,
  SignupFormValidationSchema,
} from "../../utils/Validations";
import {
  SignFormInitialValues,
  signupFormInitialValues,
} from "./form-initial-values";
import Otp from "./LoginCaptureOTP";
import { LoginCard } from "./LoginElements";

function Login({ handleClose, setJwt, jwt }: any) {
  // States
  const [otpScreen, setOtpScreen] = useState<boolean>(false);
  const [Error, setError] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<any>(false);

  // Variables
  const authenticationService = new AuthenticationService();

  // Functions
  const handelSignIn = (values: any, onSubmitProps: any) => {
    onSubmitProps.resetForm();
    setError(null);
    console.log(values);
    _signIn(values);
    setPhoneNumber(values);
  };

  const handleSignUpSubmit = (values: any, onSubmitProps: any) => {
    onSubmitProps.resetForm();
    // _signUp();
    setError(null);
    console.log(values);
    _signUp(values);
  };

  const handelDisabled = (props: any) => {
    if (loading) {
      return true;
    } else {
      return !(props.isValid && props.dirty);
    }
  };

  const _signIn = (payLoad: any) => {
    _generateOtp(payLoad);
  };

  const _signUp = (payLoad: any) => {
    const signUpApiCall = authenticationService.signUp(payLoad);
    setLoading(true);
    signUpApiCall.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setError(null);
        setOtpScreen(true);
        setLoading(false);
      } else {
        setError(res?.data?.error);
        setLoading(false);
      }
    });
  };

  const _generateOtp = (payLoad: any) => {
    let generateOtpApiCall = authenticationService.generateOtp(payLoad);
    setLoading(true);
    generateOtpApiCall.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setOtpScreen(true);
        setError(null);
        setLoading(false);
      } else {
        setError(res?.data?.error);
        setLoading(false);
      }
    });
  };

  const _verifyOtp = (payLoad: any) => {
    let verifyOtpApiCall = authenticationService.verifyOtp(payLoad);
    setLoading(true);
    verifyOtpApiCall.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setError(null);
        setJwt(JSON.stringify(res?.data));
        handleClose(true);
        setLoading(false);
      } else {
        setError(res?.data?.error);
        setLoading(false);
      }
    });
  };

  // Effects
  useEffect(() => {
    if (jwt) {
      console.log(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);
  return (
    <>
      <LoginCard>
        {!otpScreen && (
          <>
            {!signUp && (
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
                      // setLoginView(!loginView);
                      setSignUp(true);
                      setError(null);
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
                  initialValues={SignFormInitialValues}
                  validationSchema={LoginFormValidationSchema}
                  onSubmit={handelSignIn}
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
                        // disabled={!(props.isValid && props.dirty)}
                        disabled={handelDisabled(props)}
                        sx={{ display: "table", margin: "0 auto" }}
                      >
                        {/* Send OTP */}
                        {loading ? "Sending.." : "Send OTP "}
                      </Button>
                      <span className="error">{Error}</span>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
            {signUp && (
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
                      setSignUp(false);
                      setError(null);
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
                  validationSchema={SignupFormValidationSchema}
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
                        // disabled={!(props.isValid && props.dirty)}
                        // disabled={!isValid}
                        disabled={handelDisabled(props)}
                        sx={{ display: "table", margin: "0 auto" }}
                      >
                        {/* Send OTP */}
                        {loading ? "Creating..." : "Create"}
                      </Button>
                      <span className="error">{Error}</span>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </>
        )}
        {otpScreen && (
          <Otp
            phoneNumber={phoneNumber}
            setOtpScreen={setOtpScreen}
            _verifyOtp={_verifyOtp}
            Error={Error}
            loading={loading}
            setError={setError}
          />
        )}
      </LoginCard>
    </>
  );
}

export default Login;
