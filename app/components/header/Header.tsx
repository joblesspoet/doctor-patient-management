import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br /> With Trusted Dctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <Image
            alt="Group Profiles"
            src={require("@assets/assets_frontend/group_profiles.png")}
            className="w-28"
            width={100}
            height={100}
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> shedule
          </p>
        </div>
        <Link
          href="/appointment"
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <Image
            alt="User Name"
            src={require("@assets/assets_frontend/arrow_icon.svg")}
            className="w-4 rounded-full"
          />
        </Link>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative ">
        <Image
          alt="User Name"
          src={require("@assets/assets_frontend/header_img.png")}
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
