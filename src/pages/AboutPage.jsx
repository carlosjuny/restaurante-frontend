import React from 'react'
import TemplateWeb from '../components/template/TemplateWeb'
import TitlePage from '../components/web/atoms/TitlePage'
import AboutSection_1 from '../../src/components/web/molecules/AboutSection_1'
import AboutSection_2 from '../../src/components/web/molecules/AboutSection_2'

const AboutPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Sobre nosotros" />
        <AboutSection_1 />
        <AboutSection_2 />
    </TemplateWeb>
  )
}

export default AboutPage