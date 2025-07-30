import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
