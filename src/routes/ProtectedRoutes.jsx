import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import storage from "../Storage/Storage";

const ProtectedRoutes = ({ children }) => {
    const authUser = storage.get("authUser");

    if (!authUser) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />;
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoutes;
