import { useState } from "react";

const field = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        label: 'Email',
        type: 'text',
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
    },
    {
        id: 'cep',
        label: 'CEP',
        type: 'text',
    },
    {
        id: 'adress',
        label: 'Adress',
        type: 'text',
    },
    {
        id: 'number',
        label: 'Number',
        type: 'text',
    },
    {
        id: 'town',
        label: 'Town',
        type: 'text',
    },
    {
        id: 'city',
        label: 'City',
        type: 'text',
    },
    {
        id: 'state',
        label: 'State',
        type: 'text',
    },
];

const Challenge = () => {
    
    const [form, setForm] = useState(field.reduce((acc, field) => {
        return {
            ...acc,
            [field.id]: ''
        }
    }, {}));
    
    const [loaded, setloaded] = useState(false);
    const [error, setError] = useState(false);
    const [dataSent, setDataSent] = useState(false);

    async function fetchPost(data) {
        try {
            setDataSent(false);
            setError(false);
            setloaded(true);
            const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const status = await response.json();
            if(status) {
                if(status.ID) setDataSent(true), console.log('Ok');
                
                if(status.data.status === 403) setDataSent(false), setError(status.message);
            }

        } catch(error) {
            setError("Erro ao enviar!");
            console.log(error)
            setDataSent(false);
        } finally {
            setloaded(false);
        }
    };

    function handleChange({target}) {
        const {id, value} = target;
        setForm({...form, [id]:value});
        // console.log(form);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetchPost(form);
    }

    return (
        <form style={{border:'1px solid white', margin:'5px', borderRadius:'7px', padding: '4px'}} onSubmit={handleSubmit}>
            <h1>Challenge</h1>
            {
                field.map(({id, label, type}) => (
                    <div key={id}>
                        <label htmlFor={id}>{label}: </label>
                        <input type={type} id={id} onChange={handleChange} value={form[id]} required/>
                    </div>
                ))
            }
            <button>Enviar!</button>
            {loaded && <div>Enviando...</div>}
            {error && <div>{error}</div>}
            {dataSent && <div>Enviado com sucesso!</div>}
        </form>
    )
}


const Input = () => {
    // Reatividade
    // Para criarmos campos de formulário reativos, devemos definir o estado para value e a função atualizadora para o onChange.
    const [name, setName] = useState('');
    // Ou (mais otimizado)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    // Form 
    // Controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá previnir o comportamento padrão, que seria atualizar a página, enviando uma requisição para o que estiver em action=''.
    function handleSubmit(event) {
        event.preventDefault();
        console.log(name);
    }

    function handleChange({target}) {
        const {id, value} = target;
        setForm({...form, [id]:value});
        console.log(form);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Input</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={({target}) => setName(target.value)} />
                <p>{name}</p>



                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={form.email} onChange={handleChange} />
                {form.email}
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={form.password} onChange={handleChange} />
                {form.password}
                <br/>
                <button>Send</button>
            </form>
            <Challenge/>
        </>
    )
}
export default Input;