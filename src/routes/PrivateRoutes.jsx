import AdminPage from '../pages/admin/AdminPage';
import MesasTables from '../pages/admin/modules/Mesas/MesasTables';

const PrivateRoutes = [
    { path: "/admin", element: <AdminPage /> },
    { path: "/admin/mesas", element: <MesasTables /> },
];

export default PrivateRoutes;
