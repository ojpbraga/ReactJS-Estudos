import React, { ComponentProps, useEffect, useState } from 'react'
import Product from './Product';
import Exercise from './Exercise';

function App() {

  // useEffect
  // Todo componente posssui um ciclo de vida Os principais momentos acontecerem quando o componente é renderizado, atualizado ou destruído. Com o useEffect() podemos definir em callback que irá ser executado durante certos momentos do ciclo de vida do componente.

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('sem dependencia (sempre roda)')
  })

  useEffect(() => {
    // com dependencia depende da mudança de estado do count
    document.title = "Total " + count
  }, [count])

  // Código sem dependencia, sempre vai rodar quando for atualizado um estado, pois o componente é uma função
  console.log("Executou")


  // Componente Montou
  // O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fectch de dados no servidor, por exemplo.

  const [dados, setDados] = useState(null);
  useEffect(() => {
    // Se o fetch estivesse fora do useEffect, toda vez que o comando fosse atualizado, o mesmo seria executado
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook").then(response => response.json()).then(r => setDados(r))
    
  }, [])


  // Múltiplos Efeitos
  // Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.


  // Antes de Desmontar (caso elemento saia da tela)
  // As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso, utilizamos um callback no retorno do callback do efeito 
  // Exemplo no componente produto

  const [active, setActive] = useState(false);

  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setActive(!active)}>Modal</button>
      {active && <Product/>}

      <br/><br/>
      {
        dados && (
          <div>
            <p>{dados.id}</p>
            <p>{dados.preco * count}</p>
          </div>
        )
      }
      <br/><br/>
      <Exercise/>
    </div>
  )
}

export default App
