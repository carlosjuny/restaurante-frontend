import TemplateWeb from '../components/template/TemplateWeb'
import TitlePage from '../components/web/atoms/TitlePage'
import MenuSection_1 from '../components/web/molecules/MenuSection_1'

const MenuPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Carta menú" />
        <MenuSection_1 />
    </TemplateWeb>
  )
}

export default MenuPage
