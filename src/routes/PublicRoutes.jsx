import HomePage from '../pages/public/HomePage';
import MenuPage from '../pages/public/MenuPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import PromotionPage from '../pages/public/PromotionPage';
import AdminPage from '../pages/admin/AdminPage';


const PublicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "menu", element: <MenuPage /> },
    { path: "sobrenosotros", element: <AboutPage /> },
    { path: "promociones", element: <PromotionPage /> },
    { path: "contacto", element: <ContactPage /> },
    { path: "admin", element: <AdminPage /> }
]

export default PublicRoutes
