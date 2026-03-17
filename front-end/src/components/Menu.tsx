import logo from '../assets/logo.jpg';

function Menu() {
  return(
    <div className='flex border-b-3 bg-black sticky top-0 z-40  border-b-[1px]'>

      <img src={logo} alt="Logo" className='h-20 py-2 pl-6'/>

      <nav>
        <ul className='pl-40 py-6 flex gap-10 text-white'>

          <li>
            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Home
            </a>
          </li>

          
          <li className='relative group'>

            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Produtos
            </a>

            <ul className="absolute left-0 mt-2 p-3 bg-white shadow-lg min-w-[150px]
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 ">

              <li>
                <a href="#" className="hover:text-red block text-black">
                  Cantoneiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Perfis Dobrados Sob Medidas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Perfis Laminados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Ferro Redondo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Vigas de Aço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Tubos de aço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Barra chata
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Perfis U Enrijecidos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red block text-black">
                  Perfis U Simples
                </a>
              </li>

            </ul>

          </li>

          <li>
            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Segmentos
            </a>
          </li>

          <li>
            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Calculadora de aço
            </a>
          </li>

          <li>
            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Sobre
            </a>
          </li>

          <li>
            <a className='cursor-pointer hover:text-red hover:scale-110 transition duration-200 block'>
              Orçamento
            </a>
          </li>

        </ul>
      </nav>

    </div>
  )
}

export default Menu;