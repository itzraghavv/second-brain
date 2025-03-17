import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "../services/auth-services";
import { useAuth } from "../context/auth-context";
import { Button } from "../components/button";
import { Input } from "../components/input";

export const SignInPage = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const response = await signIn(username, password);
    localStorage.setItem("token", response.token);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="mt-2 text-gray-600">Welcome back to Second Brain</p>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Enter username"
              reference={usernameRef}
            />
            <Input
              type="password"
              placeholder="Enter password"
              reference={passwordRef}
            />

            <Button
              variant="primary"
              size="md"
              text="Sign In"
              className="w-full"
              onClick={handleSubmit}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
