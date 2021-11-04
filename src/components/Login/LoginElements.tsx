import styled from "styled-components";
import Box from "@mui/material/Box";

//Account Card for Login and Singup

export const FormCard = styled(Box)`
  max-width: 370px;
  margin: 90px auto 184px auto;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14),
    0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
`;

//Back Drop for the login page
export const BackDrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #434343;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(24px);
`;

export const LoginCard = styled(Box)`
  width: 100%;
  max-width: 510px;
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  position: absolute;
  box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14),
    0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
`;
const otpbox = {
  padding: "16.5px 14px",
  textAlign: 'center',
  font: "inherit",
  maxWidth: 50,
  height: 56,
  borderRadius: 7,
  border: "2px solid #535353",
};
export const OTPWrapper = styled(Box)`
  padding: 16px;
  text-align: center;  background: #fff;
  width: 50;
  border-radius: 8;
  border-width: 2;
  border-color: #535353;
  border-style: solid;

`;
