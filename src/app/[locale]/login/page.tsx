"use client";

import { useState } from "react";
import { useI18n } from "@/locales/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidateShema } from "@src/app/schema/loginSchema";
import Link from "next/link";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";
import NormalField from "@/src/componenets/form/NormalField";
import PasswordField from "@/src/componenets/form/PasswordField";

export const classnames = {
  form: "w-1/3 bg-white px-24 flex flex-col py-16 rounded-md",
  input: "w-full border border-gray-300 rounded-md p-2 mb-4",
  forgotPassword: "mt-[6px] mb-8",
  signInButton:
    "bg-main mb-8 text-black w-full h-10 p-4 rounded-md flex justify-center items-center",
  eyeIcon: "absolute cursor-pointer text-black top-2 right-2",
};

export const LoginForm = () => {
  const t = useI18n();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
  };

  // const handleInputChange = (setStatus: (status: string | null) => void) => {
  //   setStatus(null);
  // };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidateShema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className={classnames.form}>
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
              <NormalField
                name="email"
                customCSS={classnames.input}
                touchedField={touched.email as unknown as string}
                errorsField={errors.email as unknown as string}
              />
              {/* <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                  placeholder={emailActive ? "" : "Email"}
                  name="email"
                  label="email"
                  id="email"
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => {
                    setEmailActive(false);
                  }}
                />
                <label
                  id="email_lable"
                  htmlFor="email"
                  className={`absolute top-1 left-1 duration-200 select-none  ${
                    emailActive ? "active" : "opacity-0"
                  }`}
                >
                  Email
                </label>
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div> */}
              {/* <div className="relative">
                <Field
                  className={`${classnames.input} ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                  placeholder={passwordActive ? "" : "Password"}
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onFocus={() => setPasswordActive(true)}
                  onBlur={() => {
                    setPasswordActive(false);
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
                  className={`absolute top-2 left-2 duration-200 select-none ${
                    passwordActive ? "active" : "opacity-0"
                  }`}
                >
                  Password
                </label>
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="absolute top-9 left-2"
                />
              </div> */}
              <PasswordField
                name="password"
                customCSS={classnames.input}
                touchedField={touched.password as unknown as string}
                errorsField={errors.email as unknown as string}
              />
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
            <Link className="w-full text-center mt-4 mb-8" href={`/sign_up`}>
              Register
            </Link>
            <SwitchLanguage />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
