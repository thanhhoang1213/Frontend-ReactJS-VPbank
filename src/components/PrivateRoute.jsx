import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/authSlice";
import UserRoles from "./../constants/role.constant";

function PrivateRoute({ children }) {
  const clientId = localStorage.getItem("x-client-id");
  const auth = useAuth();

  if (!clientId) {
    return <Navigate to={"/login"} replace />;
  }

  if (auth?.user && auth?.user.role === UserRoles.admin) {
    return children;
  }

  return <Navigate to={"/"} replace />;
}

export default PrivateRoute;
