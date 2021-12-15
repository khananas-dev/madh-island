import * as Yup from "yup";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const LoginFormValidationSchema = Yup.object().shape({
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
export const SignupFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
  email: Yup.string().email("Email must be valid").required(),
});

