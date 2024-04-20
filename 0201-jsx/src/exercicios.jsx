import React from "react";

export function Exercicios() {
    // Mostre os dados da aplicação, como aprensetado no vídeo
    // Não utilize CSS externo, use o style para mudar as cores
    // Se a situação estiver ativa pinte de verde, inativa vermelho
    // Se o gasto for maior que 10000 mostre uma mensagem
    const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = luana;

  // function totalGasto(dados) {
  //   const arrayValores = dados.compras.map((compra) => {
  //     const valor = +compra.preco.slice(3)
  //     return valor;
  //   })
  //   const total = arrayValores.reduce((valor, i) => {
  //     return valor + i;
  //   }, 0)
    
  //   return total;
  // }

  const total = dados.compras.map(compra => +compra.preco.replace("R$ ", "")).reduce((a, b) => a + b);

  return (
    <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
        <p>Total gasto: <span>{total}</span></p>
        {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  )
  
}