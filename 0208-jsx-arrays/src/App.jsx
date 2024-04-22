import { useState } from 'react'

function App() {

  const produtos = ['Notebook', 'Smarphone', 'Tablet'];

  const empresas = [<li key="e1">Google</li>, <li key="e2">Amazon</li>];

  const filmes = ["Lagoa", "Voar do Pássaro", "Árvore Falante"];

  const livros = [
    {nome: 'A Game Of Thrones', ano: 1996},
    {nome: 'A Clash Of Kings', ano: 1998},
    {nome: 'A Storm Of Swords', ano: 2000},
  ];

  // Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
  const produtosDisponiveis = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  return (
    <>
      {/* JSX Arrays
        O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula que deve modificar a array para o resultado desejado.
      */}
      <p>{produtos}</p>

      {/* Keys
        O JSX necessita de uma array única para cada elemento da array. React compara as chaves que existem para modificar o item novo
       */}
       <ul>{empresas}</ul>

       {/* Map
        É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
       */}
       <ul>{filmes.map((filme, index) => { // Não é o ideal utilizar o index
        return <li key={filme}>{filme}</li>;
      })}</ul>

      {/* Array de Objetos
        O cenário mais comum é trabalhar com array´s de objetos.
      */}
      <ul>
        {/* {livros.map(({nome, ano}) => ano >= 2000 ? <li>{nome}, {ano}</li> : null)} */}
        {livros.filter(({ano}) => ano >= 1998).map(({nome, ano}) => <li key={nome}>{nome}, {ano}</li>)}
      </ul>
      
      {produtosDisponiveis.filter(({preco}) => +preco.replace("R$ ", "") > 1500)
      .map(({id, nome, preco, cores}) => {
        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: {preco}</p>
            <ul style={{gap: "8px", display: "grid"}}>
              {cores.map((cor) => <li key={cor} style={{background: `${cor}`, color: "#fff"}}>{cor}</li>)}
            </ul>
          </div>
        )
      })}

    </>
  )
}

export default App
