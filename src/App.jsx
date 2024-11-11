import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import TemplateWeb from './components/template/TemplateWeb'
import TemplateMenu from './components/template/TemplateMenu'
import TemplateAbout from './components/template/TemplateAbout'
import TemplateContact from './components/template/TemplateContact'
import Layout from './components/Layout'
// import RecursosHumanos from './pages/RecursosHumanos'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<TemplateWeb/>} />
        <Route path='menu' element={<TemplateMenu/>} />
        <Route path='sobrenosotros' element={<TemplateAbout/>} />
        <Route path='contacto' element={<TemplateContact/>} />
      </Route>
    </Routes>
  )
}

export default App
