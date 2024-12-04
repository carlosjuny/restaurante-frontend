import Navbar from '../molecules/Navbar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Slide1 from '../../../assets/image/slider_image_1.jpg';
import Slide2 from '../../../assets/image/slider_image_2.jpg';
import MenuBanner1 from '../../../assets/image/menu_section_1.jpg';
import MenuBanner2 from '../../../assets/image/menu_section_2.jpg';
import AboutBanner from '../../../assets/image/about_restaurant.jpg';
import AboutBanner2 from '../../../assets/image/about_restaurant_2.jpg';
import ContactBanner from '../../../assets/image/contact_section_1.jpg';
import BannerSlider from '../atoms/BannerSlider';
import BarraNav from '../atoms/BarraNav';
import Input from '../atoms/Input';

const StyleHeader = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = () => {
  const location = useLocation();

  // Define los conjuntos de imágenes para cada vista
  const imagesInicio = [Slide1, Slide2];
  const imagesMenu = [MenuBanner1, MenuBanner2];
  const imagesAbout = [AboutBanner, AboutBanner2];
  const imagesContact = [ContactBanner, Slide2];
  const imagesPromotion = [ContactBanner, Slide2];

  const images = 
    location.pathname === '/menu' ? imagesMenu :
    location.pathname === '/sobrenosotros' ? imagesAbout :
    location.pathname === '/contacto' ? imagesContact :
    location.pathname === '/promociones' ? imagesPromotion :
    imagesInicio;

  return (
    <StyleHeader>
      <BarraNav />
      <Navbar />
      {/* Pasa el conjunto de imágenes al slider */}
      <BannerSlider images={images} />
      <Input />
    </StyleHeader>
  );
};

export default Header;
