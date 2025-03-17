import TemplateWeb from '../../components/public/templates/TemplateWeb'
import TitlePage from '../../components/public/atoms/Title'
import HomeSection_1 from '../../components/public/organisms/sections/HomeSection_1'
import HomeSection_2 from '../../components/public/organisms/sections/HomeSection_2'
import HomeSection_3 from '../../components/public/organisms/sections/HomeSection_3'
import HomeSection_4 from '../../components/public/organisms/sections/HomeSection_4'

const HomePage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Inicio" />
        <HomeSection_1 />
        <HomeSection_2 />
        <HomeSection_3 />
        <HomeSection_4 />
    </TemplateWeb>
  )
}

export default HomePage
