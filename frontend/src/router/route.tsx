import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { SignInPage } from "../pages/sign-in";
import { SignUpPage } from "../pages/sign-up";
import { AuthProvider } from "../context/auth-context";
import ProtectedRoute from "../components/protected-route";
import { DashboardPage } from "../pages/dashboard-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
