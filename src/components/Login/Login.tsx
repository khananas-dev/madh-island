import { Modal, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AuthenticationService } from "../../services/authentication/authenticationService";
import LoginNumber from "./LoginCaptureNumber";
import LoginOtp from "./LoginCaptureOTP";

function Login() {

  // States
  const [registeredMobile, setRegisteredMobile] = React.useState("");
  const [signUpDetail, setSignUpDetail] = useState<any>();
  const [otpPhoneNumber, setOtpPhoneNumber] = useState<any>();

  // variables

  const authenticationService = new AuthenticationService();

  // Functions
  const userPhone = (value: any) => {
    setRegisteredMobile(value);
  };

  const _signUp = (payLoad: any) => {
    const signUpData = authenticationService.signUp(payLoad);
    signUpData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.data);
        setOtpPhoneNumber({
          phoneNumber: payLoad?.phoneNumber
        })
      }
    })
  }

  const _generateOtp = (payLoad: any) => {
    const generateOtpData = authenticationService.generateOtp(payLoad);
    generateOtpData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.message);
      }
    })
  }


  // Effects

  useEffect(() => {
    if (signUpDetail) {
      _signUp(signUpDetail)
    }
  }, [signUpDetail]);
  useEffect(() => {
    if (otpPhoneNumber) {
      _generateOtp(otpPhoneNumber)
    }
  }, [otpPhoneNumber]);

  return (
    <>

      {!registeredMobile && <LoginNumber userPhone={userPhone} setSignUpDetail={setSignUpDetail} />}
      {registeredMobile && <LoginOtp userData={registeredMobile} userPhone={userPhone} />}
    </>
  );
}

export default Login;
