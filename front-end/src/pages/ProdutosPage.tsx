import Produtos from '../features/Produtos.tsx'
import Menu from '../components/Menu'
import ButtonWhatsapp from '../components/ButtonWhatsapp.tsx';
import CardsProdutos from '../features/SobreProdutos/components/CardsProdutos'
function ProdutosPage(){  

    return(
        <>
            <Menu/>
            <Produtos/>
            <CardsProdutos/>
            <ButtonWhatsapp/>
        </>
    )

}

export default ProdutosPage; 
