import { useCallback, useMemo, useState } from 'react'

const set1 = new Set(); // Parecido com uma array que só recebe itens únicos
const set2 = new Set();

const Product = () => {

  const func1 = () => {
    console.log("without useCallback");
  }

  const func2 = useCallback(() => {
    console.log("with useCallback");
  }, []);

  set1.add(func1);
  set2.add(func2);
  console.log("set 1: ", set1);
  console.log("set 2: ", set2); // Não cria novas funções


  return (
    <div>
      <p onClick={func1}>Product 1</p>
      <p onClick={func2}>Product 2</p>
    </div>
  )
}

function App() {

  // useMemo
  // Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e um array de dependências.

  function slowOperation() {
    let c: number;
    for(let i = 0; i < 100000000; i++) {
      c = i + i/10;
    }
    return c;
  }

  const [count, setCount] = useState(0);
  // const value = useMemo(() => {
  //   const localStorangeItem = window.localStorage.getItem('classUseMemo');
  //   console.log('Aconteceu o useMemo');

  //   return localStorangeItem;
  // }, []) 
  // Só executa na criação, não executa novamente. Utilizado para operações lentas (matemáticas), somas de arrays gigantes
  // Esse exemplo não fará diferença em relação a performance

  const timeInitial = performance.now();
  let value = useMemo(() => slowOperation(), []);
  console.log(performance.now() - timeInitial);

  console.log(value);


  // useCallback
  // Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será criado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  // Toda vez que é renderizado, uma função normal seria renderizada, porém se usarmos o useCallback, a função não será renderizada.

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Product/>
    </>
  )
}

export default App
