"use client";

import { useI18n } from "@/locales/client";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { forgetPasswordValidateShema } from "../../schema/forgetPasswordSchema";

const ForgotPassword = () => {
  const t = useI18n();

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values: { email: string }) => {
    console.log(values);
  };

  const classnames = {
    form: "w-1/3 h-1/2 bg-blue-300 p-24 ",
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
        validationSchema={forgetPasswordValidateShema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
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

export default ForgotPassword;
