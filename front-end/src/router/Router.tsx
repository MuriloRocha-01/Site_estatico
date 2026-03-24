import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/Home';
import ProdutosPage from '../pages/ProdutosPage';
import CalculadoraPage from '../pages/CalculadoraPage';
import SobrePage from '../pages/SobrePage';
import OrcamentoPage from '../pages/OrcamentoPage';
import ProdutoDetalhePage from '../pages/ProdutoDetalhePage'

const router = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/produtos' element={<ProdutosPage />}/>

            <Route path='/produtos/:id' element={<ProdutoDetalhePage />}/>

            <Route path='/calculadora' element={<CalculadoraPage />}/>
            <Route path='/sobre' element={<SobrePage />}/>
            <Route path='/orcamento' element={<OrcamentoPage />}/>
            
            
        </Routes>

        
        
    )
}

export default router
