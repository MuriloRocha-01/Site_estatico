import Hero from '../components/Hero/Hero'
import produtosfundo from '../assets/produtos fundo.jpg'

function CalculadoraAco(){
    return(
        <div>
           <Hero
           imagem={produtosfundo}
           label1="Calculadora de Aço"
           label2=""/> 
        </div>
    )
}

export default CalculadoraAco;