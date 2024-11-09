import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Section1 from '../molecules/Section1'
import Section2 from '../molecules/Section2'
import Section3 from '../molecules/Section3'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../atoms/BarraNav'
import BackToTop from '../atoms/BackToTop'
import SliderPromotion from '../molecules/SliderPromotion'
import Input from '../atoms/Input'
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
    <Section1/>
    <Section2/>
    <Section3/>
    <BackToTop/>
    <SliderPromotion />
    <Footer/>
    </>
  )
}

export default TemplateWeb