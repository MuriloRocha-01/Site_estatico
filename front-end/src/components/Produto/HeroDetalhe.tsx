import type { ProdutoProps } from "./interfaces";
import { MOCK_PRODUCTS } from "../../shared/products_mock";

const HeroDetalhe = ({ id }: ProdutoProps) => {
    const produto = MOCK_PRODUCTS.find((p) => p.id === id);

    if (!produto) {
        return (
            <div className="flex h-screen justify-center items-center text-2xl font-light text-gray-500">
                Produto não encontrado.
            </div>
        );
    }

    return (
        <section className="min-h-[60vh] bg-gray-50 pb-10 pt-20 md:pt-28 px-4 md:px-0 flex items-center">
    <div className="mx-auto max-w-6xl p-6 md:p-12 rounded-3xl bg-white shadow-[10px_10px_20px_rgba(2,6,23,0.3)] flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-2/5 flex justify-center"> 
            <div className="overflow-hidden rounded-2xl shadow-lg aspect-square w-full max-w-[350px]"> 
                <img 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    src={produto.url} 
                    alt={produto.title}
                />
            </div>
        </div>

        
        <div className="flex flex-col w-full md:w-3/5 gap-4">
            <div>
                <span className="text-red font-semibold tracking-wider uppercase text-[0.8rem]">Disponível</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
                    {produto.title}
                </h1>
            </div>

            <div className="w-20 h-1 bg-red rounded-lg"></div>

            <p className="text-lg text-gray-700 ">
                {produto.descricao}
            </p>
        </div>
    </div>
</section>
    );
}

export default HeroDetalhe;