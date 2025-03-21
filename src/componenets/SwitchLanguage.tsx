import React from "react";

import { CiGlobe } from "react-icons/ci";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";

const SwitchLanguage = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  console.log(currentLocale);
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="language" className="cursor-pointer p-2 rounded-xl">
        <CiGlobe className="text-2xl" />
      </label>
      <select
        id="language"
        className="bg-white rounded-xl"
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
