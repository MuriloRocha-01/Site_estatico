import ProdutosFundo from '../assets/produtos fundo.jpg'
import CardsProdutos from '../features/SobreProdutos/components/CardsProdutos';

import MainLayoutHero from '../layouts/MainLayoutHero/MainLayoutHero.tsx';

function ProdutosDetalhePage(){  

    return(
        <>
            <MainLayoutHero
            imagem={ProdutosFundo}
            label1="Veja Nossos Produtos"
            label2={
            <>
                Perfis estruturais em aço com a qualidade e <br />
                entrega rápida que sua obra precisa.
            </>
            }>
                
                <CardsProdutos/>
            </MainLayoutHero>
        </>
    )

}

export default ProdutosDetalhePage; 
