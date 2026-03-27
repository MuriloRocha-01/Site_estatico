import Calculo from '../features/Calculo';
import calculadoraFundo from '../assets/calculoPage fundo.png'
import MainLayoutHero from '../layouts/MainLayoutHero/MainLayoutHero';

function CalculadoraPage(){
    return(
        <>
        <MainLayoutHero
        imagem={calculadoraFundo}
        label1="Calculadora de Aço"
        label2=""> 
            <Calculo/>
        </MainLayoutHero>
        </>
        
    )
}


export default CalculadoraPage; 