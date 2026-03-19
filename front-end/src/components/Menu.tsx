import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { TextAlignJustify, ChevronDown, ChevronUp } from 'lucide-react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1 || 0);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setProdutosOpen(false); 
  };

  return (
    <div className="flex justify-between px-10 md:px-28 items-center border-b-3 bg-[#1a1a1a] sticky top-0 z-40 border-b-[1px]">
      <section className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 md:h-20" />

        <nav className="hidden lg:flex">
          <ul className="pl-40 py-6 flex gap-10 text-white">
            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Home
              </a>
            </li>

            <li className="relative group">
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Produtos
              </a>

              <ul className="absolute left-0 mt-2 p-3 bg-white shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 rounded-md">
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Cantoneiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Perfis Dobrados Sob Medidas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Perfis Laminados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Ferro Redondo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Vigas de Aço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Tubos de aço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Barra chata
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Perfis U Enrijecidos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red block text-black py-1">
                    Perfis U Simples
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Segmentos
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Calculadora de aço
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-110 transition duration-200 block"
                href="#"
              >
                Orçamento
              </a>
            </li>
          </ul>
        </nav>
      </section>

      
      <section>
        <button
          className="text-white flex lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <TextAlignJustify size={32} />
        </button>

       
        <div
          className={`lg:hidden fixed inset-0 bg-[#1a1a1a] bg-opacity-95 z-30 transition-all duration-400 ease-in-out ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        >
          <div
            className="flex flex-col items-center justify-start pt-20 h-full text-white text-xl gap-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#" onClick={closeMenu}>
              Home
            </a>

           
            <div className="flex flex-col items-center w-full max-w-xs">
              <button
                className="flex items-center w-full text-lg font-medium py-4 px-6 hover:bg-gray-800 rounded transition"
                onClick={() => setProdutosOpen(!produtosOpen)}
              >
                Produtos
                {produtosOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
              </button>

              <div
                className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${
                  produtosOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col items-center gap-5 py-6 px-4 text-base bg-black/40 rounded-b">
                  <a href="#" onClick={closeMenu}>Cantoneiras</a>
                  <a href="#" onClick={closeMenu}>Perfis Dobrados Sob Medidas</a>
                  <a href="#" onClick={closeMenu}>Perfis Laminados</a>
                  <a href="#" onClick={closeMenu}>Ferro Redondo</a>
                  <a href="#" onClick={closeMenu}>Vigas de Aço</a>
                  <a href="#" onClick={closeMenu}>Tubos de aço</a>
                  <a href="#" onClick={closeMenu}>Barra chata</a>
                  <a href="#" onClick={closeMenu}>Perfis U Enrijecidos</a>
                  <a href="#" onClick={closeMenu}>Perfis U Simples</a>
                </div>
              </div>
            </div>

            <a href="#" onClick={closeMenu}>
              Segmentos
            </a>
            <a href="#" onClick={closeMenu}>
              Calculadora de aço
            </a>
            <a href="#" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#" onClick={closeMenu}>
              Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;