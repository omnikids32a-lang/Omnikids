import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Instrucoes from './pages/Instrucoes'
import QuemSomos from './pages/QuemSomos'
import Produto from './pages/Produto'
import Game from './pages/Game'
import Referencias from './pages/Referencias'

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Instruções' element={<Instrucoes />} />
            <Route path='/Quem-somos' element={<QuemSomos />} />
            <Route path='/Produto' element={<Produto />} />
            <Route path='/Game' element={<Game />} />
            <Route path='/Referencias' element={<Referencias />} />
        </Routes>
    )
}

export default Rotas