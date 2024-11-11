import React from 'react'
import Header from '../web/organisms/Header'
import Footer from '../web/organisms/Footer'


const TemplateWeb = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default TemplateWeb