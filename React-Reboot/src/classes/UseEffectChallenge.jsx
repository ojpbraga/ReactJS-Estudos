import React, { useEffect, useState } from 'react'

function Product({product}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if(product !== 'null') {
                let response = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+product);
                response = await response.json();
                setData(response);
                window.localStorage.setItem('product', product);
            }
          
        }
        fetchData();
    }, [product]);

    if(data) {
        return (
            <div>
                <h4>{data.nome}</h4>
                <p>R$ {data.preco}</p>
            </div>
        )
    } else {
        return null;
    }
}

function UseEffectChallenge() {

    const [product, setProduct] = useState(() => (window.localStorage.getItem('product') ? window.localStorage.getItem('product') : null));

    function handleClick({target}) {
        setProduct(target.innerText);
    }

  return (
    <div>
        <h3>UseEffectChallenge</h3>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        <Product product={product}/>

    </div>
  )
}

export default UseEffectChallenge