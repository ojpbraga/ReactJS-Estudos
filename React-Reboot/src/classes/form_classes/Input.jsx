import { useState } from "react";

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
    )
}
export default Input;