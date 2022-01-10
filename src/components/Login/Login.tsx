import { Modal, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthenticationService } from "../../services/authentication/authenticationService";
import LoginNumber from "./LoginCaptureNumber";
import LoginOtp from "./LoginCaptureOTP";

function Login({ handleClose, setJwt, jwt }: any) {
  // States
  const [registeredMobile, setRegisteredMobile] = React.useState("");
  const [signUpDetail, setSignUpDetail] = useState<any>();
  const [otpPhoneNumber, setOtpPhoneNumber] = useState<any>();
  const [otp, setOtp] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loginScreen, setLoginScreen] = useState<boolean>(true);
  const [errors, setErrors] = useState<any>("");
  const [showOtpScreen, setShowOtpScreen] = useState<boolean>(false);
  // const [jwt, setJwt] = useState<any>();
  // const [jwt, setJwt] = useLocalStorage("jwt", null);

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
          phoneNumber: Number(payLoad?.phoneNumber),
        });
        const otpData = {
          phoneNumber: Number(payLoad?.phoneNumber),
        };
        setShowOtpScreen(true);
        _generateOtp(otpData);
      } else {
        setShowOtpScreen(false);
        setErrors(res?.data?.error);
      }
    });
  };

  // const _singIn = (payLoad: any) => {
  //   _generateOtp(payLoad);
  // };
  const _generateOtp = (payLoad: any) => {
    const generateOtpData = authenticationService.generateOtp(payLoad);
    generateOtpData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data?.message);
        setShowOtpScreen(true);
      } else {
        setErrors(res?.data?.error);
        setShowOtpScreen(false);
      }
    });
  };

  const _verifyOtp = (payLoad: any) => {
    const verifyOtpData = authenticationService.verifyOtp(payLoad);
    setLoading(true);
    verifyOtpData.then((res: any) => {
      if (!res?.data?.error) {
        console.log(res?.data);
        setLoading(false);
        // setLoginScreen(false);
        console.log();

        setJwt(JSON.stringify(res?.data));
        handleClose();
      } else {
        setLoading(false);
        console.log(res?.data?.error);
        setErrors(res?.data?.error);
      }
    });
  };
  // Effects

  // calling generate otp on the click of the login
  const singInApi = (payload: any) => {
    _generateOtp(payload);
  };

  useEffect(() => {
    if (signUpDetail) {
      _signUp(signUpDetail);
    }
  }, [signUpDetail]);

  useEffect(() => {
    if (registeredMobile) {
      const phoneNumberData = {
        phoneNumber: Number(registeredMobile),
      };
      _generateOtp(phoneNumberData);
    }
  }, [registeredMobile]);

  // Verifying otp on the set of otp
  useEffect(() => {
    if (otp) {
      const payLoad = {
        phoneNumber: Number(registeredMobile),
        otp: Number(otp),
      };
      _verifyOtp(payLoad);
    }
  }, [otp]);

  useEffect(() => {
    if (jwt) {
      console.log(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);
  return (
    <>
      {/* {JSON.stringify(
        `error: ${errors} and show otp screen : ${showOtpScreen}`
      )} */}
      {!showOtpScreen && (
        <LoginNumber
          userPhone={userPhone}
          setSignUpDetail={setSignUpDetail}
          setOtpPhoneNumber={setOtpPhoneNumber}
          showOtpScreen={showOtpScreen}
          setShowOtpScreen={setShowOtpScreen}
          error={errors}
          setErrors={setErrors}
          apiGenerateOtp={singInApi}
        />
      )}
      {showOtpScreen && (
        <LoginOtp
          userData={registeredMobile}
          userPhone={userPhone}
          setOtp={setOtp}
          setShowOtpScreen={setShowOtpScreen}
          loading={loading}
          apiVerify={_verifyOtp}
          error={errors}
          setErrors={setErrors}
        />
      )}
    </>
  );
}

export default Login;
