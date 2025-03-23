import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "black";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const buttonVariants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 hover:cursor-pointer text-white font-medium",
  secondary:
    "bg-indigo-200 text-indigo-600 hover:bg-indigo-300 hover:cursor-pointer text-indigo-600 font-medium",
  black:
    "text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
};

const sizeVariants = {
  sm: "px-4 py-1 rounded-sm",
  md: "p-2 md:px-6 md:py-2 rounded-md",
  lg: "px-8 py-3 rounded-lg",
};

export const Button = ({
  variant,
  size,
  text,
  startIcon,
  className,
  onClick,
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonVariants[variant]} ${sizeVariants[size]} ${className} flex text-sm md:text-lg md:font-normal justify-center items-center`}
      disabled={loading}
    >
      <div className="mr-2">{startIcon}</div>
      {text}
    </button>
  );
};
