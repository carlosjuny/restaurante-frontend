import TemplateWeb from '../../components/public/templates/TemplateWeb'
import TitlePage from '../../components/public/atoms/Title'
import AboutSection_1 from '../../components/public/organisms/sections/AboutSection_1'
import AboutSection_2 from '../../components/public/organisms/sections/AboutSection_2'

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