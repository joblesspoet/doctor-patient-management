import React from "react";

type FormButtonProps = {
  title: string;
  isLoading?: boolean;
};

const FormButton: React.FC<FormButtonProps> = ({ title, isLoading }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-primary text-white w-full py-2 rounded-md text-base"
    >
      {isLoading ? "Submitting..." : title}
    </button>
  );
};

export default FormButton;
