
import Carousel from "../components/Carousel";

function Header(){
    return(
        <div className="relative flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden">

            <Carousel></Carousel>
            <div className="text-left flex flex-col gap-3 mr-40 relative z-10 text-white">
            <h1 className="text-2xl font-bold  max-w-xl">Distribuição de ferro e aço estrutural com entrega rápida e preços competitivos.</h1>
            

            <h2 className="max-w-xl">Perfis estruturais, chapas e tubos em aço para construtoras, serralherias e fabricantes de estruturas metálicas.</h2>
            <button className="border-2 p-2 max-w-64 hover:bg-white hover:text-black  transition duration-200 shadow-xl"> Solicitar orçamento agora</button>
            
            </div>
            
        </div>
    )
    
}

export default Header;