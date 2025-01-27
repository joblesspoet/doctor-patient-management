import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

type AddressObject = {
  line1: string;
  line2: string;
};

type DoctorProps = {
  _id: string;
  name: string;
  image: string; // Assuming image is a URL string for Next.js's Image component
  speciality: string;
  degree?: string;
  experience?: string;
  about?: string;
  fees?: number;
  address?: AddressObject | null;
};

const DoctorCard: React.FC<DoctorProps> = ({
  _id,
  name,
  image,
  speciality,
  degree,
  experience,
  about,
  fees,
  address,
}) => {
  return (
    <div
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
      key={`doctor_list_item_${_id}`}
    >
      <Image
        src={image}
        alt={name}
        id={_id}
        className="bg-blue-50 w-full"
        height={200}
      />{" "}
      {/* Adjust width/height as needed */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
          <p>Available</p>
        </div>
        <p className="text-gray-900 text-lg font-medium">{name}</p>
        <p className="text-gray-600 text-sm">{speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
