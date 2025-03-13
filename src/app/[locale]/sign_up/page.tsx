"use client";

import { useI18n } from "@/locales/client";
import { Formik, Form } from "formik";
import Link from "next/link";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";

import { signUpValidateShema } from "../../schema/signUpSchema";
import NormalField from "@/src/componenets/form/NormalField";
import PasswordField from "@/src/componenets/form/PasswordField";
import GoBackBtn from "@/src/componenets/form/GoBackBtn";
import { classnames } from "@code/login/page";

export const SignUp = () => {
  const t = useI18n();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidateShema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className={classnames.form}>
            <GoBackBtn />
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
                name="Username"
                customCSS={classnames.input}
                touchedField={touched.username as unknown as string}
                errorsField={errors.username as unknown as string}
              />
              <NormalField
                name="email"
                customCSS={classnames.input}
                touchedField={touched.email as unknown as string}
                errorsField={errors.email as unknown as string}
              />
              <PasswordField
                name="password"
                customCSS={classnames.input}
                touchedField={touched.password as unknown as string}
                errorsField={errors.email as unknown as string}
              />

              <PasswordField
                name="confirmpassword"
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
              Sign Up
            </button>
            <SwitchLanguage />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
