import Calculo from '../features/Calculo';
import produtosfundo from '../assets/produtos fundo.jpg';
import MainLayoutHero from '../layouts/MainLayoutHero/MainLayoutHero';

function CalculadoraPage(){
    return(
        <>
        <MainLayoutHero
        imagem={produtosfundo}
        label1="Calculadora de Aço"
        label2=""> 
            <Calculo/>
        </MainLayoutHero>
        </>
        
    )
}


export default CalculadoraPage; 