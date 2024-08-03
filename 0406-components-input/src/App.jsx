import { useState } from "react";
import Input from "./components/Input";

function App() {
  // Input
  // Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.
  const [email, setEmail] = useState();

  return (
    <>
      <form action="">
        <Input 
          label="Email" 
          type="email" 
          id="email" 
          value={email} 
          setValue={setEmail}
        />
        <p>{email}</p>

        <Input 
          label="Password" 
          type="password" 
          id="password"
        />
        
      </form>
    </>
  )
}

export default App
