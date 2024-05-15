import React, { useEffect, useState } from 'react'
import ProductEx from './ProductEx'

function Exercise() {
    // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
    // https://ranekapi.origamid.dev/json/api/produto/notebook
    // https://ranekapi.origamid.dev/json/api/produto/smartphone
    // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
    // Defina o produto clicado como uma preferência do usuário no localStorage
    // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
    
    const [product, setProduct] = useState<string>();

    useEffect(() => {
        function getLocalStorage() {
            const response = localStorage.getItem("product");
            if(response !== null && response !== undefined) setProduct(response);
        }
        getLocalStorage();
    }, []);

    useEffect(() => {
        if(product !== null && product !== undefined) localStorage.setItem("product", product);
    }, [product]);

    function handleClick({ target }) {
        setProduct(target.innerText);
    }

  return (
    <div>
        <h3>Exercício</h3>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <ProductEx product={product}/>
    </div>
  )
}

export default Exercise