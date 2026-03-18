import fundoProdutos from '../assets/produtos fundo.jpg'
import Hero from '../components/Hero/Hero';

function Produtos(){  

    return(
        <div className='w-full min-h-[85vh]'>
            <Hero
                imagem={fundoProdutos}
                label1="Veja Nossos Produtos"
                label2={
                    <>
                    Perfis estruturais em aço com a qualidade e <br />
                    entrega rápida que sua obra precisa.
                    </>
                }
            />       
        </div>
    )

}

export default Produtos;