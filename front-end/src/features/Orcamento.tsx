
function Orcamento(){
    return(
        <div>
            <form>
                <label>Digite o nome da empresa: </label>
                    <input 
                    placeholder="Nome da empresa..."
                    ></input>
                <label>Digite o telefone: </label>
                    <input 
                    placeholder="Telefone..."
                    ></input>
                <label>Digite o Produto:</label>
                    <input
                    placeholder="Nome do produto..."
                    ></input>
                <label>Digite a quatidade: </label>
                    <input
                    placeholder="Quantidade..."
                    ></input>
            </form>

            <button>Receber orçamento</button>
        </div>
    )
}

export default Orcamento;