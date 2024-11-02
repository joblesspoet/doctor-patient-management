import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { getUser } from "./lib/dal";

export const metadata: Metadata = {
  title: "App Home",
  description: "Patient Doctor Management System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  console.log(user);
  return (
    <html lang="en">
      <body className={`mx-4 sm:mx-[10%]`}>
        <Navbar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
