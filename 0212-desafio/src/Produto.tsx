import React, { ComponentProps } from 'react'

interface ProdutoProsp {
    nome: string,
    propriedades: Array<string>,
}

function Produto({nome, propriedades}: ProdutoProsp) {
  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
        <p>{nome}</p>
        <ul>
            {propriedades.map(propriedade => {
                return <li>{propriedade}</li>
            })}
        </ul>
    </div>
  )
}

export default Produto