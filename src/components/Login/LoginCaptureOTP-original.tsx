import React from "react";
import { Grid, Paper, Box, Typography, Link, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LoginCard } from "./LoginElements";

const otpbox = {
  padding: "16.5px 14px",
  font: "inherit",
  maxWidth: 50,
  height: 56,
  borderRadius: 7,
  border: "2px solid #535353",
};
const LoginOtp = ({
  userData,
  userPhone,
  setOtp,
  setOtpPhoneNumber,
  loading,
  _verifyOtp,
  error,
  setErrors,
  setShowOtpScreen,
}: any) => {
  // States

  // Variables
  const formSchema = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };

  // --- Validation Schema --- //
  const validationSchema = Yup.object().shape({
    otp1: Yup.number().required("required"),
    otp2: Yup.number().required("required"),
    otp3: Yup.number().required("required"),
    otp4: Yup.number().required("required"),
    otp5: Yup.number().required("required"),
    otp6: Yup.number().required("required"),
  });

  // Functions
  const changNumber = () => {
    userPhone("");
    setErrors("");
    setShowOtpScreen(false);
  };

  const handleMaxLength = (elmnt: any) => {
    if (elmnt.target.value.length > elmnt.target.maxLength)
      elmnt.target.value = elmnt.target.value.slice(0, elmnt.target.maxLength);
  };

  const inputfocus = (elmnt: any) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.parentNode.childNodes[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.parentNode.childNodes[next].focus();
      }
    }
  };

  const otpHandelSubmit = (values: any) => {
    console.log(values);
    const otp = `
            ${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}
            `;
    setOtp(otp.toString().replaceAll(/\s/g, ""));
  };

  const handelDisabled = (props: any) => {
    if (loading) {
      return true;
    } else {
      return !(props.isValid && props.dirty);
    }
  };

  // Effects

  return (
    <LoginCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px 0px 24px 0px",
        }}
      >
        <Typography variant="h2" component="h2" textAlign="left">
          Log In
        </Typography>
        <Link
          component="button"
          underline="none"
          variant="body1"
          color="inherit"
          onClick={() => {
            changNumber();
          }}
        >
          Change Number?
        </Link>
      </Box>

      <Typography
        variant="h4"
        component="h4"
        sx={{
          margin: "0px 0px 24px 0px",
        }}
      >
        Sent to Mobile Number {userData}
      </Typography>
      <Formik
        initialValues={formSchema}
        validationSchema={validationSchema}
        // onSubmit={(values, onSubmitProps) => {
        //   // same shape as initial values
        //   console.log(values);
        //   onSubmitProps.resetForm();
        // }}
        onSubmit={otpHandelSubmit}
      >
        {(props) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0px 0px 24px 0px",
              }}
            >
              <input
                type="number"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                className="otp-input"
                name="otp1"
                style={otpbox}
                maxLength={1}
                value={props.values.otp1}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={1}
              />
              <input
                type="number"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                className="otp-input"
                name="otp2"
                style={otpbox}
                maxLength={1}
                value={props.values.otp2}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={2}
              />
              <input
                type="number"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                className="otp-input"
                name="otp3"
                style={otpbox}
                maxLength={1}
                value={props.values.otp3}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={3}
              />
              <input
                type="number"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                className="otp-input"
                name="otp4"
                style={otpbox}
                maxLength={1}
                value={props.values.otp4}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={4}
              />
              <input
                type="number"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                className="otp-input"
                name="otp5"
                style={otpbox}
                maxLength={1}
                value={props.values.otp5}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={5}
              />
              <input
                type="number"
                className="otp-input"
                onKeyUp={(e) => inputfocus(e)}
                autoComplete="newText"
                name="otp6"
                style={otpbox}
                maxLength={1}
                value={props.values.otp6}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                onFocus={(e) => e.target.select()}
                onInput={(e) => handleMaxLength(e)}
                tabIndex={6}
              />
            </Box>

            {/* <Link
              component="button"
              variant="body2"
              color="inherit"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Resend OTP
            </Link> */}
            <Button
              variant="contained"
              type="submit"
              //   disabled={!(props.isValid && props.dirty)}
              disabled={handelDisabled(props)}
              sx={{
                display: "table",
                margin: "0 auto",
                textTransform: "uppercase",
              }}
            >
              {loading ? "verifying.." : "Log In "}
            </Button>
            <span className="error">{error}</span>
          </Form>
        )}
      </Formik>
    </LoginCard>
  );
};

export default LoginOtp;
