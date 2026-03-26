import ProdutosFundo from '../assets/produtos fundo.jpg'
import CardsProdutos from '../features/SobreProdutos/components/CardsProdutos';

import MainLayoutHero from '../layouts/MainLayoutHero/MainLayoutHero.tsx';

function ProdutosDetalhePage(){  

    return(
        <div className='flex flex-col gap-10 overflow-x-hidden'>
            <MainLayoutHero
            imagem={ProdutosFundo}
            label1="Nossos Produtos"
            label2={
            <>
                Perfis estruturais em aço com a qualidade e <br />
                entrega rápida que sua obra precisa.
            </>
            }>
                
                <CardsProdutos/>
            </MainLayoutHero>
        </div>
    )

}

export default ProdutosDetalhePage; 
