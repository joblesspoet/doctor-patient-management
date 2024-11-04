"use client"; // This marks the component as a client-side component

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Use usePathname for App Router
import { logout } from "@/app/actions/auth";

type NavbarProps = {
  user: any | null;
};
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // State for dropdown visibility

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logoutUser = async () => {
    const resp = await logout();
    if (resp.msg === "success") {
      router.replace("/");
    }
  };

  console.log(user);
  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
      <Image
        className="w-44 cursor-pointer"
        alt="App Logo"
        src={require("@assets/assets_frontend/logo.svg")}
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <Link href={"/"}>
          <li className="py-1">
            Home
            <hr
              className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                isActive("/") ? "block" : "hidden"
              }`}
            />
          </li>
        </Link>
        <Link href={"/doctors"}>
          <li className="py-1">
            All Doctors
            <hr
              className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                isActive("/doctors") ? "block" : "hidden"
              }`}
            />
          </li>
        </Link>
        <Link href={"/about-us"}>
          <li className="py-1">
            About
            <hr
              className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                isActive("/about-us") ? "block" : "hidden"
              }`}
            />
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="py-1">
            Contact
            <hr
              className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                isActive("/contact") ? "block" : "hidden"
              }`}
            />
          </li>
        </Link>
      </ul>
      <div className="flex items-center gap-4">
        {user !== null ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <Image
              alt="User Name"
              src={require("@assets/assets_frontend/profile_pic.png")}
              className="w-8 rounded-full"
            />
            <Image
              alt="Menu"
              src={require("@assets/assets_frontend/dropdown_icon.svg")}
              className="w-2.5"
            />

            {/* Dropdown Menu */}

            <div className="absolute right-0 top-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p4">
                <ul className="py-1">
                  <li>
                    <Link
                      href="/profile/me"
                      className="block px-4 py-2 hover:text-black cursor-pointer"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/option2"
                      className="block px-4 py-2 hover:text-black cursor-pointer"
                    >
                      My Appointments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={logoutUser}
                      className="block px-4 py-2 hover:text-black cursor-pointer"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link
            href="/auth/signup"
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
