import TemplateWeb from '../../components/public/templates/TemplateWeb'
import TitlePage from '../../components/public/atoms/Title'
import PromotionsSection_1 from '../../components/public/organisms/sections/PromotionsSection_1'

const PromotionPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Promociones" />
        <PromotionsSection_1 />
    </TemplateWeb>
  )
}

export default PromotionPage