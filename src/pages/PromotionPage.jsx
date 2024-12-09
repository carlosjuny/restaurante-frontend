import TemplateWeb from '../components/template/TemplateWeb'
import TitlePage from '../components/web/atoms/TitlePage'
import PromotionsSection_1 from '../components/web/molecules/PromotionsSection_1'

const PromotionPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Promociones" />
        <PromotionsSection_1 />
    </TemplateWeb>
  )
}

export default PromotionPage