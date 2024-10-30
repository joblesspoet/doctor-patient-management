import React from "react";
import { Doctor, RelatedDoctorsProps } from "@/app/interfaces/common";
import DoctorsListing from "./DoctorsListing";
import { doctors } from "@/app/assets/assets_frontend/assets";

const RelatedDoctors: React.FC<RelatedDoctorsProps> = ({
  speciality,
  docId,
}) => {
  const relatedDoctors = doctors.filter(
    (doctor: Doctor) => doctor._id !== docId && doctor.speciality === speciality
  );

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        <DoctorsListing doctors={relatedDoctors} />
      </div>
    </div>
  );
};

export default RelatedDoctors;
