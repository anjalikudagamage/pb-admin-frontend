import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpPage from "../components/pages/SignUpPage/index.tsx";
import ForgotPasswordPage from "../components/pages/ForgetPasswordPage/index.tsx";
import LoginPage from "../components/pages/LoginPage";
import { ROUTES } from "../constants/routeConstants.ts";
import AdminDashboard from "../components/pages/adminDashboard";
import PhotographerDetails from "../components/pages/PhotogrpaherDetails/index.tsx";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.PASSWORD} element={<ForgotPasswordPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/details" element={<PhotographerDetails />} />
          <Route path={ROUTES.ADMIN} element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
