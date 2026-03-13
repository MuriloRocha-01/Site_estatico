import CalculadoraAco from '../features/CalculadoraAco';
import Menu from '../components/Menu';
import Calculo from '../features/Calculo';
function Calculadora(){
    return(
        <>
            <Menu></Menu>
            <CalculadoraAco/>
            <Calculo/>
        </>
        
    )
}


export default Calculadora; 