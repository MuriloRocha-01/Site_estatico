
import Carousel from "../components/Carousel";
import {useMenu} from '../components/Menu/hooks/useMenu';

function Header() {
  const { goToOrcamento } = useMenu();

  return (
    <div className="relative flex items-center h-[700px] w-full overflow-hidden px-6 md:px-20 lg:px-[20%]">
      <Carousel />
      
      <div className="relative z-10 text-white flex flex-col gap-4 items-start text-left w-full">
        <h1 className="text-xl md:text-3xl font-bold max-w-2xl leading-tight">
          Distribuição de ferro e aço estrutural com entrega rápida e preços competitivos.
        </h1>

        <h2 className="max-w-md text-sm md:text-lg opacity-90">
          Perfis estruturais, chapas e tubos em aço para construtoras, serralherias e fabricantes de estruturas metálicas.
        </h2>

        <button 
          className="mt-2 font-bold py-3 px-6 w-[280px] md:w-auto bg-white text-black md:bg-transparent md:text-white md:border-2 border-white md:hover:bg-white md:hover:text-black transition duration-300 shadow-xl"
          onClick={goToOrcamento}
        > 
          Solicitar orçamento agora
        </button>  
      </div>
    </div>
  );
}

export default Header;