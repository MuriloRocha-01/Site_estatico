import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { TextAlignJustify, ChevronDown, ChevronUp, X } from 'lucide-react';

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
    <div className="flex bg-[#1a1a1a]/70 backdrop-blur-md justify-between px-8 md:px-28 items-center justify-center w-full border-b-3 fixed top-0 z-40 border-b-[1px] transition-all duration-300 ">
      <section className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 md:h-20" />

        <nav className="hidden lg:flex whitespace-nowrap ">
          <ul className="pl-40 py-6 flex gap-10 text-white">
            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
                href="#"
              >
                Home
              </a>
            </li>

            <li className="relative group">
              <a
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
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
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
                href="#"
              >
                Segmentos
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
                href="#"
              >
                Calculadora de aço
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
                href="#"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer hover:text-red hover:scale-105 transition duration-200 block"
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
          aria-label={isOpen ? ("Fechar menu ") :("Abrir menu")}
          
        >
          {isOpen ? (
            <X size={32} strokeWidth={2.5} />
          ) : (
            <TextAlignJustify size={32} />
          )}
        </button>

       
        <div
          className={`lg:hidden fixed inset-x-0 top-[65px] h-full bg-[#1a1a1a] bg-opacity-95 z-40 transition-all duration-800 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 h-[100vh] '
            : 'opacity-0 -translate-y-4 pointer-events-none '
        }`}
          onClick={closeMenu}
        >
          <div
            className="flex flex-col items-center justify-start py-32 h-full text-white text-xl gap-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            <a href="#" >
              Home
            </a>

           
            <div className="flex flex-col items-center w-full max-w-xs">
              <button
                className="flex gap-2 ml-9"
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
                <div className="flex flex-col items-center gap-5 py-6 px-4 text-[1rem] bg-black/30 rounded-b">
                  <a href="#">Cantoneiras</a>
                  <a href="#">Perfis Dobrados Sob Medidas</a>
                  <a href="#">Perfis Laminados</a>
                  <a href="#" >Ferro Redondo</a>
                  <a href="#" >Vigas de Aço</a>
                  <a href="#" >Tubos de aço</a>
                  <a href="#" >Barra chata</a>
                  <a href="#" >Perfis U Enrijecidos</a>
                  <a href="#" >Perfis U Simples</a>
                </div>
              </div>
            </div>

            <a href="#" >
              Segmentos
            </a>
            <a href="#" >
              Calculadora de aço
            </a>
            <a href="#" >
              Sobre
            </a>
            <a href="#" >
              Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;