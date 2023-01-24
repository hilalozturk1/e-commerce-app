import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedAdminRoute() {
  const { loggedIn, user } = useAuth();
  console.log("userrrr", user);
  console.log("loddedinnnn", loggedIn);
  return loggedIn && user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedAdminRoute;
