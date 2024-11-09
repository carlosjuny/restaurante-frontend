import React from 'react';
import Navbar from '../molecules/Navbar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Slide from '../../assets/image/slider_image_1.jpg';
import MenuBanner from '../../assets/image/slider_image_2.jpg';
import Banner from '../atoms/Banner';

const StyleHeader = styled.div`
  /* width: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`;

const Header = () => {
  const location = useLocation();
  
  // Determine the background image based on the current route
  const backgroundImage = location.pathname === '/menu' ? MenuBanner : Slide;

  return (
    <StyleHeader bgImage={backgroundImage}>
      <Navbar />
      <Banner />
    </StyleHeader>
  );
};

export default Header;
