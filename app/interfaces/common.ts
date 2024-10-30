import { StaticImageData } from "next/image";

export interface PageProps {
  params: {
    slug: string;
  };
}

export interface Doctor {
  _id: string;
  name: string;
  image: string | StaticImageData; // Adjust if `image` is sometimes a different type, e.g., `string | StaticImageData`
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: Address;
}

type Address = {
  line1: string;
  line2: string;
};

export interface DoctorProps extends Doctor {
  clickHandler?: (id: string) => void;
}

export interface RelatedDoctorsProps {
  speciality: string;
  docId: string;
}
export interface DoctorsListingProps {
  doctors: Doctor[] | [];
  clickHandler?: (id: string) => void;
}
