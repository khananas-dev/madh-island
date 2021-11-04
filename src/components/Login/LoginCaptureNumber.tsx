import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { LoginCard } from "./LoginElements";
import Link from "next/link";
import { LoginFormValidationSchema } from "../../utils/Validations";

const LoginNumber = ({ userPhone }: any) => {
  const formSchema = {
    phone: "",
  };


  const loginFormValidationSchema = LoginFormValidationSchema

  return (
    <LoginCard>
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
        <Link href="/register">
          <Typography
            variant="caption"
            component="caption"
            textAlign="right"
            sx={{
              margin: "0px 0px 24px 0px",
            }}
          >
            New User ?
          </Typography>
        </Link>
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
        initialValues={formSchema}
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
    </LoginCard>
  );
};
export default LoginNumber;
