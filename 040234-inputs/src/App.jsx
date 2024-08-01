import { useState } from 'react'

function App() {
  // Textarea
  // No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.
  const [menssager, setMenssager] = useState();

  // Select
  // O value e change são definidos no select. Para definirmos um valor inicial, coloque o mesmo no useState.
  const [select, setSelect] = useState();  // É importante lembrar que o selecionado inicialmente é nada, pois o state não está setado.

  // Radio
  // No radio, comparamos o valor selecionado com o valor do input dentro do atributo checked. O que retornar true irá marcar o botão.
  const [radio, setRadio] = useState();

  return (
    <>
     <form action="">
      <textarea 
        name=""
        id="mensagem"
        value={menssager}
        rows="5"
        onChange={({target}) => setMenssager(target.value)}
        />
        <p>{menssager}</p>
     </form>

     <form action="">
      <select id="products" value={select} onChange={({target}) => setSelect(target.value)}>
        <option value="" disabled>Select</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>Selected: {select}</p>
     </form>

     <form action="">
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          onChange={({target}) => setRadio(target.value)} 
        />
        Notebook
      </label>

      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          onChange={({target}) => setRadio(target.value)} 
        />
        Smartphone
      </label>
      <p>Selected: {radio}</p>
     </form>

    </>
  )
}

export default App
