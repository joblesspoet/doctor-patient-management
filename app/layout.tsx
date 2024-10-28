import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/navbar/Navbar";

export const metadata: Metadata = {
  title: "App Home",
  description: "Patient Doctor Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-4 sm:mx-[10%]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
