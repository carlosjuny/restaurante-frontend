import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<AdminPage/>} />
        <Route path='menu' element={<MenuPage/>} />
        <Route path='sobrenosotros' element={<AboutPage/>} />
        <Route path='contacto' element={<ContactPage/>} />
        <Route path='admin' element={<AdminPage/>} />
      </Route>
    </Routes>
  )
}

export default App
