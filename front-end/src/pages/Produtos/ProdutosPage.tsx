import Hero from '../../components/Produto/Hero02';
import imagem from '../../assets/barra chata.jpg';
import Menu from '../../components/Menu' 


function ProdutosPage(){
    return(
        <div>
            <Menu/>
            <Hero
            imagem={imagem}
            titulo='Nome do produto'
            descricao='Utilizados em estruturas, construção civil, serralheria e aplicações industriais que exigem resistência e durabilidade.'/>
            
        </div>

    )
}
export default ProdutosPage;