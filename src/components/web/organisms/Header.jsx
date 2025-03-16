import Navbar from '../molecules/Navbar';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// import Slide1 from '../../../assets/image/slider_image_1.jpg';
// import Slide2 from '../../../assets/image/slider_image_2.jpg';
// import MenuBanner1 from '../../../assets/image/menu_section_1.jpg';
// import MenuBanner2 from '../../../assets/image/menu_section_2.jpg';
// import AboutBanner from '../../../assets/image/about_restaurant.jpg';
// import AboutBanner2 from '../../../assets/image/about_restaurant_2.jpg';
// import ContactBanner from '../../../assets/image/contact_section_1.jpg';
// import PromotionBanner from '../../../assets/image/promotion_section_1.jpg';
// import BannerSlider from '../atoms/BannerSlider';
import BarraNav from '../atoms/BarraNav';
import Input from '../atoms/Input';
import promoVideo from '../../../assets/video/Video-Promocional.mp4'
import Text from '../atoms/Text';

const StyleHeader = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const VideoBanner = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.548);
  z-index: 0;
`;

const Textstyle = styled(Text)`
  width: 100%;
  position: absolute;
  z-index: 2;
  background: none;
  font-size: 30px;
  text-align: center;
  top: 50%;
  h1 {
    margin-bottom: 60px;
    line-height: 60px;
    font-weight: 100;
  }
`

const Header = () => {

  // const location = useLocation();

  // // Define los conjuntos de imágenes para cada vista
  // const imagesInicio = [Slide1, Slide2];
  // const imagesMenu = [MenuBanner1, MenuBanner2];
  // const imagesAbout = [AboutBanner, AboutBanner2];
  // const imagesContact = [ContactBanner, Slide2];
  // const imagesPromotion = [PromotionBanner, Slide2];

  // const images = 
  //   location.pathname === '/menu' ? imagesMenu :
  //   location.pathname === '/sobrenosotros' ? imagesAbout :
  //   location.pathname === '/contacto' ? imagesContact :
  //   location.pathname === '/promociones' ? imagesPromotion :
  //   imagesInicio;

  return (
    <StyleHeader>
      <BarraNav />
      <Navbar />
      {/* Pasa el conjunto de imágenes al slider */}
      {/* <BannerSlider images={images} /> */}
      <Textstyle>
        <h1>Bienvenido al</h1>
        <h1>Restaurante La Dicha</h1>
      </Textstyle>
      <VideoBanner autoPlay loop muted playsInline>
        <source src={promoVideo} type="video/mp4" />
      </VideoBanner>
      <Background />
      <Input onChange={(e) => console.log(e.target.value)}/>
    </StyleHeader>
  );
};

export default Header;
