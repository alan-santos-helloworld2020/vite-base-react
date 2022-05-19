import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/home/Home'
import Sobre from './views/sobre/Sobre'
import Navegador from './components/navegador/Navegador'
import Cadastro from './views/cadastro/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <Navegador></Navegador>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
        <Route path='/sobre' element={<Sobre></Sobre>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
