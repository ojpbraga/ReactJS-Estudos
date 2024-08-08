import useForm from "./hooks/useForm";
import Input from './components/Input';
import { useState } from "react";

function App() {
  const cep = useForm("cep");
  const email = useForm("email");
  const name = useForm();
  const middlename = useForm(false); // Não será verificado

  // useForm
  // Podemos definir um custom hook para formulários.

  function handleSubmit(event) {
    event.preventDefault();
    if(cep.validate() && email.validate() && name.validate()) {
      console.log("Sent")
    } else {
      console.log("It is did not send")
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          label="CEP" 
          type="text" 
          id="cep" 
          placeholder="00000-000"
          {...cep}
        />
        <Input 
          label="Email" 
          type="email" 
          id="email" 
          {...email}
        />
        <Input 
          label="Name" 
          type="text" 
          id="name" 
          {...name}
        />
        <Input 
          label="Middle Name" 
          type="text" 
          id="middlename" 
          {...middlename}
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App
