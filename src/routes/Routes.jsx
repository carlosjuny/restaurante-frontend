import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
        {PublicRoutes.map((route, index) =>(
            <Route key={index} path={route.path} element={route.element} />
        ))}
        {PrivateRoutes.map((route, index) =>(
            <Route key={index} path={route.path} element={<ProtectedRoutes>{route.element}</ProtectedRoutes>} />
        ))}
    </Routes>
  )
}

export default AppRoutes