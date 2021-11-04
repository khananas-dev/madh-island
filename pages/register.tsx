import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, MenuItem, Switch, TextField, Typography } from '@mui/material';
import { styled, Box } from '@mui/system';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormCard } from '../src/components/Login/LoginElements';
import { PRODUCTION_HOUSE_TYPES_LIST } from '../src/constants';



export default function Register() {
const [productionHouseList, setProductionHouseList] = useState(PRODUCTION_HOUSE_TYPES_LIST)
    const [switchValue, setSwitchValue] = React.useState(false);
    const handleChange = (event: any) => {
        setSwitchValue(event.target.checked);
    };

    // --- Form Schema --- //
    const formSchema = {
        firstName: "",
        lastName: "",
        date: null,
        phone: "",
        email: "",
        productionHouseType: '',
        productionHouseName: '',

    };

    // --- Validation Schema --- //
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        date: Yup.date().nullable().required(),
        phone: Yup.number()
            .integer()
            .typeError("Please enter a valid phone number.")
            .required("Phone number is required"),
        email: Yup.string().email("Invalid email").required("Required"),
        productionHouseType: switchValue
            ? Yup.string().required("Production House Type is required")
            : Yup.string(),
        productionHouseName: switchValue
            ? Yup.string().required("Production Name is required")
            : Yup.string(),
    });

    return (
        <div>
            <FormCard>
                <Typography variant="h2"
                    component="h2"
                    textAlign="center"
                    sx={{
                        margin: "0px 0px 24px 0px",
                    }}
                >
                    Create a New Account
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
                            <TextField
                                type="text"
                                fullWidth
                                label="First Name"
                                name="FirstName"
                                value={props.values.firstName}
                                onChange={props.handleChange}
                                variant="outlined"
                                required
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
                                required
                                sx={{
                                    margin: "0px 0px 24px 0px",
                                }}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date Of Birth"
                                    value={props.values.date}
                                    onChange={(value) => props.setFieldValue("date", value)}
                                    renderInput={(params) => (
                                        <TextField
                                            fullWidth
                                            {...params}
                                            sx={{
                                                margin: "0px 0px 24px 0px",
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <TextField
                                type="tel"
                                fullWidth
                                label="Phone"
                                name="phone"
                                value={props.values.phone}
                                onChange={props.handleChange}
                                variant="outlined"
                                required
                                sx={{
                                    margin: "0px 0px 24px 0px",
                                }}
                            />
                            <TextField
                                type="email"
                                fullWidth
                                label="Email Address"
                                name="email"
                                value={props.values.email}
                                onChange={props.handleChange}
                                variant="outlined"
                                required
                                sx={{
                                    margin: "0px 0px 24px 0px",
                                }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    margin: "0px 0px 24px 0px",
                                }}
                            >
                                <Typography variant="body1">
                                    From a Production House ?
                                </Typography>
                                <Switch
                                    checked={switchValue}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checked"
                                />
                            </Box>
                            {switchValue ? (
                                <Box>
                                    <TextField
                                        select
                                        label="Production House Type"
                                        name="productionHouseType"
                                        variant="outlined"
                                        fullWidth
                                        value={props.values.productionHouseType}
                                        onChange={props.handleChange}
                                        sx={{
                                            margin: "0px 0px 24px 0px",
                                        }}
                                    >
                                        {productionHouseList.map((item) => {
                                            return (
                                                <MenuItem key={item} value={item}>
                                                    {item}
                                                </MenuItem>
                                            );
                                        })}
                                    </TextField>

                                    <TextField
                                        type="text"
                                        fullWidth
                                        label="Production House Name"
                                        variant="outlined"
                                        name="productionHouseName"
                                        value={props.values.productionHouseName}
                                        onChange={props.handleChange}
                                        sx={{
                                            margin: "0px 0px 24px 0px",
                                        }}
                                    />
                                </Box>
                            ) : null}
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={!(props.isValid && props.dirty)}
                                sx={{ display: "table", margin: "0 auto" }}
                            >
                                Create New
                            </Button>
                        </Form>
                    )}
                </Formik>
            </FormCard>
        </div>
    )
}
