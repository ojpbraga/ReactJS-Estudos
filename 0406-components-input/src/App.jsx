import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";

function App() {
  // Input
  // Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.
  const [email, setEmail] = useState();

  const [product, setProduct] = useState(""); // Iniciando com "" p/ o select estar selecionado

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
        
        <Select 
          options={['smartphone', 'notebook']}
          value={product}
          setValue={setProduct}
        />
        <p>Selected: {product.charAt(0).toUpperCase() + product.slice(1)}</p>

      </form>

      
    </>
  )
}

export default App
