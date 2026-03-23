
import Carousel from "../components/Carousel";

function Header(){
    return(
        <div className="relative flex items-center justify-center h-[calc(100vh-80px)] w-full overflow-hidden">

            <Carousel></Carousel>
            <div className="ml-5 md:text-left flex flex-col gap-3 mr-20 md:mr-40 relative z-10 text-white">
            <h1 className="text-[1rem] md:text-2xl font-bold md:max-w-xl">Distribuição de ferro e aço estrutural com entrega rápida e preços competitivos.</h1>
            

            <h2 className="max-w-xl text-[0.7rem] md:text-base">Perfis estruturais, chapas e tubos em aço para construtoras, serralherias e fabricantes de estruturas metálicas.</h2>
            <button className="font-bold p-2 max-w-[80%] md:max-w-64 bg-white md:bg-transparent text-black md:text-white md:border-2 md:hover:bg-white md:hover:text-black  transition duration-200 shadow-xl"> Solicitar orçamento agora</button>
            
            </div>
            
        </div>
    )
    
}

export default Header;