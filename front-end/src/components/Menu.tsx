import logo from '../assets/logo.jpg';


function Menu() {
    return(
     <div className='flex border-b-3 bg-black' >
      <img src={logo} alt="Logo" className='h-20 pl-6'/>
      <div className="pl-40 py-6 flex gap-10 text-white ">
        <a className=' cursor-pointer hover:text-red-600 hover:scale-110  transition duration-2 '>Home</a>
        <a className='cursor-pointer hover:text-red-600 hover:scale-110 transition duration-2'>Produtos</a>
        <a className='cursor-pointer hover:text-red-600 hover:scale-110 transition duration-2'>Segmentos</a>
        <a className='cursor-pointer hover:text-red-600 hover:scale-110 transition duration-2'>Calculadora de aço</a>
        <a className='cursor-pointer hover:text-red-600 hover:scale-110 transition duration-2'>Sobre</a>
        <a className='cursor-pointer  hover:text-[var(--color-red)] hover:scale-110 transition duration-2'>Orçamento</a>
      </div>
      
      </div>
    )
}

export default Menu;