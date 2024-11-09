import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../atoms/BarraNav'
import BackToTop from '../atoms/BackToTop'
import Card from '../molecules/Card'

const TemplateMenu = () => {
  return (
    <>
    <BarraNav/>
    <Header/>
    <Card />
    <BackToTop/>
    <Footer/>
    </>
  )
}

export default TemplateMenu