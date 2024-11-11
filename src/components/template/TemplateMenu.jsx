import React from 'react'
import Header from '../web/organisms/Header'
import Footer from '../web/organisms/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../web/atoms/BarraNav'
import BackToTop from '../web/atoms/BackToTop'
import Card from '../web/molecules/Card'
import ButtonSelect from '../web/atoms/ButtonSelect'
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