import { useState } from 'react';
import { Button, ButtonReact } from './aula-jsx';
import { Exercicios } from './exercicios';

const titulo = <h1>Esse é um título</h1>;

function App() {
  const nome = "João";

  const desconto = 50;
  const preco = 250;

  const ativo = true;

  function myName() {
    return "João";
  }
  function quadrado(x) {
    return x * x;
  }
  const carro = {
    rodas: 4,
    marca: 'Ford',
  }

  const styleH1 = {
    color: 'blue',
    fontSize: '20px',
  }


  return (
    <div> {/* Só pode retornar um elemento único (um elemento pai). Podemos utilizar o <React.Fragment><React.Fragment/> ou <> </>, para adicionar dentro do root */}

      <h1 className='font-bold'>JSX</h1>
      {titulo}

      {/* Atributos podem ser passados como no HTML, porém com alguns casos especiais */}
      <a href="www.google" title='Não Clique'>Não Clique</a>

      {/* Casos Especiais
        O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className, htmlFor (forms)
      */}
      <Button className="blue-buttons"/>
      <ButtonReact/>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
      </form>

      {/* camelCase
        Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.
      */}
      <video height={1} src="" autoPlay></video>


      {/* Expressões / Variáveis
        Expressões e variáveis podem ser colocados dentro do JSX utilizando {}.
      */}
      <p>{nome}</p>
      <p className={ativo ? "ativo" : "desativado"}>Preço: {preco}, mas com desconto vai para {preco-desconto}</p>


      {/* JSX Expressões
        Você pode executar qualquer expressão dentro das chaves {}. Se o resultador da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true e false), underfined e null não irão aparecer na tela. Objetos irão retornar um erro.
      */}

      {myName()}
      {quadrado(2)}
      {carro.marca}
      <p>{true ? 'Verdadeiro' : 'Falso'} + {10}</p>
      <p>{new Date().toISOString()}</p>

      {/* Style
        O style irá receber um objeto com as propriedades do elemento em camelCase
      */}
      <h1 style={styleH1}>Exexplo</h1>
      <p style={{ color: 'green' }}>Parágrafos são parágrafos</p>

      <Exercicios/>

    </div>
  );

}

export default App
