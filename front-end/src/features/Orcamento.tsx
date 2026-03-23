import orcamentofundo from '../assets/orcamento fundo.jpg'

function Orcamento(){
    return(
        <div className="block md:flex min-h-[100vh] bg-gray-300 -z-30 ">

    
    <div className="w-full md:h-screen h-[550px] md:w-1/2 flex flex-col justify-center p-12 text-white relative overflow-hidden pt-20">

            <img 
                src={orcamentofundo}
                className="absolute inset-0 h-full w-full object-cover z-0 "
                alt="orçamento fundo"
            />
            <div className='absolute inset-0 bg-black/50 z-5'></div>


            <h1 className="text-3xl md:text-4xl font-bold mb-4 z-10">
                Solicite seu orçamento agora
            </h1>

            <h2 className="text-[1rem] md:text-lg z-10">
                Garanta seu projeto no prazo e com a agilidade que só a Gran Perfil oferece.
            </h2>

    </div>

    
    <div className="w-full h-sreen md:w-1/2 flex items-center justify-center">

        <form className="mt-0 md:mt-16 bg-white p-8 md:rounded-xl shadow-[10px_10px_20px_rgba(2,6,23,0.3)] w-full md:w-[400px] flex flex-col gap-4">

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