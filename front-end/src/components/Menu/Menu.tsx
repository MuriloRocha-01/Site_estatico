import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { TextAlignJustify, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useMenu } from './hooks/useMenu';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);

  const { 
    goToOrcamento, goToSobre, goToCalculadora, goToProdutos, 
    goToProdutoEspecifico, goToHome, isCalculadoraActive, 
    isSobreActive, isOrcamentoActive, isProdutosActive, isHomeActive 
  } = useMenu();

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
    <div className="flex bg-[#1a1a1a]/70 backdrop-blur-md px-8 md:px-28 items-center justify-between lg:justify-center w-full fixed top-0 z-40 border-b-[1px] border-white/10 transition-all duration-300">
      
      <section className="flex items-center lg:gap-52">
        <a className="cursor-pointer" onClick={goToHome}>
          <img src={logo} alt="Logo" className="h-16 md:h-20" />
        </a>

        <nav className="hidden lg:flex whitespace-nowrap">
          <ul className="flex gap-12 text-white py-6">
            <li>
              <a 
                className={`cursor-pointer hover:text-red hover:scale-105 transition duration-200 block ${isHomeActive ? 'text-red' : 'text-white'}`}
                onClick={goToHome}
              >
                Home
              </a>
            </li>

            <li className="relative group">
              <a 
                className={`cursor-pointer hover:text-red hover:scale-105 transition duration-200 block ${isProdutosActive ? 'text-red' : 'text-white'}`}
                onClick={goToProdutos}
              >
                Produtos
              </a>

              <ul className="absolute left-0 mt-2 p-3 bg-white shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 rounded-md">
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(0)}>Cantoneiras</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(1)}>Perfis Dobrados Sob Medidas</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(2)}>Perfis Laminados</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(3)}>Ferro Redondo</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(4)}>Vigas de Aço</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(5)}>Tubos de aço</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(6)}>Barra chata</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(7)}>Perfis U Enrijecidos</a></li>
                <li><a className="cursor-pointer hover:text-red block text-black py-1" onClick={() => goToProdutoEspecifico(8)}>Perfis U Simples</a></li>
              </ul>
            </li>

            <li><a className={`cursor-pointer hover:text-red hover:scale-105 transition duration-200 block ${isCalculadoraActive ? 'text-red' : 'text-white'}`} onClick={goToCalculadora}>Calculadora de aço</a></li>
            <li><a className={`cursor-pointer hover:text-red hover:scale-105 transition duration-200 block ${isSobreActive ? 'text-red' : 'text-white'}`} onClick={goToSobre}>Sobre</a></li>
            <li><a className={`cursor-pointer hover:text-red hover:scale-105 transition duration-200 block ${isOrcamentoActive ? 'text-red' : 'text-white'}`} onClick={goToOrcamento}>Orçamento</a></li>
          </ul>
        </nav>
      </section>

      <section>
        <button 
          className="text-white flex lg:hidden focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={32} strokeWidth={2.5} /> : <TextAlignJustify size={32} />}
        </button>

        <div
          className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#1a1a1a]/95 z-40 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 h-[calc(100vh-65px)]' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          onClick={closeMenu}
        >
          <div
            className="h-full overflow-y-auto py-12 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="flex flex-col items-center gap-6 text-white text-xl font-medium">
                <li><a className="cursor-pointer active:text-red" onClick={() => { goToHome(); closeMenu(); }}>Home</a></li>
                
                <li className="flex flex-col items-center w-full max-w-xs">
                  <a className="flex items-center gap-2 cursor-pointer py-2" onClick={() => setProdutosOpen(!produtosOpen)}>
                    Produtos {produtosOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </a>

                  <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${produtosOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col items-center gap-5 py-6 px-4 text-base bg-white/5 border ">
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(0); closeMenu(); }}>Cantoneiras</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(1); closeMenu(); }}>Perfis Dobrados Sob Medidas</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(2); closeMenu(); }}>Perfis Laminados</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(3); closeMenu(); }}>Ferro Redondo</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(4); closeMenu(); }}>Vigas de Aço</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(5); closeMenu(); }}>Tubos de aço</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(6); closeMenu(); }}>Barra chata</a></li>
                      <li><a className="opacity-80" onClick={() => { goToProdutoEspecifico(7); closeMenu(); }}>Perfis U Enrijecidos</a></li>
                      <li><a className="opacity-100" onClick={() => { goToProdutoEspecifico(8); closeMenu(); }}>Perfis U Simples</a></li>
                    </ul>
                  </div>
                </li>

                <li><a onClick={() => { goToCalculadora(); closeMenu(); }}>Calculadora de aço</a></li>
                <li><a onClick={() => { goToSobre(); closeMenu(); }}>Sobre</a></li>
                <li><a onClick={() => { goToOrcamento(); closeMenu(); }}>Orçamento</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;