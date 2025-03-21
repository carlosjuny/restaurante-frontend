import HomePage from '../pages/public/HomePage';
import MenuPage from '../pages/public/MenuPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import PromotionPage from '../pages/public/PromotionPage';
import LoginPage from '../pages/public/LoginPage';

const PublicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/menu", element: <MenuPage /> },
    { path: "/sobrenosotros", element: <AboutPage /> },
    { path: "/promociones", element: <PromotionPage /> },
    { path: "/contacto", element: <ContactPage /> },
    { path: "/login", element: <LoginPage /> },

];

export default PublicRoutes;
