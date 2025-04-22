import "../globals.css";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "C Tech Learn - %s",
    absolute: "",
  },
  description: "Welcome to C Tech Learn, A Place to learn, front-end, back-end, and full stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <NavBar />
          {children}
        <Footer />
      </div>
  );
}
