import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import PromotionPage from './pages/PromotionPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage/>} />
        <Route path='menu' element={<MenuPage/>} />
        <Route path='sobrenosotros' element={<AboutPage/>} />
        <Route path='promociones' element={<PromotionPage/>} />
        <Route path='contacto' element={<ContactPage/>} />
        <Route path='admin' element={<AdminPage/>} />
      </Route>
    </Routes>
  )
}

export default App
