import { InputProps } from "@/src/types/inputTypes";
import { ErrorMessage, Field } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordField = ({
  name,
  customCSS,
  touchedField,
  errorsField,
}: InputProps) => {
  const [fieldValue, setFieldValue] = useState<string>("");
  const [fieldActive, setFieldActive] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const classnames = {
    eyeIcon: "absolute cursor-pointer text-black top-2 right-2",
  };

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
        type={showPassword ? "text" : "password"}
        id={name.toLowerCase()}
        onFocus={() => setFieldActive(true)}
        onBlur={onBlurHandler}
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
        id={`${name.toLowerCase()}_lable`}
        htmlFor={name.toLowerCase()}
        className={`absolute top-2 left-2 duration-200 select-none ${
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

export default PasswordField;
