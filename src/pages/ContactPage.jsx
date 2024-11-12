import React from 'react'
import TemplateWeb from '../components/template/TemplateWeb'
import TitlePage from '../components/web/atoms/TitlePage'
import ContactSection from '../components/web/molecules/ContactSection'

const ContactPage = () => {
  return (
    <TemplateWeb>
        <TitlePage title="Contacto" />
        <ContactSection />
    </TemplateWeb>
  )
}

export default ContactPage