import type { ProdutoProps } from "./interfaces";
import { MOCK_PRODUCTS } from "../../shared/products_mock";

const Hero = ({ id }: ProdutoProps) => {
    
    const produto = MOCK_PRODUCTS.find((p) => p.id === id);

    // 2. Caso o ID não seja encontrado (segurança)
    if (!produto) {
        return <div className="mt-32 text-center">Produto não encontrado.</div>;
    }

    return (
        <section className="mt-32 p-8 mx-4 md:mx-32 rounded-2xl bg-white shadow-[0_20px_50px_rgba(2,6,23,0.2)] flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Imagem do Produto */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    className="shadow-xl rounded-xl object-cover max-h-80 w-full"
                    src={produto.url} // Usamos a URL do objeto encontrado
                    alt={produto.title}
                />
            </div>

            {/* Texto do Produto */}
            <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-900">
                    {produto.title}
                </h1>
                <p className="text-base text-gray-600 mt-4 leading-relaxed">
                    {produto.descricao}
                </p>
            </div>
        </section>
    );
}

export default Hero;