import React from 'react'
import BarraNavAdmin from '../Admin/atoms/BarraNavAdmin'
import AdminSection_1 from '../Admin/molecules/AdminSection_1'
import MenuAdmin from '../Admin/atoms/MenuAdmin'

const TemplateAdmin = (children) => {
  return (
    <>
    <BarraNavAdmin />
    <MenuAdmin />
    <AdminSection_1 />
    </>
  )
}

export default TemplateAdmin
