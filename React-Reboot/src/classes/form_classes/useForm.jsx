import React, { useState } from 'react'

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'CEP Inválido'
    },
    email: {
        regex: /^\S+@\S+\.\S+$/,
        message: 'Email Inválido'
    },
    name: {
        message: 'Nome Inválido'
    },
    
}

function useForm(type) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {
        if (type === false) return true;
        if(value.length == 0) {
            setError("Preencha um valor");
            return false;

            // Verifica pois alguns campos como nome, não utilizam o regex
        } else if(types[type].regex && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false;

        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if(error) validate(target.value);
        setValue(target.value);
    };

  return {
    value, 
    setValue, 
    error, 
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm