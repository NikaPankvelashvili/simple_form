import { InputProps } from "@/src/types/inputTypes";
import { ErrorMessage, Field, FormikTouched } from "formik";
import React from "react";

const NormalField = ({
  name,
  customCSS,
  touchedField,
  errorsField,
}: InputProps) => {
  const [fieldActive, setFieldActive] = React.useState<boolean>(false);
  const [fieldValue, setFieldValue] = React.useState<string>("");

  const onBlurHandler = () => {
    if (fieldValue !== "") return;
    setFieldActive(false);
  };

  return (
    <div className="relative">
      <Field
        className={`${customCSS} ${
          touchedField && errorsField ? "border-red-500" : ""
        }`}
        value={fieldValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFieldValue(e.target.value)
        }
        name={name.toLowerCase()}
        label={name.toLowerCase()}
        id={name.toLowerCase()}
        onFocus={() => setFieldActive(true)}
        onBlur={onBlurHandler}
      />
      <label
        id={`${name.toLowerCase()}_lable`}
        htmlFor={name.toLowerCase()}
        className={`absolute top-2 left-2 px-2 duration-200 select-none ${
          fieldActive ? "active" : "normal"
        }`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <ErrorMessage
        name={name.toLowerCase()}
        component={"div"}
        className="absolute top-9 left-2"
      />
    </div>
  );
};

export default NormalField;
