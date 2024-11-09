import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../atoms/BarraNav'
import BackToTop from '../atoms/BackToTop'
import Card from '../molecules/Card'
import ButtonSelect from '../atoms/ButtonSelect'
import styled from 'styled-components'

const Title = styled.h1`
      position: absolute;
      right: 33%;
      font-size: 35px;
      top: 420px;
      z-index: 2;
      color: #E9D282;
  
  @media (min-width: 768px) {
    right: 39%;
  }

  @media (min-width: 1024px) {
    right: 2%;
    font-size: 50px;;
    top: 420px;
  }
`;

const TemplateMenu = () => {
  return (
    <>
    <BarraNav/>
    <Title>Carta Menú</Title>
    <Header/>
    <ButtonSelect />
    <Card />
    <BackToTop/>
    <Footer/>
    </>
  )
}

export default TemplateMenu