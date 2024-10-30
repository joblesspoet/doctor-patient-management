"use client";
import React from "react";
import { doctors } from "@assets/assets_frontend/assets";
import DoctorCard from "@components/cards/DoctorCard";
import { useRouter } from "next/navigation";

const DoctorPage = () => {
  const router = useRouter();

  const handleDoctorClick = (id: string) => {
    router.push(`/doctors/appointment/${id}`);
  };

  return (
    <div>
      <p className="text-gray-600 ">Browse through the doctors specialist.</p>
      <div className="flex flex-row items-start gap-5 mt-5">
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {doctors.map((doctor: any) => {
            return (
              <DoctorCard
                key={`doctor_${doctor._id}`}
                {...doctor}
                clickHandler={handleDoctorClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
