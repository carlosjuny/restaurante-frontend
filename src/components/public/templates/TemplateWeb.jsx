import Header from '../../../components/public/organisms/layouts/Header'
import Footer from '../../../components/public/organisms/layouts/Footer'


const TemplateWeb = ({children}) => {
  return (
    <>
    <Header />
    <main>{children}</main> 
    <Footer />
    </>
  )
}

export default TemplateWeb