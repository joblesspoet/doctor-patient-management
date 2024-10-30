"use client";
import { doctors } from "@/app/assets/assets_frontend/assets";
import RelatedDoctors from "@/app/components/doctors/RelatedDoctors";
import { Doctor, PageProps } from "@/app/interfaces/common";
import { DateTimeSlot, generateDateTimeSlots } from "@/app/utils/common";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slots = generateDateTimeSlots();

const AppointmentPage = ({ params }: PageProps) => {
  const { slug } = params;
  const [docInfo, setDocInfo] = useState<Doctor | null>(null);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const handleDaySelect = (selectedDay: number) => {
    setCurrentDayIndex(selectedDay);
    setSelectedSlot(null);
  };

  const handleDayTimeSelect = (item: number) => {
    console.log(item);
    setSelectedSlot(item);
  };

  useEffect(() => {
    const fetchDoc = () => {
      const doctor = doctors.find((doc: Doctor) => doc._id === slug);
      setDocInfo(doctor || null); // Set to null if doctor not found
    };

    fetchDoc();
  }, [slug]);

  if (!docInfo) {
    return <div>Doctor not found</div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <Image
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-800">
            {docInfo.name}
            <Image
              src={require("@assets/assets_frontend/verified_icon.svg")}
              alt="verified"
              className="w-5"
            />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>
          {/* Doctor About */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <Image
                src={require("@assets/assets_frontend/info_icon.svg")}
                alt="doc info"
              />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-600">${docInfo.fees}</span>{" "}
          </p>
        </div>
      </div>

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {slots.map((slot: DateTimeSlot, index: number) => {
            const slotInfo = slot.date.split(" ");
            return (
              <div
                onClick={() => handleDaySelect(index)}
                key={index}
                className={`text-center py-6 px-2 min-w-16 rounded-full cursor-pointer ${
                  index === currentDayIndex
                    ? "bg-primary text-white"
                    : "border border-gray-300"
                }`}
              >
                <p>{slotInfo[0]}</p>
                <p>{slotInfo[1]}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {slots[currentDayIndex].slots.map((slot, sIndex) => {
            return (
              <p
                key={`slot_${sIndex}`}
                onClick={() => handleDayTimeSelect(sIndex)}
                className={`text-sm  font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  sIndex === selectedSlot
                    ? "bg-primary text-white"
                    : "border border-gray-300"
                }`}
              >
                {slot}
              </p>
            );
          })}
        </div>
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
          Book Appointment
        </button>
      </div>
      <RelatedDoctors speciality={docInfo.speciality} docId={docInfo._id} />
    </div>
  );
};

export default AppointmentPage;
