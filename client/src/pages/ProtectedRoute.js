import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ element }) {
  const { loggedIn } = useAuth();
  console.log(loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
