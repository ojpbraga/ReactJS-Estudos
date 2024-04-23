import React from 'react'
import Form from './form/Form'

function App() {

  const Titulo = ({cor, texto, children}) => {
    return <h1 style={{color: cor}}>{texto}, {children}</h1>
  }

  return (
    <>
      {/* Propriedades */}
      {/* Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecimentos como propriedades ou props. */}
      <Titulo cor="black" texto="Primeiro Título"/>

      {/* Desestruturação
        É comum desestruturarmos as propriedades:
        const Titulo = (props) para:
        const Titulo = ({cor, titulo})
      */}

      {/* Children
        Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children
      */}
      <Titulo cor="blue" texto="Segundo Título">Isso é o Children <p>isso também</p></Titulo>

      {/* Rest e Spread
      Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.
      */}

      <Form/>

      {/* Dados
        Podemos passar diferentes tipos de dados e até outros componentes nas propriedades
      */}


    </>
  )
}

export default App
