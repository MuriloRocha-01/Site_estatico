import orcamentofundo from '../assets/orcamento fundo.jpg'
import {useState} from 'react';

function Orcamento(){
    const [nomeEmpresa,setNomeEmpresa] = useState('');
    const [telefone,setTelefone] = useState('');
    const [nomeProduto,setNomeProduto] = useState('');
    const [quantidade,setQuantidade] = useState('');

    function receberOrcamento(){
        const mensagem = `Olá, gostaria de um orçamento:%0A%0A*Nome da empresa:* ${nomeEmpresa}%0A* Produto:* ${nomeProduto}%0A*Quantidade:* ${quantidade}`;
        const telefone = 5511921113993;
        const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;

        window.open(url, '_blank');
    }

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
                onChange={(e) => setNomeEmpresa(e.target.value)}
                value={nomeEmpresa}
            />

            <label>Digite o telefone:</label>
            <input
                type='number'
                className="border p-2 rounded"
                placeholder="Telefone"
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
            />

            <label>Digite o nome do produto:</label>
            <input
                className="border p-2 rounded"
                placeholder="Nome do produto"
                onChange={(e) => setNomeProduto(e.target.value)}
                value={nomeProduto}
            />

            <label>Digite a quantidade:</label>
            <input
                type='number'
                className="border p-2 rounded"
                placeholder="Quantidade"
                onChange={(e) =>setQuantidade (e.target.value)}
                value={quantidade}
            />

            <button className="bg-red text-white p-2 rounded mt-4 hover:bg-red-700 transition"
            onClick={receberOrcamento}>
                Receber orçamento
            </button>

        </form>

    </div>

</div>
    )
}

export default Orcamento;