import * as Yup from "yup";

export const forgetPasswordValidateShema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email has invalid format")
    .test(
      "email-exists",
      "Email does not exist in local storage",
      function (value) {
        return localStorage.getItem("email") === value;
      }
    ),
});
