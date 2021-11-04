import * as Yup from "yup";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const LoginFormValidationSchema = Yup.object().shape({
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

