import { seekRoute } from "/src/routes/config";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardedRoute() {
  const isAuthenticated = Boolean(localStorage.getItem("user_id"));
  return isAuthenticated ? <Outlet /> : <Navigate to={seekRoute("login")} replace />;
}
