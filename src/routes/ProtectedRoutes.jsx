import { Navigate } from "react-router-dom";
import PropsTypes from 'prop-types'

const ProtectedRoutes = ({ children }) => {
    const isAutenticated = localStorage.getItem('token');
    return isAutenticated ? children : <Navigate to="/login" />;
}

ProtectedRoutes.propTypes = {
    children: PropsTypes.element.isRequired
}

export default ProtectedRoutes;