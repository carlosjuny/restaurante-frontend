import React from 'react'
import Header from '../web/organisms/Header'
import Footer from '../web/organisms/Footer'
import BarraNav from '../web/atoms/BarraNav'
import BackToTop from '../web/atoms/BackToTop'
import styled from 'styled-components'

const Title = styled.h1`
      position: absolute;
      right: 28%;
      font-size: 35px;
      top: 420px;
      z-index: 2;
      color: #E9D282;
  
  @media (min-width: 768px) {
    right: 36%;
  }

  @media (min-width: 1024px) {
    right: 2%;
    font-size: 50px;;
    top: 420px;
  }
`

const TemplateContact = () => {
  return (
    <>
    <BarraNav/>
    <Title>Contacto</Title>
    <Header/>
    <BackToTop/>
    <Footer/>
    </>
  )
}

export default TemplateContact