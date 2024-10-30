import React from "react";
import DoctorCard from "../cards/DoctorCard";
import { Doctor, DoctorsListingProps } from "@/app/interfaces/common";

const DoctorsListing: React.FC<DoctorsListingProps> = ({
  doctors,
  clickHandler,
}) => {
  return (
    <React.Fragment>
      {doctors.map((doctor: Doctor) => {
        return (
          <DoctorCard
            key={`doctor_${doctor._id}`}
            {...doctor}
            clickHandler={clickHandler}
          />
        );
      })}
    </React.Fragment>
  );
};

export default DoctorsListing;
