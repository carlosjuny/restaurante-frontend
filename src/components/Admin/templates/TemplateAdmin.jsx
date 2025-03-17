import BarTop from '../../admin/atoms/BarTopAdmin'
import AdminSection_1 from '../../admin/organisms/AdminSection_1'
import MenuAdmin from '../../admin/molecules/NavbarAdmin'
import PropsTypes from 'prop-types'

const TemplateAdmin = ({children}) => {
  return (
    <>
    <BarTop />
    <MenuAdmin />
    <AdminSection_1 />
    </>
  )
}

TemplateAdmin.propsTypes = {
  children: PropsTypes.node
}

export default TemplateAdmin
