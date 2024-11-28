import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuthContext();
  return auth ? <>{children}</> : <Navigate to="/login" />;
}
