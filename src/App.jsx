import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import TemplateWeb from './components/template/TemplateWeb'
import TemplateMenu from './components/template/TemplateMenu'
import TemplateAbout from './components/template/TemplateAbout'
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
      </Route>
    </Routes>
  )
}

export default App
