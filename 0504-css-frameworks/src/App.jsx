import { useState } from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'react-bootstrap'

function App() {
  // CSS
  // Podemos adicionar qualquer library/framework de css ao React. Com o @next vamos instalar a versão 5 do bootstrap. Popper é necessário para algumas funções do bootstrap.
  
  return (
    <>
      <div className='card bg-dark text-white m-5' style={{maxWidth: "20rem"}}>
        <div className='card-header'>Notebook</div>
        <div className='card-body'>
          <h5 className='card-title'>R$2500</h5>
          <p className='card-text'>Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.</p>
        </div>
      </div>

      {/* Utilizando react-bootstrap: */}

      <Card bg="dark" text="white" className='m-5'>
        <CardHeader>Notebook</CardHeader>
        <CardBody>
          <CardTitle>R$2500</CardTitle>
          <CardText>Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.</CardText>
        </CardBody>
      </Card>

    </>
  )
}

export default App
