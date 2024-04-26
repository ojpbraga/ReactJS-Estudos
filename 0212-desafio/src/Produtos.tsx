import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';

function Produtos() {

    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];

  return (
    <section>
        <Titulo texto="Produtos"/>
        <div style={{display: "grid", gap: "10px"}}>

            {produtos.map((produto) => {
                return <Produto key={produto.nome} nome={produto.nome} propriedades={produto.propriedades}/>
            })}
            
        </div>
    </section>
  )
}

export default Produtos