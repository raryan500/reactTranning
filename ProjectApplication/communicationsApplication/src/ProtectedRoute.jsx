import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("logedinUser"); 

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
