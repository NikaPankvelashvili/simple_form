import React from "react";

import { CiGlobe } from "react-icons/ci";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";

const SwitchLanguage = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  console.log(currentLocale);
  return (
    <div className="absolute top-0 right-0 m-6 bg-main flex rounded-xl">
      <label htmlFor="language" className="cursor-pointer p-2 rounded-xl">
        <CiGlobe className="text-2xl" />
      </label>
      <select
        id="language"
        className="bg-main rounded-xl"
        onChange={(e) => changeLocale(e.target.value as "en" | "ka")}
        value={currentLocale}
      >
        <option value="en">English</option>
        <option value="ka">ქართული</option>
      </select>
    </div>
  );
};

export default SwitchLanguage;
