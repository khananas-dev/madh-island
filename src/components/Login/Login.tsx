import { Modal, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import React from "react";
import LoginNumber from "./LoginCaptureNumber";
import LoginOtp from "./LoginCaptureOTP";

function Login() {
  const [registeredMobile, setRegisteredMobile] = React.useState("");

  const userPhone = (value: any) => {
    setRegisteredMobile(value);
  };
  return (
 <>
 
      {!registeredMobile && <LoginNumber userPhone={userPhone} />}
      {registeredMobile && <LoginOtp userData={registeredMobile} userPhone={userPhone} />}
 </>
  );
}

export default Login;
