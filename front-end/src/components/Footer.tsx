import logo from '../assets/logo.jpg'

function Footer(){
    return(
        <div className=''>
            <div className="w-[90%] mx-auto border-t border-black mt-3 "></div>
        
        <div className="flex justify-around py-10 text-base ">
            
            <div>
            <span>Politícas e Termos de Uso</span>
            <span></span>
            <img src={logo} alt='logo da empresa gran perfil' className='w-32'></img>
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
                <span>📧Anonimo@gmail.com</span>
                <span>📞(13)99601-2906</span>
                <span>📍Rua. alvedro simpatia conceito</span>
            </div>
        </div>
        </div>
    )
};


export default Footer;