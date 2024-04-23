import { useState } from 'react'

function App() {

  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  function handleScroll(event) {
    return console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      {/* Eventos
        Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React, porém seguindo as especificações da W3C.
      */}

      <div>
        <button onClick={handleClick}>Camisa</button>
        <button onMouseMove={handleClick}>Bermuda</button>
        <button onMouseMove={(event) => console.log(event.target.innerText)}>Sapato</button>
      </div>

      {/* window/document
        Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com Javascript normalmente, usando o addEventListener.
      */}

      <div style={{height: "120vh"}}></div>

    </>
  )
}

export default App
