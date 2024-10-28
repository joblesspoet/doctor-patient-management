import React from "react";
import { specialityData } from "@assets/assets_frontend/assets";
import Link from "next/link";
import Image from "next/image";
const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through out extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item) => {
          return (
            <Link
              href={`/doctors/speciality/${item.speciality}`}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] duration-500"
            >
              <Image
                src={item.image}
                className="w-16 sm:w-24 mb-2"
                alt={item.speciality}
              />
              <p className="text-center">{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;