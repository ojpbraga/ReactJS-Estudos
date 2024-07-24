import React, { ChangeEvent, useEffect, useState } from 'react'

const formFields = [
    {
        id: "nome",
        label: "Nome",
        type: "text"
    },
    {
        id: "email",
        label: "Email",
        type: "text"
    },
    {
        id: "senha",
        label: "Senha",
        type: "password"
    },
    {
        id: "cep",
        label: "CEP",
        type: "text"
    },
    {
        id: "rua",
        label: "Rua",
        type: "text"
    },
    {
        id: "numero",
        label: "Número",
        type: "text"
    },
    {
        id: "bairro",
        label: "Bairro",
        type: "text"
    },
    {
        id: "cidade",
        label: "cidade",
        type: "text"
    },
    {
        id: "estado",
        label: "Estado",
        type: "text"
    },
]

function Exercise() {
    // Exercise
    // Faça um fetch (POST) para a API abaixo
    // Para a criação ser aceita é necessário enviar dodos de:
    // nome, email, senha, cep, rua, numero, bairro, cidade e estado

    // Essa é a função utilizado para realizar o POST
    // fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // form é o objeto com os dados do formulário
    // body: JSON.stringify(form),
    // });
  
    // Mostre uma mensagem na tela, caso a resposta da API seja positiva

    const [form, setForm] = useState(formFields.reduce((acc, field) => {
        console.log(acc)
        return {
            ...acc,
            [field.id]: ''
        }
    }, {}));

    function handleChange(event: ChangeEvent) {
        if(event.target) {
            const {id, value} = event.target;
            setForm({...form, [id]: value})
            console.log(form)
        }
    }

    const [erro, setError] = useState<boolean | undefined>(undefined);

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

         try {
             fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(form),
                }).then(r => console.log(r));

            } catch {
             setError(true);
        }
    }

  return (
    <div>
        <h1>Exercise</h1>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
            {formFields.map(({id, label, type}) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} onChange={(event) => handleChange(event)} />
                </div>
            ))}
            <button>Send</button>
        </form>

        {erro ? <p>Sucesso</p> : null}

    </div>
  )
}

export default Exercise