import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <form>
        <p>
            <label htmlFor="nome">Nome</label>
            <Input onkeyup={(event) => setName(event.target.innerText)}/>
        </p>

        <p>  
            <label htmlFor="email">Email</label>
            <Input onkeyup={(event) => setEmail(event.target.innerText)}/>
        </p>

        <Button name={name} email={email}/>
    </form>
  )
}

export default Form