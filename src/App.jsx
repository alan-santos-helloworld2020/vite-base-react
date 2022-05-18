import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './views/home/Home'
import Sobre from './views/sobre/Sobre'
import Navegador from './components/navegador/Navegador'

function App() {
  return (
    <div>
      <Navegador></Navegador>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/sobre' element={<Sobre></Sobre>}></Route>
      </Routes>
    </div>
  )
}

export default App
