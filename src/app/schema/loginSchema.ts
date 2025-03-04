import * as Yup from "yup";

export const loginValidateShema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email has invalid format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  // ),
});
