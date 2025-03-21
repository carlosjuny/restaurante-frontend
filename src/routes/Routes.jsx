import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import ProtectedRoutes from './ProtectedRoutes';
// import mesasRoutes from '../pages/admin/modules/Mesas/MesasTables';
import axios from 'axios';

window.axios = axios

window.axios.defaults.baseURL = 'http://localhost:8000/api'
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

const AppRoutes = () => {
  return (
    <Routes>
        {PublicRoutes.map((route, index) =>(
            <Route key={index} path={route.path} element={route.element} />
        ))}
        {[...PrivateRoutes].map((route, index) =>(
            <Route key={index} path={route.path} element={<ProtectedRoutes>{route.element}</ProtectedRoutes>} />
        ))}
        {/* {[...mesasRoutes].map((route, index)=>
          <Route key={index} path={route.path} element={<ProtectedRoutes>{route.element}</ProtectedRoutes>}>
          </Route>
        )} */}
    </Routes>
  )
}

export default AppRoutes