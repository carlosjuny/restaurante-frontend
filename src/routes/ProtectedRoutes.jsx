import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoutes = ({ children, requiredRole }) => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));

    if (!authUser) {
        return <Navigate to="/" />;
    }

    if (requiredRole && authUser.role !== requiredRole) {
        return <Navigate to="/unauthorized" />;
    }

    return children ? children : <Outlet />;
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node,
    requiredRole: PropTypes.string,
};

export default ProtectedRoutes;
