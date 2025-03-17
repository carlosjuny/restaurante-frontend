import TemplateWeb from '../../components/public/templates/TemplateWeb'
import TitlePage from '../../components/public/atoms/Title'
import ContactSection from '../../components/public/organisms/sections/ContactSection'

const ContactPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Contacto" />
        <ContactSection />
    </TemplateWeb>
  )
}

export default ContactPage