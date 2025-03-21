import AdminPage from '../pages/admin/AdminPage';
import AdminPageProduct from '../pages/admin/AdminPageProduct';
import MesasTables from '../pages/admin/modules/Mesas/MesasTables';

const PrivateRoutes = [
    { path: "/admin", element: <AdminPage /> },
    { path: "/admin/mesas", element: <MesasTables /> },
    { path: "/product", element: <AdminPageProduct /> },    
];

export default PrivateRoutes;
