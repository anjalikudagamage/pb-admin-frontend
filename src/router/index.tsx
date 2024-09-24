import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "../components/pages/SignUpPage/index.tsx";
import { ROUTES } from "../constants/routeConstants.ts";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
