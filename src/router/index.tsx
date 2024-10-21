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
import AdminLogin from "../components/pages/AdminLogin/index.tsx";
import { ROUTES } from "../constants/routeConstants.ts";
import BookingTable from "../components/pages/RequestManagement/index.tsx";
import PhotographerDetailsPage from "../components/pages/PhotographerPage/index.tsx";
import AdminDashboard from "../components/pages/adminDashboard";
import { useSelector } from "react-redux"; // Assuming you're using Redux

// PrivateRoute component to protect routes
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated); // Check auth state

  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.ADMINLOGIN} element={<AdminLogin />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.PASSWORD} element={<ForgotPasswordPage />} />
        
        {/* Protected Routes */}
        <Route
          path={ROUTES.REQUEST}
          element={
            <PrivateRoute>
              <BookingTable />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.PHOTOGRAPHER}
          element={
            <PrivateRoute>
              <PhotographerDetailsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
