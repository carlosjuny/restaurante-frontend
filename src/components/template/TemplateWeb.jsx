import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Section1 from '../molecules/Section1'
import Section2 from '../molecules/Section2'
import Section3 from '../molecules/Section3'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from '../atoms/BarraNav'
import BackToTop from '../atoms/BackToTop'
import SliderPromo from '../molecules/SliderPromo'
import Input from '../atoms/Input'

const TemplateWeb = () => {
  return (
    <>
    <BarraNav/>
    <Header/>
    <Input />
    <Section1/>
    <Section2/>
    <Section3/>
    <BackToTop/>
    <SliderPromo />
    <Footer/>
    </>
  )
}

export default TemplateWeb