import React from 'react'

interface PropsProduct {
    dados: {
        id: string,
        fotos: [
            {
                titulo: string,
                src: string
            }
        ],
        nome: string,
        preco: string,
        descricao: string,
        vendido: string,
        usuario_id: string
    }
}

function Product({dados}: PropsProduct) {

    // interface InterfaceFetchProduto {
    //     id: string,
    //     fotos: [
    //     {
    //                  titulo: string,
    //                  src: string
    //              }
    //          ],
    //          nome: string,
    //          preco: string,
    //          descricao: string,
    //          vendido: string,
    //          usuario_id: string
    //     }
    
        // const [dados, setDados] = React.useState(
            // {
            // id: "",
            // fotos: [
            //         {
            //             titulo: "",
            //             src: ""
            //         }
            //      ],
            //      nome: "",
            //      preco: "",
            //      descricao: "",
            //      vendido: "",
            //      usuario_id: ""
            // }
        // );
        
        // async function fetchProduto(link: string) {
        //     const response = await fetch(link);
        //     const respondeJson = await response.json();
        //     console.log(respondeJson)
        //     setDados(respondeJson);
        // }
        // fetchProduto(link);

  return (
    <div>
        <p>{dados.id}</p>
        <p>{dados.preco}</p>
        <p>{dados.fotos.map(obj => <img src={obj.src} alt="" width="100px"/>)}</p>
    </div>
  )
}

export default Product