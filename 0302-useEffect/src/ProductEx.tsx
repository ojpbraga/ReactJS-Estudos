import React, { useEffect, useState } from 'react'

interface PropsProductEx {
  product: string | undefined;
}

function ProductEx({product}: PropsProductEx) {

  const [data, setData] = useState(
    {
            id: "",
            fotos: [
        {
          titulo: "",
          src: ""
        },
        {
          titulo: "",
          src: ""
        }
      ],
      nome: "",
      preco: "",
      descricao: "",
      vendido: "",
      usuario_id: ""
    
        }
  );

  useEffect(() => {
        async function fetchProduct(product: string) {
            const data = await fetch("https://ranekapi.origamid.dev/json/api/produto/" + product);
            const dataJson = await data.json();
            setData(dataJson);
        }
        if(product !== null && product !== undefined) fetchProduct(product);
    }, [product])

  return (
    <div>
        <h4>{data.nome}</h4>
    </div>
  )
}

export default ProductEx