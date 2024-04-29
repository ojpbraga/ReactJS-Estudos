import { useState } from 'react'

function App() {

  const ativo: boolean = true;

  return (
    <>
      {/* Estado
        O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato, etc.
      */}
      <button disabled={!ativo}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>

    </>
  )
}

export default App
