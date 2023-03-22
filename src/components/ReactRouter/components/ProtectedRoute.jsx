import { Navigate } from "react-router-dom";
import { auth } from "../auth";

const ProtectedRoute = ({ children }) =>
  auth.isAuthenticated() ? children : <Navigate replace to="/" />;

export default ProtectedRoute;
