
import sobreatendimento from '../assets/sobre atendimento.jpg';
function Sobre(){
    return(
        <section className='relative'>
                
            <section className='h-[100vh] gap-14 justify-center w-full flex items-center '>
                    
                    <div className='w-[500px] text-left'>
                        <h1 className='mb-5 text-[1.7rem] font-bold '>Conheça nossa <span className='text-red'>História</span></h1>
                <div className="text-[1rem] text-gray-600 leading-relaxed space-y-4">

                    <p>
                        Desde o início, a GranPerfil foi construída sobre pilares sólidos: excelência nos produtos, diversidade de estoque e eficiência logística. Com foco em atender toda a região de São Paulo, a empresa mantém um portfólio variado de perfis de aço não planos, garantindo que seus clientes encontrem exatamente o que precisam, com rapidez e confiança.
                    </p>
                    <p>
                    Temos como objetivo transformar a forma como o mercado de distribuição de perfis de aço não planos atende seus clientes. <br/> Em um setor muitas vezes marcado por processos engessados e atendimento impessoal, a empresa surgiu para oferecer algo diferente — um serviço baseado em qualidade, agilidade e relacionamento humano. <br/>
                    </p>
                    
                    <p>
                        Mais do que fornecer produtos, a GranPerfil acredita em construir relações de confiança. Por isso, o atendimento humanizado é um dos principais diferenciais da empresa. Cada cliente é atendido com atenção, respeito e comprometimento, sempre buscando compreender suas necessidades e oferecer as melhores soluções.
                    </p>

                </div>
                    </div>
                    <div>
                        <img src={sobreatendimento} className='w-[500px] rounded-lg shadow-[15px_-15px_0_2px_#e60000]'></img>
                        <div></div>
                    </div>
            </section>
                
                <div className='absolute bg-red z-10  inset-y-0 top-[50.5%] left-0 h-[3.5%] w-[20%] rounded-r-xl'></div>

            <section className='py-24 px-6 md:px-32 bg-gray-100 text-black'>

    
                    <div className='max-w-3xl mb-12 '>
                        <h2 className='text-2xl md:text-4xl font-bold underline decoration-red'>
                            Inovação e evolução constante
                        </h2>
                    </div>

    
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>

                    <div className='bg-gray-300 p-6 rounded-xl shadow-xl hover:scale-105 transition duration:2'>
                        <h3 className='font-bold text-lg '>Eficiência logística</h3>
                        <p className='text-gray-600 mt-2'>
                            Sabendo que tempo é um fator essencial no dia a dia das empresas, a GranPerfil investe constantemente em processos que garantem agilidade nas operações.
                                        O sistema de carga e descarga rápida para cargas externas permite otimizar retiradas e entregas, tornando a experiência mais prática e eficiente para clientes e parceiros.
                        </p>
                    </div>
                    <div className='bg-gray-300 p-6 rounded-xl shadow-xl hover:scale-105 transition duration:2'>
                        <h3 className='font-bold text-lg '>Inovação e Melhorias</h3>
                        <p className='text-gray-600 mt-2'>
                            Com uma visão voltada para o futuro, a GranPerfil investe continuamente em melhorias, tecnologias e inovação em seus processos, 
                            criando mais praticidade na conexão entre fornecedores e clientes. Esse compromisso com evolução constante permite oferecer 
                            um serviço moderno, confiável e alinhado com as reais demandas do mercado.
                        </p>
                    </div>


                    <div className='bg-gray-300 p-6 rounded-xl shadow-xl hover:scale-105 transition duration:2'>
                        <h3 className='font-bold text-lg '>Confiança</h3>
                        <p className='text-gray-600 mt-2'>
                            Assim, a GranPerfil segue crescendo com o objetivo de se tornar referência no setor de distribuição de perfis de aço não planos, mantendo sempre o mesmo princípio que deu origem à empresa: fazer diferente, fazer melhor e colocar o cliente no centro de tudo.
                        </p>
                    </div>

    </div>

            </section>
                


    </section>
    )
}

export default Sobre;