import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import Login from "../src/components/Login/Login";
import { isUserLoggedIn } from "../src/utils/utils";

function History() {
  const [loginModel, setLoginModel] = useState(false);
  const userAuthenticationStatus = isUserLoggedIn();
    useEffect(() => {
        setLoginModel(!loginModel);
    }, [userAuthenticationStatus])
 
  const handleClose = () => setLoginModel(false);

  return (
    <div>
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </div>
  );
}

export default History;
const LoginWrapper = styled(Box)`
 max-width: 510px;
margin: 90px auto 0px auto;
/* padding: 30px 20px; */
border-radius: 16px;
box-shadow: 0px 1px 1px rgba(110, 110, 110, 0.14), 0px 2px 1px rgba(110, 110, 110, 0.12), 0px 1px 3px rgba(110, 110, 110, 0.2);
background: white;

`;