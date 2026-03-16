import orcamentofundo from '../assets/orcamento fundo.jpg'

function Orcamento(){
    return(
        <div className="flex min-h-[90vh] ">

    
    <div className="w-1/2 flex flex-col justify-center p-12 text-white relative overflow-hidden ">

    <img 
        src={orcamentofundo}
        className="absolute inset-0 w-full h-full object-cover -z-20 "
        alt=""
    />
    <div className='absolute inset-0 bg-black/40 -z-10'></div>

    <h1 className="text-4xl font-bold mb-4">
        Solicite seu orçamento agora
    </h1>

    <h2 className="text-lg">
        Garanta seu projeto no prazo e com a agilidade que só a Gran Perfil oferece.
    </h2>

</div>

    
    <div className="w-1/2 flex items-center justify-center">

        <form className="bg-white p-8 rounded-xl shadow-xl w-[400px] flex flex-col gap-4">

            <label>Digite o nome da empresa:</label>
            <input
                className="border p-2 rounded"
                placeholder="Nome da empresa"
            />

            <label>Digite o telefone:</label>
            <input
                className="border p-2 rounded"
                placeholder="Telefone"
            />

            <label>Digite o nome do produto:</label>
            <input
                className="border p-2 rounded"
                placeholder="Nome do produto"
            />

            <label>Digite a quantidade:</label>
            <input
                className="border p-2 rounded"
                placeholder="Quantidade"
            />

            <button className="bg-red text-white p-2 rounded mt-4 hover:bg-red-700 transition">
                Receber orçamento
            </button>

        </form>

    </div>

</div>
    )
}

export default Orcamento;