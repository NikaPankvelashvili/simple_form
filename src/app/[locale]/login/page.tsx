"use client";

import { useState } from "react";
import { useI18n } from "@/locales/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginValidateShema } from "@src/app/schema/loginSchema";
import Link from "next/link";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";
// import * as yup from "yup";

// const Login = () => {
//   return <div>login</div>;
// };

// export default Login;

type HandleSubmitType = {};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const t = useI18n();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
  };

  const handleInputChange = (setStatus: (status: string | null) => void) => {
    setStatus(null);
  };

  const classnames = {
    form: "w-1/3 h-1/2 bg-blue-300 p-24 ",
    input: "w-full border border-gray-300 rounded-md p-1",
    forgotPassword: "mt-[6px] mb-8",
    signInButton:
      "bg-white text-black w-full h-10 p-4 rounded-md flex justify-center items-center",
    eyeIcon: "absolute cursor-pointer text-black top-2 right-2",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidateShema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-1/3 h-1/2 bg-main px-24 flex flex-col py-16 rounded-md">
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
              <Field
                className={classnames.input}
                placeholder="Email"
                name="email"
                label="email"
                type="email"
                id="email"
              />
              <div className="relative">
                <Field
                  className={classnames.input}
                  placeholder="Password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
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
              </div>
            </div>
            <ErrorMessage name="email" component={"div"} />
            <ErrorMessage name="password" component={"div"} />

            <div className="mt-[6px] mb-8">
              <Link
                href={`/forgot-password`}
                className="text-[#0000FF] text-[12px] font-satoshi leading-[18px]"
              >
                Forgot Password?
              </Link>
            </div>
            {/* <div className="flex justify-center"> */}
            <button
              className={classnames.signInButton}
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </button>
            {/* </div> */}
          </Form>
        )}
      </Formik>
      <SwitchLanguage />
    </>
  );
};

export default LoginForm;
