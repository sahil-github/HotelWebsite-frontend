import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const token = localStorage.getItem("token");

  const isAuthenticated = !!token;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default AuthGuard;