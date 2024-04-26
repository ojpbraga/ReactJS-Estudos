import { useState } from 'react'
import Produtos from './Produtos';
import Home from './Home';
import Header from './Header';

function App() {

  // Exercicio
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)

  const { pathname } = window.location;

  return (
    <>
      <Header/>
      {pathname === "/produtos.html" ? <Produtos/> : <Home/>}

    </>
  )
}

export default App
