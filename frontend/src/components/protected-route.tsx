import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="sign-in" />;
};

export default ProtectedRoute;
