import calculofundo from "../assets/calculo fundo.jpg"

function Calculo(){
    return(
        <div className="w-full h-full md:bg-gray-300 py-10 ">
        <div className=" bg-white text-buttoncard shadow-none md:shadow-lg flex-row md:flex-row flex mx-0 md:mx-20 items-center justify-center rounded-lg px-5 md:p-10 gap-5 ">
        <div className="block my-10 md:my-0">
            <span className="text-black ">Calcule rapidamente o peso aproximado dos perfis de aço informando tipo, comprimento e quantidade. Uma forma simples  e rápida de estimar o material para seu projeto.</span>


        <form className=" gap-4 flex flex-col mt-4 max-w-[90%]">
            <label className="rounded-lg focus:outline-none text-base">Escolha o tipo de perfil:
                <select name="perfil" id="perfil" className="bg-gray-200 text-gray-500 ml-0 md:ml-2 p-2 w-full md:w-1/2 rounded-lg  md:text-base  text-sm sm:text-base">
                    <option selected disabled>Selecione</option>
                    <option value="cantoneiras ">Cantoneiras</option>
                    <option value="perfil u simples">Pefil U Simples</option>
                    <option value="perfil u enrijecidos">Perfil U Enrijecidos</option>
                    <option value="barra chata">Barra chata</option>
                    <option value="tubos de aco">Tubos de aço</option>
                    <option value="vigas de aco">Vigas de aço</option>
                    <option value="ferro redondo">Ferro Redondo</option>
                    <option value="perfis laminados">Perfis Laminados</option>
                    <option value="perfis dobrados sob medidas">Perfis Dobrados Sob Medidas</option>
                </select>
            </label>
            <label className="rounded-lg text-base">Digite o comprimento:
                <input
                className="w-full md:w-1/2 ml-0 md:ml-[18px] p-2 rounded-lg bg-gray-200 placeholder-gray-500"
                type="number" 
                placeholder="Comprimento"/>
            </label>
            <label className="rounded-lg text-base">Digite a quantidade:
                <input 
                className="w-full md:w-1/2 ml-0 md:ml-[30px] p-2 rounded-lg bg-gray-200 placeholder-gray-500"
                type="number" 
                placeholder="Quantidade"/>
            </label>
            <div className="flex-col flex md:flex-row w-full md:w-[85%] gap-4 md:gap-0 mb-10 md:mb-0 mt-5">
                <button className="w-full md:w-2/5 p-2 font-bold rounded-lg bg-red text-white">Calcular</button>
                <input type="number" 
                readOnly
                className="text-center w-full md:w-3/4 p-1 rounded-lg ml-0 md:ml-10  "
                />
            </div>
                
        </form>
        </div>
        <img src={calculofundo} className="hidden lg:block w-full md:w-[50%] h-full rounded-xl"></img>
        </div>
    </div>
    )

};

export default Calculo;