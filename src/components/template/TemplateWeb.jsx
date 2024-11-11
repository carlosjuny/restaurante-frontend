import React from 'react'
import Header from '../web/organisms/Header'
import Footer from '../web/organisms/Footer'
import HomeSection_1 from '../web/molecules/HomeSection_1'
import HomeSection_2 from '../web/molecules/HomeSection_2'
import HomeSection_3 from '../web/molecules/HomeSection_3'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../web/atoms/BarraNav'
import BackToTop from '../web/atoms/BackToTop'
import SliderPromotion from '../web/molecules/SliderPromotion'
import Input from '../web/atoms/Input'
import styled from 'styled-components'


const Title = styled.h1`
      position: absolute;
      right: 42%;
      font-size: 35px;
      top: 420px;
      z-index: 2;
      color: #E9D282;

  @media (min-width: 768px) {
    right: 45%;
  }

  @media (min-width: 1024px) {
    right: 5%;
    font-size: 50px;;
    top: 420px;
  }
`;

const TemplateWeb = () => {
  return (
    <>
    <BarraNav/>
    <Title>Inicio</Title>
    <Header/>
    <Input />
    <HomeSection_1/>
    <HomeSection_2/>
    <HomeSection_3/>
    <BackToTop/>
    <SliderPromotion />
    <Footer/>
    </>
  )
}

export default TemplateWeb