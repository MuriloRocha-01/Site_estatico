import { useParams } from 'react-router-dom';
import HeroDetalhe from '../components/Produto/HeroDetalhe' 
import MainLayout from '../layouts/MainLayout/MainLayout'; 

const ProdutoDetalhePage = () => {
    // useParams pega o ":id" definido na rota
    const { id } = useParams<{ id: string }>();

    return (
        <MainLayout>
            <div className="bg-gray-200">
                <HeroDetalhe id={Number(id)} />
            </div>
        </MainLayout>
    );
};

export default ProdutoDetalhePage;