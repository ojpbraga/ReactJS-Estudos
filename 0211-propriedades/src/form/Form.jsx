import React from 'react'
import Input from './Input'
import Button from './Button'

function Form() {
  const logado = true;
  const contas = ['G1', 'G2'];

  return (
    <form>
        <Input label="Email" id="email" required/>
        <Input label="Senha" id="senha" type="password"/>
        <Button contas={contas} logado={logado}/>
    </form>
  )
}

export default Form