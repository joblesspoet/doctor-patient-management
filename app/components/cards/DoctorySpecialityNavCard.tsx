import React from "react";

type DoctorySpecialityNavCardProps = {
  title: string;
  slug: string;
  isSelected?: boolean;
  onItemClick?: (item: string) => void;
};
const DoctorySpecialityNavCard: React.FC<DoctorySpecialityNavCardProps> = ({
  title,
  slug,
  isSelected = false,
  onItemClick,
}) => {
  const clickHandler = () => {
    if (onItemClick) {
      onItemClick(slug);
    }
  };
  return (
    <p
      onClick={clickHandler}
      className={`
      ${isSelected ? "bg-indigo-100 text-black"  : ""}
        w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
    >
      {title}
    </p>
  );
};

export default DoctorySpecialityNavCard;
