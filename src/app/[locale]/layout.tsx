// app/[locale]/client/layout.tsx
import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import "./globals.css";

export default async function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>
          <main className="w-screen h-screen flex justify-center items-center bg-background relative">
            {children}
          </main>
        </I18nProviderClient>
      </body>
    </html>
  );
}
