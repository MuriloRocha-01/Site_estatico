import { Instagram } from 'lucide-react';

function Footer(){
    return(
        <div className=''>
            <div className="w-[90%] mx-auto border-t border-black mt-3 "></div>
        
        <div className="flex justify-around py-10 text-base ">
            
            <div>
            <span>Politícas e Termos de Uso</span>
            
            
            </div>

            <div>
               <ul className=' gap-10 text-black '>

                <li>
                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Home
                    </a>
                </li>

                <li className='relative group'>

                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Produtos
                    </a>
                </li>
                <li className='relative group'>

                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Segmentos
                    </a>
                </li>
                <li className='relative group'>

                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Calculadora de aço
                    </a>
                </li>
                <li className='relative group'>

                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Sobre
                    </a>
                </li>
                <li className='relative group'>

                    <a className='cursor-pointer hover:text-red hover:scale-105 transition duration-200 block'>
                    Orçamento
                    </a>
                </li>
                </ul>

            </div>

            <div className="flex flex-col ">
                <span>Informações para contato</span>
                <span>📧Comercial@granperfil.com.br</span>
                <span>📞(11)2273-7171</span>
                <span>📍Avenida Henry Ford, número 1028</span>
                <div className='flex gap-2'>
                <Instagram />
                </div>
            </div>
        </div>
        </div>
    )
};


export default Footer;