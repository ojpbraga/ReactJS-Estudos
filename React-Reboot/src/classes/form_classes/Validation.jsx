import React, { useState } from 'react'

function Input({label, id, type, value, onChange, ...props}) {

    return (
        <label>
            {label}
            <input type={type} id={id} value={value} onChange={onChange} {...props} />
        </label>
    )
}

function Validation() {
    // onBlur
    // O onBlur é atividado no momento em que tira o foco do elemento, momento perfeito para validarmos o dado, usando REGEX.
    const [cep, setCep] = useState('');
    const [error, setError] = useState(null);

    function validateCep(value) {
        if(value.lenght) {
            setError("Preencha um valor");
            return false;

        } else if(!/^\d{5}-?\d{3}$/.test(value)) {
            setError("Preencha um CEP válido")
            return false;

        } else {
            setError(null);
            return true;
        }
    }

    function handleOnBlur({target}) {
        validateCep(target.value);
    };

    function handleChange({target}) {
        if(error) validateCep(target.value);
        setCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(validateCep(cep)) {
            console.log("Enviou");
        } else {
            console.log("Não enviou")
        }

    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Validation</h2>
        <Input label="CEP" type="text" id="cep" placeholder="00000-000"  onBlur={handleOnBlur} value={cep} onChange={handleChange}/>
        {error && <p>{error}</p>}
        <button>Send</button>
    </form>
  )
}

export default Validation