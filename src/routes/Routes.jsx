import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
        {/* Rutas públicas (sin protección) */}
        {PublicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* Rutas privadas (requieren autenticación) */}
        {PrivateRoutes.map((route, index) => (
            <Route 
                key={index} 
                path={route.path} 
                element={
                    <ProtectedRoutes >
                        {route.element}
                    </ProtectedRoutes>
                } 
            />
        ))}
    </Routes>
  );
}

export default AppRoutes;
