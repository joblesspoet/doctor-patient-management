"use client";
import DoctorySpecialityNavCard from "@/app/components/cards/DoctorySpecialityNavCard";
import DoctorsListing from "@/app/components/doctors/DoctorsListing";
import { PageProps } from "@/app/interfaces/common";
import { doctors, specialityData } from "@assets/assets_frontend/assets";
import DoctorCard from "@components/cards/DoctorCard";
import { useRouter } from "next/navigation";
import React from "react";

const DoctorSpecialityPage = ({ params }: PageProps) => {
  const { slug } = params;
  const router = useRouter();

  const filtersDoc = doctors.filter(
    (doctor: any) => doctor.speciality.toLowerCase() === slug.toLowerCase()
  );

  const handleSpecialityClick = (newSpeciality: string) => {
    router.push(`/doctors/speciality/${newSpeciality.toLowerCase()}`);
  };

  const handleDoctorClick = (id: string) => {
    router.push(`/doctors/appointment/${id}`);
  };

  return (
    <div>
      <p className="text-gray-600 ">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialityData.map((speciality: any) => {
            return (
              <DoctorySpecialityNavCard
                key={speciality.slug}
                slug={speciality.slug}
                title={speciality.speciality}
                onItemClick={handleSpecialityClick}
                isSelected={
                  speciality.slug.toLowerCase() === slug.toLowerCase()
                }
              />
            );
          })}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          <DoctorsListing
            doctors={filtersDoc}
            clickHandler={handleDoctorClick}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorSpecialityPage;
