import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flext flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <Image
            src={require("@assets/assets_frontend/logo.svg")}
            alt="footer logo"
            className="mb-5 w-40"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl mb-5 font-medium text-gray-600">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl mb-5 font-medium text-gray-600">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-222-456-7890</li>
            <li>test@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-gray-600 py-5 text-sm text-center">
          Copyright 2024@ - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
