import calculofundo from "../assets/calculo fundo.jpg"

function Calculo(){
    return(
        <div className="flex mt-[5%] h-[70vh]  gap-10 font-montserrat ml-[13%]">
        <div className="block max-w-[42%]">
            <span className="text-buttoncard text">Calcule rapidamente o peso aproximado dos perfis de aço informando tipo, comprimento e quantidade. Uma forma simples  e rápida de estimar o material para seu projeto.</span>


        <form className=" mt-4 max-w-[90%] ">
            <label className="block rounded-[20px] mb-3 ">Escolha o tipo de perfil:
                <select name="perfil" id="perfil" className=" ml-2 border p-1 w-[203px] rounded-lg">
                    <option selected disabled>Selecione</option>
                    <option value="perfil w ">Perfil W</option>
                    <option value="cantoneiras">Cantoneiras</option>
                    <option value="perfil i">Perfil I</option>
                </select>
            </label>
            <label className="block mb-3">Digite o comprimento:
                <input
                className="border ml-[18px] p-1 rounded-lg"
                type="number" 
                placeholder="Comprimento"/>
            </label>
            <label className="block mb-3 ">Digite a quantidade:
                <input 
                className="border ml-[30px] p-1 rounded-lg"
                type="number" 
                placeholder="Quantidade"/>
            </label>
            <label className="block mb-4">Peso aproximado:</label>
            <button className="p-2 rounded-lg bg-red text-white ml-32 w-40">Calcular</button>
        </form>
        </div>
        <img src={calculofundo} className="w-[40%] h-[70%] rounded-xl"></img>
        </div>
    )

};

export default Calculo;