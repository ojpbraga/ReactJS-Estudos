import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './form/Form'
import Teste from './Teste'

function App() {

  return (
    
    <>
      {/* Componentes
        O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os componentes funcionais.
      */}
      <Footer/>
      <Form/>
      <Form/>
      <Header/>

      {/* Interface
        Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.
      */}


      {/* Return
        Um componente deve sempre retornar algo. O retornopode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSx, null). Retornar objeto dá erro!
      */}

      <Teste/>

      {/* React.Fragment
        Um componente deve sempre retornar um elemento único no return. Caso você deseja retornar mais de um elemento, envolva os mesmos em uma div ou dentro do React.Fragment ou <></>
      */}

    </>
  )
}

export default App
