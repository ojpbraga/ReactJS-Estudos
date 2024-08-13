import { useState } from "react";
import Radio from "./components/Radio";
import ChallengeSolution from "./ChallengeSolution";

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(perguntas.reduce((acc, question) => {
    return {
      ...acc, [question.id]: ''
    }
  }, {}));

  function handleCheck(index) {
    if(answer[perguntas[index].id] !== '') {
      setIndex(i => i + 1);
    } else {
      console.log("Value empty")
    } 
    if(index < perguntas.length) {
      validate();
    }
  }

  function validate() {
    perguntas.forEach((question, index) => {
      if(question.resposta == answer[perguntas[index].id]) {
        setCount(i => i+1);
        console.log(question.resposta, answer[perguntas[index].id])
      }
    })
  }

  return (
    <>
      {
        index < perguntas.length ?
          <form action="" onSubmit={(event) => event.preventDefault()}>
            <div>
              <h2>{perguntas[index].pergunta}</h2>
              <Radio 
                options={perguntas[index].options}
                value={answer[perguntas[index].id]}
                setValue={setAnswer}
                question={perguntas[index].id}
              />
            </div>
            <button onClick={() => handleCheck(index)}>Próximo</button>
          </form>
        : <div>
          <p>Você acertou {count} de {perguntas.length}</p>
        </div>
      }

      {/* Correção: */}
      <ChallengeSolution/>
    </>
  )
}

export default App
