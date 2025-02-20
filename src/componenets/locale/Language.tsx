"use client";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

export const Language = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <>
      <p>Current locale: {t("lang")}</p>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("ka")}>ქართული</button>
    </>
  );
};
