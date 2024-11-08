// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust the import according to your store file

const ProtectedRoute: React.FC = () => {
  // Check if the user is authenticated (update this based on your Redux state)
  const isAuthenticated = useSelector(
    (state: RootState) => state.photographer.user
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
