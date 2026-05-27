import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const token = localStorage.getItem("token");

  const isAuthenticated = !!token;

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  );
};

export default PublicGuard;