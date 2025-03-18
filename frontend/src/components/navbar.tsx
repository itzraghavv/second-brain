import { BrainIcon, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "./button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 sm:p-6 lg:px-12 shadow-sm bg-white">
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold text-gray-900"
      >
        <BrainIcon className="size-8 text-indigo-600" />
        Second Brain
      </Link>

      <div className="hidden sm:flex gap-4">
        <Button
          variant="secondary"
          size="md"
          text="Sign In"
          onClick={() => {
            navigate("/sign-in");
          }}
        />
        <Button
          variant="primary"
          size="md"
          text="Sign Up"
          onClick={() => {
            navigate("/sign-up");
          }}
        />
      </div>

      <button
        className="sm:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="size-6" />
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 flex flex-col gap-2 sm:hidden z-10">
          <Button
            variant="secondary"
            size="md"
            text="Sign In"
            onClick={() => {}}
          />
          <Button
            variant="primary"
            size="md"
            text="Sign Up"
            onClick={() => {}}
          />
        </div>
      )}
    </nav>
  );
};
