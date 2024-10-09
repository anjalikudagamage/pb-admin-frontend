import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpPage from "../components/pages/SignUpPage/index.tsx";
import ForgotPasswordPage from "../components/pages/ForgetPasswordPage/index.tsx";
import LoginPage from "../components/pages/SignUpPage/index.tsx";
import { ROUTES } from "../constants/routeConstants.ts";
import BookingTable from "../components/pages/RequestManagement/index.tsx";
import AdminDashboard from "../components/pages/adminDashboard"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={ROUTES.REQUEST} element={<BookingTable />} />
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
