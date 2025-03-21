import HomePage from '../pages/public/HomePage';
import MenuPage from '../pages/public/MenuPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import PromotionPage from '../pages/public/PromotionPage';

import AdminPage from '../pages/admin/AdminPage';
import MesasTables from '../pages/admin/modules/Mesas/MesasTables';
import AdminPageProduct from '../pages/admin/AdminPageProduct';
// import ClientTable from '../pages/admin/modules/admin/MesasTables';


const PublicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/menu", element: <MenuPage /> },
    { path: "/sobrenosotros", element: <AboutPage /> },
    { path: "/promociones", element: <PromotionPage /> },
    { path: "/contacto", element: <ContactPage /> },
    { path: "/admin", element: <AdminPage /> },
    { path: "/product", element: <AdminPageProduct /> },
    { path: "/admin/mesas", element: <MesasTables /> },
    // { path: "/admin/clientes", element: <ClientTable /> },
]

export default PublicRoutes
