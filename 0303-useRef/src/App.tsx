import { useEffect, useRef, useState } from 'react'
import ShoppingCard from './ShoppingCard';

function App() {

  // useRef
  // Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.
  const video = useRef();
  const inputElement = useRef();

  useEffect(() => {
    console.log(video.current);
  }, []); // Precisa renderizar primeiro e depois temos o valor.

  const [comentarios, setComentario] = useState(["Teste", "Teste 2", "Teste 3"]);
  const [input, setInput] = useState('');

  function handleClick() {
    setComentario([...comentarios, input])
    setInput('');
    inputElement.current?.focus();
    
  }

  // Referência
  // o Seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.


  return (
    <div>
      <video src="" ref={video}></video>

      <div>
        <h3>Comentários</h3>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
          <input type="text" value={input} onChange={({target}) => setInput(target.value)} ref={inputElement} />
          <button
          //  onClick={() => setComentario([...comentarios, input])}>
          onClick={handleClick}>
            Comentar!
           </button>
      </div>

      <br/><br/>

      <ShoppingCard/>

    </div>
  )
}

export default App
