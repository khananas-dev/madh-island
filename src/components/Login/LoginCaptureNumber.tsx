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

const LoginNumber = ({ userPhone }: any) => {
  const loginFormInitialValues = {
    phone: "",
  };
  const signupFormInitialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
  const [loginView, setLoginView] = useState(true);

  const loginFormValidationSchema = LoginFormValidationSchema;
  const signupFormValidationSchema = SignupFormValidationSchema;

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
              onClick={() => setLoginView(!loginView)}
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
            onSubmit={(values, onSubmitProps) => {
              userPhone(values.phone);
              onSubmitProps.resetForm();
            }}
          >
            {(props) => (
              <Form>
                <TextField
                  type="tel"
                  fullWidth
                  label="Mobile Number"
                  name="phone"
                  value={props.values.phone}
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
              onClick={() => setLoginView(!loginView)}
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
            onSubmit={(values, onSubmitProps) => {
              userPhone(values.phone);
              onSubmitProps.resetForm();
            }}
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
                  name="phone"
                  value={props.values.phone}
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
                  name="email"
                  value={props.values.email}
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
              </Form>
            )}
          </Formik>
        </div>
      )}
    </LoginCard>
  );
};
export default LoginNumber;
