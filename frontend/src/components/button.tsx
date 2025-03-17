import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "black";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  className?: string;
  onClick?: () => void;
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
  md: "px-6 py-2 rounded-md",
  lg: "px-8 py-3 rounded-lg",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${buttonVariants[props.variant]} ${
        sizeVariants[props.size]
      } ${props.className} flex justify-center items-center`}
    >
      {props.startIcon} {props.text}
    </button>
  );
};
