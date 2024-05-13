import React from 'react'
import Product from './Product';

function Exercicio() {
    // Os links abaixo puxam dados de um produto em formato JSON
    // https://ranekapi.origamid.dev/json/api/produto/tablet
    // https://ranekapi.origamid.dev/json/api/produto/smartphone
    // https://ranekapi.origamid.dev/json/api/produto/notebook
    // Crie uma interface com 3 botões, um para cada produto.
    // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
    // Mostre apenas um produto por vez
    // Mostre a mensagem carregando... enquanto o fetch é realizado

    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    async function fetchProduto(link: string) {
        setLoading(true);
        const response = await fetch(link);
        const respondeJson = await response.json();
        setDados(respondeJson);
        setLoading(false);
    }
    
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
        <button onClick={() => fetchProduto('https://ranekapi.origamid.dev/json/api/produto/tablet')}>Tablet</button>
        <button onClick={() => fetchProduto('https://ranekapi.origamid.dev/json/api/produto/smartphone')}>Celular</button>
        {loading && <p>Carregando...</p>}
        {!loading && dados && <Product dados={dados}/>}
    </div>
  )
}

export default Exercicio