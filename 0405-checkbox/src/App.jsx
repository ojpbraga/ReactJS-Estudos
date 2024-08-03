import { useState } from "react";
import Exercise from "./Exercise";

function App() {

  // Checkbox
  // O estado do checkbox está relacionado ao checked
  const [terms, setTerms] = useState(false);

  // Multiplos
  // Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados
  const [colors, setColors] = useState(['red']);

  function handleChange({target}) {
    if(target.checked) {
      setColors([...colors, target.value]);
      console.log(colors)
    } else {
      setColors(colors.filter((color) => color !== target.value));
      console.log(colors)
    }
  }

  // Verifica dentro do useState se já tem alguma opção por default.
  function handleChecked(color) {
    return colors.includes(color);
  }

  return (
    <>
      <form action="">
        <label>
          <input 
            type="checkbox" 
            name="" 
            id=""
            value="terms"
            checked={terms}
            onChange={({target}) => setTerms(target.checked)}
          />
          Accept terms
        </label>
        <p>{terms ? "Accepted" : "Denied"}</p>
      </form>

      <form action="">
        <label>
          <input 
            type="checkbox"
            value="blue"
            checked={handleChecked("blue")}
            onChange={handleChange}
          />
          Blue
        </label>

        <label>
          <input 
            type="checkbox"
            value="red"
            checked={handleChecked("red")}
            onChange={handleChange}
          />
          Red
        </label>
      </form>

      <Exercise/>

    </>
  )
}

export default App
