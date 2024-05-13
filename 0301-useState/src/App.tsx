import React, { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';
import Exercicio from './Exercicio';

function App() {

  {/* É uma boa prática mantermos apenas uma propriedade informando o estado do elemento */}
  // let ativo: boolean = true;

  // function handleClick() {
  //   // Se for false, muda pra true. Se for true, muda pra falso
  //   // !ativo = valor contrário de ativo
  //   ativo = !ativo;
  // }

  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({nome: "João", idade: 18});

  // Modal
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setAtivo({...dados, idade: ++dados.idade, faculdade: "Possui faculdade"});
  }
 
  // const testeHook = React.useState(1);
  // console.log(testeHook);
  // const ativoValor = testeHook[0];
  // console.log(ativoValor)
  // const atualizaValor = testeHook[1];
  // console.log(atualizaValor);

  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function atualizaItems() {
    // Errado. Modifique o estado apenas com a função de atualizar.
    items.push('Novo item');
  }
  function atualizaItemsCorreto() {
    // Correto. Desestruturar a array atual criando uma nova array.
    setItems([...items, 'Novo item']);
  }

  // Posso ter o callback dentro do useState
  const [btnAtivo, setBtnAtivo] = React.useState(() => {
    const estado = window.localStorage.getItem('ativo');
    return estado;
  });
  function handleCallback() {
    // usando um callback
    setBtnAtivo((anterior) => !anterior);
  }


  // React.StrictMode
  console.log('Repete duas vezes porque estamos usando o StrictMode e estamos em modo de produção.')
  const [contar, setContar] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1']);

  function handleContar() {
    setContar((anterior) => {
      setItens((items) => [...items, 'Item' + (contar + 1)]) // Isso é um efeito colateral, pois é ativado duas vezes seguidas
      return contar + 1
    })
  }

  return (
    <>
      {/* Estado
        O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato, etc.
      */}
             {/* se estiver ativo, colocado o disable, se não estiver... */}
      {/* <button onClick={handleClick} disabled={!ativo}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button> */}

      {/* Hooks
        Os hooks são funções especiais do react que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.
        // Toda vez que a função for ativada, ele irá renderizar o componente
      */}

      {/* React.useState
      O useState é uma função que retorna uma Array com 2 valores. O primeiro guarda o dado do estado atual, pode ser qualquer tipo de dado como string, arrays, números, boolean, null, underfined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor. 

      Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.
      
      */}

      {/* Props
      Podemos passar o estado e a função modificação como propriedades para outros elementos.
      
      */}

      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
      

      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botão Ativo" : "Botão Inativo"}
      </button>

      <div>
        <h1>{dados.nome}</h1>
        <h1>{dados.idade}</h1>
        <h1>{dados.faculdade}</h1>
        <input onClick={() => handleClick()} type="button" value="+Idade" />
      </div>


      {/* Reatividade
        Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela garante a reatividade dos componentes.
      */}

      <h3>{items}</h3>
      <button onClick={() => atualizaItems()}>Modificando o elemento</button>
      <button onClick={() => atualizaItemsCorreto()}>Usando função pra modificar e atualizar</button>

      {/* Callback
        Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado na função.
      */}
      <h3>{btnAtivo ? "Ativo Callback" : "Inativo Callback"}</h3>
      <button onClick={handleCallback}>Callback</button>

      <br/>

      {/* React.StrictMode
        O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos colaterais (side effects) e eliminarmos as mesmas.

        Funções com efeitos colaterais são aquelas que modificam estados que estão fora da mesma.
      */}
      <button onClick={()=>handleContar()} >{contar}</button>
      {itens.map(item => <li key={item}>{item}</li>)}

      <br/><br/>

      <Exercicio/>

    </>
  )
}

export default App
