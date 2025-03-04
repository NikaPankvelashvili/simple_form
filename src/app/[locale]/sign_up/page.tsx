"use client";
import { useI18n } from "@/locales/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginValidateShema } from "@src/app/schema/loginSchema";
import Link from "next/link";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";

import { useState } from "react";
import { signUpValidateShema } from "../../schema/signUpSchema";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const t = useI18n();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
  };

  // const handleInputChange = (setStatus: (status: string | null) => void) => {
  //   setStatus(null);
  // };

  const classnames = {
    form: "w-1/3 h-sceen bg-blue-300 p-24 ",
    input: "w-full border border-gray-300 rounded-md p-1 mb-4",
    forgotPassword: "mt-[6px] mb-8",
    signInButton:
      "bg-white text-black w-full h-10 p-4 rounded-md flex justify-center items-center",
    eyeIcon: "absolute cursor-pointer text-black top-2 right-2",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidateShema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="w-1/3 h-auto bg-main px-24 flex flex-col py-16 rounded-md">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-center mb-8">
                {t("login_title")}
              </h1>
              <h2 className="text-lg text-center">Authorization</h2>
              <h5 className=" text-center">
                Enter your email and password to login
              </h5>
            </div>
            <div className="space-y-3 flex flex-col">
              <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.fullName && errors.fullName ? "border-red-500" : ""
                  }`}
                  name="fullName"
                  label="Full Name"
                  id="fullName"
                  onFocus={() =>
                    document
                      .getElementById("fullName_lable")
                      ?.classList.add("active")
                  }
                  onBlur={() => {
                    document
                      .getElementById("fullName_lable")
                      ?.classList.remove("active");
                  }}
                />
                <label
                  id="fullName_lable"
                  htmlFor="fullName"
                  className="absolute top-2 left-2 duration-200 select-none"
                >
                  Full Name
                </label>
                <ErrorMessage
                  name="fullName"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div>
              <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                  name="email"
                  label="email"
                  id="email"
                  onFocus={() =>
                    document
                      .getElementById("email_lable")
                      ?.classList.add("active")
                  }
                  onBlur={() => {
                    document
                      .getElementById("email_lable")
                      ?.classList.remove("active");
                  }}
                />
                <label
                  id="email_lable"
                  htmlFor="email"
                  className="absolute top-2 left-2 duration-200 select-none"
                >
                  Email
                </label>
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div>
              <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                  // placeholder="Password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onFocus={() =>
                    document
                      .getElementById("password_lable")
                      ?.classList.add("active")
                  }
                  onBlur={() => {
                    document
                      .getElementById("password_lable")
                      ?.classList.remove("active");
                  }}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className={classnames.eyeIcon}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaRegEye
                    className={classnames.eyeIcon}
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <label
                  id="password_lable"
                  htmlFor="password"
                  className="absolute top-2 left-2 duration-200 select-none"
                >
                  Password
                </label>
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div>
              <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "border-red-500"
                      : ""
                  }`}
                  // placeholder="Password"
                  name="confirmPassword"
                  label="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  onFocus={() =>
                    document
                      .getElementById("confirmPassword_lable")
                      ?.classList.add("active")
                  }
                  onBlur={() => {
                    document
                      .getElementById("confirmPassword_lable")
                      ?.classList.remove("active");
                  }}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className={classnames.eyeIcon}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaRegEye
                    className={classnames.eyeIcon}
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <label
                  id="confirmPassword_lable"
                  htmlFor="confirmPassword"
                  className="absolute top-2 left-2 duration-200 select-none"
                >
                  Repeate Password
                </label>
                <ErrorMessage
                  name="confirmPassword"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div>
            </div>

            <div className="mt-[6px] mb-8">
              <Link
                href={`/forgot-password`}
                className="text-[#0000FF] text-[12px] font-satoshi leading-[18px]"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              className={classnames.signInButton}
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </button>
            <Link href={`/sign_up`}>Register</Link>
            <SwitchLanguage />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
