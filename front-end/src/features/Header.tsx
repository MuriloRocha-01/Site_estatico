import ButtonWhatsapp from "../components/buttonWhatsapp";

function Header(){
    return(
        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
            <div className="text-left flex flex-col gap-3 mr-40">
            <h1 className="text-2xl font-bold  max-w-xl">Distribuição de ferro e aço estrutural com entrega rápida e preços competitivos.</h1>

            <h2 className="max-w-xl">Perfis estruturais, chapas e tubos em aço para construtoras, serralherias e fabricantes de estruturas metálicas.</h2>
            <button className="border-2 p-2 max-w-64 hover:bg-red-600 hover:text-white  transition duration-200"> Solicitar orçamento agora</button>
            <ButtonWhatsapp></ButtonWhatsapp>
            </div>
            
        </div>
    )
    
}

export default Header;