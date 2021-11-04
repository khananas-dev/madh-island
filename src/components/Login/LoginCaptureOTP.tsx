import React from 'react';
import { Grid, Paper, Box, Typography, Link, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LoginCard } from './LoginElements';
 

const otpbox = {
    padding: "16.5px 14px",
     font: "inherit",
    maxWidth: 50,
    height: 56,
    borderRadius: 7,
    border: "2px solid #535353",
};
const LoginOtp = ({userData, userPhone}: any) =>{
    const changNumber = () => {
        userPhone("");
    };

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
        otp1: Yup.number().required('required'),
        otp2: Yup.number().required('required'),
        otp3: Yup.number().required('required'),
        otp4: Yup.number().required('required'),
        otp5: Yup.number().required('required'),
        otp6: Yup.number().required('required'),
    });

    const handleCheckBox = (element: any) => {
        if (isNaN(element.value)) return false;

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
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
                onSubmit={(values, onSubmitProps) => {
                    // same shape as initial values
                    console.log(values);
                    onSubmitProps.resetForm();
                }}    
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
                                type="text"
                                autoComplete="off"
                                name="otp1"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp1}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                name="otp2"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp2}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                name="otp3"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp3}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                name="otp4"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp4}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                name="otp5"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp5}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                            <input
                                type="text"
                                autoComplete="off"
                                name="otp6"
                                style={otpbox}
                                maxLength={1}
                                value={props.values.otp6}
                                onChange={(e) => { props.handleChange(e); handleCheckBox(e.target) }}
                                onFocus={(e) => e.target.select()}
                            />
                        </Box>

                        <Link
                            component="button"
                            variant="body2"
                            color="inherit"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            Resend OTP
                        </Link>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={!(props.isValid && props.dirty)}
                            sx={{
                                display: "table",
                                margin: "0 auto",
                                textTransform: "uppercase",
                            }}
                        >
                            Log In
                        </Button>
                    </Form>
                )}
                </Formik>
        </LoginCard>
    )
}



export default LoginOtp