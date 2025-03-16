import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const isAuthenticated = !!token;

  const login = (newToken: string) => {
    setToken(newToken);
    navigate("/dashboard");
  };

  const logout = () => {
    setToken(null);
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within the auth provider ");
  }
  return context;
};
