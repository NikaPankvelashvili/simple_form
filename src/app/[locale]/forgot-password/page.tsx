"use client";

import { useI18n } from "@/locales/client";
import SwitchLanguage from "@/src/componenets/SwitchLanguage";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { forgetPasswordValidateShema } from "../../schema/forgetPasswordSchema";
import NormalField from "@/src/componenets/form/NormalField";
import GoBackBtn from "@/src/componenets/form/GoBackBtn";
import { classnames } from "@code/login/page";

const ForgotPassword = () => {
  const t = useI18n();

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values: { email: string }) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={forgetPasswordValidateShema}
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
                name="email"
                customCSS={classnames.input}
                touchedField={touched.email as unknown as string}
                errorsField={errors.email as unknown as string}
              />
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

export default ForgotPassword;
