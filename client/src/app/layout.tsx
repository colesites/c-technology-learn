import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "C Tech Learn",
    template: "C Tech Learn - %s",
    absolute: "",
  },
  description: "",
};

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} root-scrollbar antialiased`}>
        {children}
      </body>
    </html>
  );
}
