import { useNavigate, useLocation } from 'react-router-dom';

export const useMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Funções específicas para cada rota
  const goToProdutoEspecifico = (id: number) => {
  navigate(`/produtos/${id}`);
  };
  const goToHome = () => navigate('/');
  const goToProdutos = () => navigate('/produtos');
  const goToSobre = () => navigate('/sobre');
  const goToOrcamento = () => navigate('/orcamento');
  const goToCalculadora = () => navigate('/calculadora');
  
  
  

  // Auxiliar para saber qual página está ativa (útil para estilizar o botão)
  const currentPath = location.pathname;

  return {
    goToProdutos,
    goToSobre,
    goToOrcamento,
    goToHome,
    goToCalculadora,
    goToProdutoEspecifico,
    currentPath,

    // Verificadores booleanos (opcional, mas limpa o componente de UI) 
    isHomeActive: currentPath === '/',
    isProdutosActive: currentPath === '/produtos',
    isSobreActive: currentPath === '/sobre',
    isOrcamentoActive: currentPath === '/orcamento',
    isCalculadoraActive: currentPath === '/calculadora'
  };
};