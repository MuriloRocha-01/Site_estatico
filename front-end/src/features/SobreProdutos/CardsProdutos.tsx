import barraDeTransferencia from '../assets/barra de transferencia.jpg';
import barraChata from '../assets/barra chata.jpg';
import tubosEstruturais from '../assets/tubos estruturais.jpg';
import Cantoneira from '../assets/cantoneiras.jpg';

function CardsProdutos(){
return (
    <section className='flex justify-center gap-12 mb-20 '>
    <section className='p-3 w-52 shadow-xl cursor-pointer hover:scale-105 transition duration:5 bg-white'>
        <img src={barraChata} className=' w-48 rounded-xl shadow-xl ' alt='Chapas de aço'></img>
        <p className=' font-bold text(card-text) mt-2'>Chapas de aço</p>
        <span className='text-[15px] text-buttoncard'>Alta resistência, durabilidade e versatilidade para diversos tipos de projetos...</span>
    </section>

    <section className='p-3 w-52 shadow-xl cursor-pointer hover:scale-105 transition duration:5'>
        <img src={tubosEstruturais} className=' w-48 rounded-xl shadow-xl ' alt='Tubos Estruturaus'></img>
        <p className=' font-bold mt-2'>Tubos estruturais</p>
        <span className='text-[15px] text-buttoncard'> Alta resistência, durabilidade e versatilidade para diversos tipos de projetos. Ideais para construção civil, serralheria e indústria...</span>
    </section>

    <section className='p-3 w-52 shadow-xl cursor-pointer hover:scale-105 transition duration:5'>
        <img src={Cantoneira} className=' w-48 rounded-xl shadow-xl ' alt='Cantoneira'></img>
        <p className='font-bold mt-2'>Cantoneiras</p>
        <span className='text-[15px] text-buttoncard'>Resistência e versatilidade para reforço e montagem de estruturas metálicas</span>
    </section>

    <section className='p-3 w-52 shadow-xl cursor-pointer hover:scale-105 transition duration:5'>
        <img src={barraDeTransferencia} className=' w-48 rounded-xl shadow-xl '></img>
        <p className='font-bold mt-2'>Barra de transferencia</p>
        <span></span>
    </section>
    <div className='border-t-[25px] border-red  w-[15%] -z-10 absolute left-0 -bottom-[330px] '></div>
    <div className='border-t-[25px] border-red  w-[15%] -z-10 absolute left-0 -bottom-[370px] '></div>
    <div className='border-t-[25px] border-red  w-[15%] -z-10 absolute left-0 -bottom-[410px] '></div>
    </section>
    
)


}


export default CardsProdutos;