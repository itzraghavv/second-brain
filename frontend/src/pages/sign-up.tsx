import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../components/button";
import { signUp } from "../services/auth-services";
import { Input } from "../components/input";

export const SignUpPage = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;

    signUp(username, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="mt-2 text-gray-600">
              Join Second Brain and organize your digital life
            </p>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Enter username"
              reference={usernameRef}
            />
            <Input
              type="email"
              placeholder="Enter email"
              reference={emailRef}
            />
            <Input
              type="password"
              placeholder="Enter password"
              reference={passwordRef}
            />

            <Button
              variant="primary"
              size="md"
              text="Sign Up"
              className="w-full"
              onClick={handleSubmit}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
