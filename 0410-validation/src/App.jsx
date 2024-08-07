import { useState } from 'react'
import Input from './components/Input';

function App() {

  // onBlur
  // O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  function validationCep(value) {
    if(value.lenght === 0) {
      setError("Preencha o valor");
      return false;
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({target}) {
    // const regex = /^\d{5}-?\d{3}$/;
    // const validation = regex.test(target.value);
    // console.log(validation)
    validationCep(target.value);
  };

  function handleChange({target}) {
    if(error) validationCep(target.value)
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(validationCep(cep)) {
      console.log("Sent")

    } else {
      console.log("It is did not send")
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          label="CEP" 
          type="text" 
          id="cep" 
          placeholder="00000-000"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error}
        <button>Send</button>
      </form>
    </>
  )
}

export default App
