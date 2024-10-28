import React from "react";

type DoctorySpecialityNavCardProps = {
  title: string;
  onItemClick?: (item: string) => void;
};
const DoctorySpecialityNavCard: React.FC<DoctorySpecialityNavCardProps> = ({
  title,
  onItemClick,
}) => {
  const clickHandler = () => {
    if (onItemClick) {
      onItemClick(title);
    }
  };
  return (
    <p
      onClick={clickHandler}
      className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
    >
      {title}
    </p>
  );
};

export default DoctorySpecialityNavCard;
