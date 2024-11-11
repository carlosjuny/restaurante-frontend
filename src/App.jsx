import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage/>} />
        <Route path='menu' element={<MenuPage/>} />
        <Route path='sobrenosotros' element={<AboutPage/>} />
        <Route path='contacto' element={<HomePage/>} />
      </Route>
    </Routes>
  )
}

export default App
