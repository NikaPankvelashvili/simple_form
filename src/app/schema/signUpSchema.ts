import * as Yup from "yup";

export const signUpValidateShema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email has invalid format")
    .test("email-exists", "Email is already registered", function (value) {
      return localStorage.getItem("email") !== value;
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
