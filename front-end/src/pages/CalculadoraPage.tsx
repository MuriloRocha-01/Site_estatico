import CalculadoraAco from '../features/CalculadoraAco';
import Menu from '../components/Menu';
import Calculo from '../features/Calculo';
import ButtonWhatsapp from '../components/ButtonWhatsapp';
import Footer from '../components/Footer';

function CalculadoraPage(){
    return(
        <>
            <Menu></Menu>
            <CalculadoraAco/>
            <Calculo/>
            <ButtonWhatsapp/>
            <Footer/>
        </>
        
    )
}


export default CalculadoraPage; 