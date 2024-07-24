import { ChangeEvent, EventHandler, FormEventHandler, useState } from "react"
import Exercise from "./Exercise";

function App() {

  // Reatividade
  // Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.

  const [name, setName] = useState<string>();

  // Form
  // No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá previnir o comportamento padrão, o que seria de atualizar a página, enviando uma requisição para o que estiver em action="".

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log(name);
  }

  // Multiplos Campos
  // Podemos definir um estado para cada campo.

  const [email, setEmail] = useState<string>("");

  // Objeto
  // Podemos definir um objeto que irá conter todos os valores dos campos do formulário.

  const [form, setForm] = useState({
    street: '',
    number: 0,
  })

  function handleSubmitObject(event: ChangeEvent) {
    if(event.target) {
      const {id, value} = event.target;
      console.log(id, value)
      setForm({...form, [id]: value }) // precisa de colchete em id, porque é entendido como a key do objeto, por isso usamos os colchetes para identificar como uma variável
    }
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={form.street} onChange={handleSubmitObject} />

        <label htmlFor="number">Number</label>
        <input type="number" id="number" value={form.number} onChange={handleSubmitObject} />

        <button>Send</button>

        <br/>
        {name}
        <br/>
        {email}
        <br/>
        {form.street}
        <br/>
        {form.number}
      </form>

      <Exercise/>

    </div>
  )
}

export default App
