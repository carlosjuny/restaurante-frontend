import React from 'react'
import TemplateWeb from '../components/template/TemplateWeb'
import TitlePage from '../components/web/atoms/TitlePage'
import HomeSection_1 from '../../src/components/web/molecules/HomeSection_1'
import HomeSection_2 from '../../src/components/web/molecules/HomeSection_2'
import HomeSection_3 from '../../src/components/web/molecules/HomeSection_3'
import SliderPromotion from '../../src/components/web/molecules/SliderPromotion'

const HomePage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Inicio" />
        <HomeSection_1 />
        <HomeSection_2 />
        <HomeSection_3 />
        <SliderPromotion />
    </TemplateWeb>
  )
}

export default HomePage
