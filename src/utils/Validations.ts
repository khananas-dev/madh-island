import * as Yup from "yup";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const LoginFormValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
export const SignupFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  emailId: Yup.string().email("Email must be valid").required(),
});

export const bookingFormValidation = Yup.object().shape({});
