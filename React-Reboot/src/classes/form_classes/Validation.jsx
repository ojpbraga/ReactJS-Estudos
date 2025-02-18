import React, { useState } from 'react'
import useForm from './useForm';

function Input({label, id, type, value, onChange, onBlur, placeholder, error}) {

    return (
        <label>
            {label}
            <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
            {error && <p>{error}</p>}
        </label>
    )
}

function Validation() {
    // onBlur
    // O onBlur é atividado no momento em que tira o foco do elemento, momento perfeito para validarmos o dado, usando REGEX.

    const email = useForm('email');
    const cep = useForm('cep');
    const name = useForm('name');
    const middle = useForm(false);

    function handleSubmit(event) {
        event.preventDefault();
        // Caso faça um fetch, validar aqui o formulário e após realizar o fetch
        if(cep.validate() && email.validate() && name.validate()) {
            console.log("Enviou");
        } else {
            console.log("Não enviou");
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Validation</h2>
        <Input 
            label="CEP" 
            type="text" 
            id="cep" 
            placeholder="00000-000" 
            value={cep} 
            {...cep}
        />

        <br/>

        <Input
            label="Email"
            id="Email"
            type="email"
            {...email}
        />

        <br/>

        <Input
            label="Name:"
            id="name"
            type="name"
            {...name}
        />

        <br/>

        <Input
            label="Sobrenome:"
            id="middle"
            type="name"
            {...middle}
        />

        <br/>

        <button>Send</button>
    </form>
  )
}

export default Validation