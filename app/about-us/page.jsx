import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col my-10 md:flex-row gap-12">
        <Image
          src={require("@assets/assets_frontend/about_image.png")}
          className="w-full md:max-w-[360px]"
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:2-3/4 text-sm text-gray-600">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <b>Our Vision</b>
          <p>
            In an increasingly digital world, the medical field has made immense
            strides in integrating technology to improve patient care and
            streamline healthcare processes. Our vision for the Patient-Doctor
            Management System is to harness the power of innovation and
            connectivity, aiming to provide a seamless, secure, and
            user-friendly experience for both patients and healthcare providers.
            This system is designed to foster better relationships, ensure
            reliable access to healthcare, and enhance the overall patient
            journey through every phase of their medical care.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficency:</b>
          <p>
            Streamlined Appointment Scheduling That Fits Into Your Busy
            Lifestyle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a netwrok of healthcare providers in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>
            Tailored Recommendations And Reminders To Help You stay on Top Of
            Your Health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
