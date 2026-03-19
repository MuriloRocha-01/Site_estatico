import calculofundo from "../assets/calculo fundo.jpg"

function Calculo(){
    return(
        <div className="w-full h-full md:bg-gray-300 py-10">
        <div className=" bg-white text-buttoncard shadow-lg block md:flex mx-0 md:mx-20 items-center justify-center rounded-lg px-5 md:p-10 gap-5 ">
        <div className="block my-10 md:my-0">
            <span className="text-black ">Calcule rapidamente o peso aproximado dos perfis de aço informando tipo, comprimento e quantidade. Uma forma simples  e rápida de estimar o material para seu projeto.</span>


        <form className=" flex flex-col mt-4 max-w-[90%] ">
            <label className="w-full p-3 rounded-lg focus:outline-none text-base">Escolha o tipo de perfil:
                <select name="perfil" id="perfil" className="ml-0 md:ml-2 border p-1 w-[203px] rounded-lg  md:text-base  text-sm sm:text-base">
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
            <label className="w-full p-3 rounded-lg text-base">Digite o comprimento:
                <input
                className="ml-0 md:ml-[18px] p-1 rounded-lg border"
                type="number" 
                placeholder="Comprimento"/>
            </label>
            <label className="w-full p-3 rounded-lg text-base">Digite a quantidade:
                <input 
                className="ml-0 md:ml-[30px] p-1 rounded-lg border"
                type="number" 
                placeholder="Quantidade"/>
            </label>
            <label className="w-full p-3 rounded-lg text-base">Peso aproximado:
                <input type="text" 
                readOnly
                className="ml-0 md:ml-[42px] p-1 rounded-lg border"
                />
            </label>
            <button className="w-full md:w-52 md:mx-auto p-3 font-bold rounded-lg bg-red text-white ">Calcular</button>
        </form>
        </div>
        <img src={calculofundo} className=" w-full md:w-[50%] h-full rounded-xl"></img>
        </div>
    </div>
    )

};

export default Calculo;